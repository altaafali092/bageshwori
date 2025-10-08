<?php

namespace App\Models;

use App\Traits\FileTrait;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory,FileTrait;
    protected $fillable = [
        'name',
        'image',
        'slug',
        'description',
        'status'
    ];
     public function image(): Attribute
    {
        return $this->castingFile(defaultPath: 'FoodCategory');
    }
}
