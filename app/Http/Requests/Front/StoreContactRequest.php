<?php

namespace App\Http\Requests\Front;

use Illuminate\Foundation\Http\FormRequest;

class StoreContactRequest extends FormRequest
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
            'name' => ['required', 'string', 'max:255'],
            'email' => ['email', 'string'],
            'contact_no' => ['required', 'regex:/^(98|97)\d{8}$/', 'integer'],
            'image' => ['nullable', 'array', 'min:1'],
            'image.*' => ['image', 'mimes:jpeg,png,jpg,gif,webp', 'max:2048'],
            'subject'=>['required','string'],
            'message'=>['required','string'],
        ];
    }
}
