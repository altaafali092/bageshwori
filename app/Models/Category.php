<?php

namespace App\Models;

use App\Traits\FileTrait;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    use HasFactory, FileTrait;
    protected $fillable = [
        'name',
        'image',
        'slug',
        'description',
        'status'
    ];

    protected $casts = [
        'status' => 'boolean',
    ];

    public function image(): Attribute
    {
        return $this->castingFile(defaultPath: 'Category');
    }
    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }
}
