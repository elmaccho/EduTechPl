<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CoursesResource extends JsonResource
{
    public static $wrap = false;

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'image_path' => $this->image_path,
            'title' => $this->title,
            'description' => $this->description,
            'category' => $this->category->name,
            'teacher' => $this->teacher->user,
            'created_at' => (new Carbon($this->created_at))->format('Y-m-d'),
        ];
    }
}
