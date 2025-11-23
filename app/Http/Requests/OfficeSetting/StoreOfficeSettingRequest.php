<?php

namespace App\Http\Requests\OfficeSetting;

use Illuminate\Foundation\Http\FormRequest;

class StoreOfficeSettingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [

            'office_name' => ['required', 'string'],
            'office_logo' => ['nullable', 'image', 'mimes:jpg,jpeg,png', 'max:2048'],
            'office_cover' => ['nullable', 'image', 'mimes:jpg,jpeg,png', 'max:2048'],
            'office_banner' => ['nullable', 'image', 'mimes:jpg,jpeg,png', 'max:2048'],
            'office_banner_two' => ['nullable', 'image', 'mimes:jpg,jpeg,png', 'max:2048'],
            'office_email' => ['required', 'email'],
            'office_phone' => ['nullable', 'string', 'regex:/^(98|97)\d{8}$/'],
            'desc' => ['required', 'string'],
            'office_address' => ['required', 'string'],
            'office_google_map' => ['required', 'string'],
            'facebook' => ['nullable', 'string'],
            'twitter' => ['nullable', 'string'],
            'instagram' => ['nullable', 'string'],
            'youtube' => ['nullable', 'string'],
            'tiktok' => ['nullable', 'string'],
        ];
    }
}
