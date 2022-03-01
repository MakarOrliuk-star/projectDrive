<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    public function index(){

        $users = User::all();

        return  UserResource::collection($users);
    }

    public function store(UserRequest $request){

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
        $user = User::find($id);

        if($request->image) {
            $base64File = $request->image;

            $fileData = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $base64File));
            $extension = explode('/', mime_content_type($base64File))[1];
            $fileName = "/user/" . time() . '.' . $extension;
            Storage::disk('public')->put($fileName , $fileData);

            $user->image = $fileName;
        }

        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->lastname = $request->input('lastname');
        $user->phone = $request->input('phone');
        $user->aboutYou = $request->input('aboutYou');

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
