<?php

namespace App\Http\Requests;

use App\LanguagesEnum;
use App\LevelEnum;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CourseStoreRequest extends FormRequest
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
            'image_path' => ['required', 'image'],
            'title' => ['required', 'string'],
            'price' => ['required', 'decimal:0,99999'],
            'duration' => ['required', 'integer'],
            'level' => ['nullable', Rule::enum(LevelEnum::class)],
            'language' => ['nullable', Rule::enum(LanguagesEnum::class)],
            'student_count' => ['required', 'integer'],
            'rating_count' => ['required', 'integer'],
            'teacher_id' => ['required'],
            'category_id' => ['required'],
            'description' => ['nullable', 'string'],
            'rating_average' => ['required'],
            'active' => ['required' , 'boolean'],
        ];
    }
}
