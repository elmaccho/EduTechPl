<?php

namespace App\Http\Requests;

use App\Models\User;
use App\UserRoleEnum;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'surname' => ['required', 'string', 'max:255'],
            // 'email' => ['required', 'string', 'lowercase', 'email', 'max:255', Rule::unique(User::class)->ignore($this->user()->id)],
            'phone_number' => ['nullable', 'digits:9'],
            'role' => ['required', Rule::enum(UserRoleEnum::class)],
            'address' => ['nullable', 'string', 'max:255'],
            'profile_image_path' => ['nullable', 'image'],
            'about' => ['nullable', 'string', 'max:1024'],
        ];
    }
}