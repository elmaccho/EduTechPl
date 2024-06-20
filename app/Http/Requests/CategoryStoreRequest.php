<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CategoryStoreRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255', 'unique:courses_categories,name'],
            'image_path' => ['required', 'image'],
        ];
    }
}
// /storage/project/XW7mBHef7VB51Eq3/rMKd2r8egHtfXK3itF7znuUEiIUVNN0EnpyVhTyz.png