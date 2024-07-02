<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'image_path',
        'title',
        'price',
        'duration',
        'level',
        'language',
        'student_count',
        'rating_count',
        'teacher_id',
        'category_id',
        'description',
        'rating_average',
        'active'
    ];

    public function category()
    {
        return $this->belongsTo(CoursesCategory::class);
    }
    public function teacher()
    {
        return $this->belongsTo(Teacher::class, 'teacher_id', 'user_id');
    }
}
