<?php

namespace App\Http\Controllers;

use App\Post;
use App\User;
use Illuminate\Http\Request;

class FeedController extends Controller
{
    public function create(){
       User::create([
           'name' => 'Makar',
           'email' => 'laravel@mail.ru',
           'password'=> '123123123',
       ]);
        dd('created');
    }

}
