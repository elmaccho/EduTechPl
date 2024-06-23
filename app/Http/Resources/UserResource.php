<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'name' => $this->name,
            'surname' => $this->surname,
            'role' => $this->role,
            'email' => $this->email,
            'profile_image_path' => $this->profile_image_path,
            'phone_number' => $this->phone_number,
            'address' => $this->address,
            'about' => $this->about,
            'accountType' => $this->getAccountType(),
            'isAdmin' => $this->isAdmin(),
            'isTeacher' => $this->isTeacher(),
            'isStudent' => $this->isStudent()
        ];
    }
}
