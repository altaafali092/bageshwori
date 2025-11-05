<?php

namespace App\Traits;

use App\Helpers\Helper;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Support\Facades\Storage;

use function App\Helpers\deleteFile;

trait FileTrait
{
    public function castingFile(string $defaultData = '', string $defaultPath = '', ?string $fileToDelete = null): Attribute
    {
        return Attribute::make(
            get: function (?string $value) use ($defaultData) {
                if (!empty($value)) {
                    if (filter_var($value, FILTER_VALIDATE_URL)) {
                        return $value;
                    } else {
                        if (Storage::disk('public')->exists($value)) {
                            return Storage::disk('public')->url($value);
                        } else {
                            return $defaultData;
                        }
                    }
                } else {
                    return $defaultData;
                }
            },
            set: function ($value) use ($defaultPath, $fileToDelete) {
                if (!empty($value)) {
                    if (filter_var($value, FILTER_VALIDATE_URL)) {
                        return $value;
                    } else {
                        if (!empty($fileToDelete)) {
                            deleteFile($fileToDelete);
                        }
                        return $value->store($defaultPath, 'public');
                    }
                } else {
                    return null;
                }
            },
        );
    }
}
