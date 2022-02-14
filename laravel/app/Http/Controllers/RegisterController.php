<?php

namespace App\Http\Controllers;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\JWTAuth;
use Tymon\JWTAuth\Facades\JWTFactory;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

class RegisterController extends Controller
{
    public function register(RegisterRequest $request)
    {
        return User::create(
            array_merge(
                $request->except('password'),
                array('password' => bcrypt($request->input('password')))
            )
        );
    }
}
