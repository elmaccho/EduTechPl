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
        'teacher_id',
        'category_id',
        'description',
    ];

    public function category()
    {
        return $this->belongsTo(CoursesCategory::class);
    }
    public function teacher()
    {
        return $this->hasOne(Teacher::class);
    }
}
