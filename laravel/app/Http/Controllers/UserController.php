<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(){

        $users = User::all();

        return  UserResource::collection($users);
    }

    public function store(UserRequest $request){

        $validate = $request->validated();

        if(! $validate){
            return response($validate,400);
        }

        $user = new User;
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->save();

        return new UserResource($user);
    }

    public function show(User $user)
    {
        return $user;
    }

    public function update(UserRequest $request, $id)
    {
        $validate = $request->validated();

        if(! $validate){
            return response($validate,400);
        }

        $user = User::find($id);
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = $request->input('password');
        $user->save();

        return new UserResource($user);
    }

    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();

        return response()->json(['User Has Been Deleted']);
    }
}
