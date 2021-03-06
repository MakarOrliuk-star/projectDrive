<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'image' =>  $this->image,
            'comments' => $this->whenLoaded('comments'),
            'created_at' => $this->created_at,
            'sign' => $this->sign,
        ];
    }
}
