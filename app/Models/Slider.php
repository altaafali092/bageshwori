<?php

namespace App\Models;

use App\Traits\FileTrait;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Slider extends Model
{
    use HasFactory, FileTrait;
    protected $fillable = [
        'title',
        'image',
        'description',
        'status',
    ];
    protected $casts = [

        'status' => 'boolean',
    ];
    public function image(): Attribute
    {
        return $this->castingFile(defaultPath: 'Slider');
    }
}
