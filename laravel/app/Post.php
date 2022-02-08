<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'title',
        'image',
        'likes',
        'is_published'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
