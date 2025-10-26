<?php

namespace App\Http\Requests\Admin\Blog;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateBlogRequest extends FormRequest
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
            'title' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'alpha_dash', Rule::unique('blogs', 'slug')->ignore($this->blog)],
            'description' => ['required', 'string'],
            'image' => ['nullable', 'array', 'min:1'],
            'image.*' => ['image', 'mimes:jpeg,png,jpg,gif,webp', 'max:2048'],

        ];
    }
}
