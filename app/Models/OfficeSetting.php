<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class OfficeSetting extends Model
{

    protected $fillable = [
        'office_name',
        'office_logo',
        'office_cover',
        'office_banner',
        'office_banner_2',
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

    public function officeCover(): Attribute
    {
        return $this->castingFile(defaultPath: 'OfficeSetting');
    }
    public function officeBanner(): Attribute
    {
        return $this->castingFile(defaultPath: 'OfficeSetting');
    }
    public function officeBanner2(): Attribute
    {
        return $this->castingFile(defaultPath: 'OfficeSetting');
    }
}
