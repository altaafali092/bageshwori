<?php

namespace App\Models;

use App\Traits\FileTrait;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory, SoftDeletes, FileTrait;


    protected $with = ['category'];

    protected $fillable = [
        'category_id',
        'name',
        'image',
        'slug',
        'description',
        'price',
        'created_by',
        'in_stock',
        'is_featured',
    ];

    protected $casts = [
        'in_stock' => 'boolean',
        'is_featured' => 'boolean',

    ];
    public function image(): Attribute
    {
        return $this->castingFile(defaultPath: 'Product');
    }
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}
