<?php

namespace App\Models;

use App\Traits\FileTrait;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OfficeSetting extends Model
{
    use HasFactory, FileTrait;

    protected $fillable = [
        'office_name',
        'office_logo',
        'office_cover',
        'office_banner',
        'office_banner_two',
        'office_email',
        'office_phone',
        'desc',
        'office_address',
        'office_google_map',
        'facebook',
        'twitter',
        'instagram',
        'youtube',
        'tiktok',
    ];

    public function officeLogo(): Attribute
    {
        return $this->castingFile(defaultPath: 'OfficeSetting/officeLogo', fileToDelete: $this->attributes['office_logo'] ?? null);
    }
    public function officeCover(): Attribute
    {
        return $this->castingFile(defaultPath: 'OfficeSetting/officeCover', fileToDelete: $this->attributes['office_cover'] ?? null);
    }
    public function officeBanner(): Attribute
    {
        return $this->castingFile(defaultPath: 'OfficeSetting/officeBanner', fileToDelete: $this->attributes['office_banner'] ?? null);
    }
    public function officeBannerTwo(): Attribute
    {
        return $this->castingFile(defaultPath: 'OfficeSetting/officeBanner2', fileToDelete: $this->attributes['office_banner_2'] ?? null);
    }
}
