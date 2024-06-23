<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CoursesCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'image_path',
    ];

    public function course()
    {
        $this->hasMany(Course::class);
    }
}
