<?php

namespace App\Models;

use App\Traits\FileTrait;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Blog extends Model
{
    use HasFactory, SoftDeletes,FileTrait;

    protected $fillable=[
        'title',
        'description',
        'image',
        'status',

    ];
    protected $casts=[
        'status'=>'boolean'
    ];
    public function image():Attribute
    {
        return $this->castingFile(defaultPath: 'Blog');
    } 
}
