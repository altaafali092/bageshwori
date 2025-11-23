<?php

namespace App\Models;

use App\Traits\FileTrait;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Contact extends Model
{
    use HasFactory, FileTrait;
    use SoftDeletes;
    protected $fillable = [
        'name',
        'email',
        'message',
        'contact_no',
        'subject',
        'image',
        'status',
    ];

    protected $casts = [
        'status' => 'boolean',
    ];

    public function image(): Attribute
    {
        return $this->castingFile(defaultPath: 'contact');
    }
}
