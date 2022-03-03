<?php

use Illuminate\Auth\Access\Gate;
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

Route::group(['prefix' => 'auth', 'middleware' => ['jwt.auth', 'jwt.refresh']], function() {
    Route::post('me', 'AuthController@me');
});

//Route::group(['middleware' => ['jwt.auth', 'jwt.refresh']], function() {
//Route::group(['prefix' => 'auth'],function() {
//    Route::post('me', 'AuthController@me');
//});
//    Route::group(['prefix' => 'posts'], function() {
//        Route::resource('/', 'PostController')->only(['index', 'store', 'show', 'update', 'destroy']);
//        Route::resource('/{post}/comments', 'CommentController');
//        Route::resource('/comments', 'CommentController')->only(['index', 'store', 'show', 'update', 'destroy']);
//    });
//});

Route::group(['prefix' => 'auth'], function() {
    Route::post('register', 'RegisterController@register');
    Route::post('login', 'AuthController@login');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('logout', 'AuthController@logout');
});

Route::group(['prefix' => 'posts', 'middleware' => ['auth']], function() {
    Route::resource('/', 'PostController');
    Route::post('/','PostController@store');
    Route::resource('/{post}/comments', 'CommentController');
    Route::resource('/comments', 'CommentController');
    Route::delete('/{id}', 'PostController@destroy');
    Route::put('/{id}', 'PostController@update');
    Route::delete('/comments/{id}', 'CommentController@destroy');
});

Route::group(['prefix' => 'user'], function (){
    Route::resource('/', 'UserController');
});

//Route::delete('posts/{id}', 'PostController@destroy');
//Route::put('posts/{id}', 'PostController@update');

//Route::group(['prefix' => 'posts'], function (){
//    Route::get('{id}/isliked', 'PostController@isLiked');
//    Route::post('like', 'PostController@like');
//});

