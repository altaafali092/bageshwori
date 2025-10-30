<?php

namespace App\Models;

use App\Traits\FileTrait;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use PHPStan\PhpDocParser\Ast\Attribute as AstAttribute;

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
