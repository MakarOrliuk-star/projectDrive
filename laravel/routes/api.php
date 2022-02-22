<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});


Route::group([
    'prefix' => 'auth'
], function() {
    Route::post('register', 'RegisterController@register');
    Route::post('login', 'AuthController@login');
    Route::post('refresh', 'AuthController@refresh');
});

Route::group(['prefix' => 'posts'], function() {
    Route::resource('/', 'PostController');
    Route::post('/{post}/comment', 'CommentController@store');
});
Route::delete('posts/{id}', 'PostController@destroy');
Route::put('posts/{id}', 'PostController@update');

Route::group(['prefix' => 'comments'], function() {
    Route::resource('/', 'CommentController');
});


Route::put('user/{id}', 'UserController@update');

Route::group([
    'prefix' => 'auth',
    'middleware' => ['jwt.auth', 'jwt.refresh']
], function() {
    Route::post('me', 'AuthController@me');
});

Route::group(['prefix' => 'posts'], function (){
    Route::get('{id}/isliked', 'PostController@isLiked');
    Route::post('like', 'PostController@like');
});

