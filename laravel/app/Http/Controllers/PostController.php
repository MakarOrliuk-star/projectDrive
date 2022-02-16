<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Http\Resources\PostResource;
use App\Models\Like;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;


class PostController extends Controller
{

    public function index()
    {
        $posts = Post::all();

        return PostResource::collection($posts);
    }

    public function store(PostRequest $request)
    {
        $validate = $request->validated();

        if(! $validate){
            return response($validate,400);
        }

        $post = new Post();
        $post->title = $request->input('title');
        if($request->hasFile('image')){
            $image = $request->file('image');
            $filename = time() . '.' . $image->getClientOriginalExtension();
            Image::make($image)->resize(300, 300)->save( storage_path('/uploads/' . $filename ));
            $post->image = $filename;
            $post->save();
        }
        $post->save();

        return new PostResource($post);
    }

    public function show(Post $post)
    {
        return new PostResource($post);
    }

    public function update(PostRequest $request, $id)
    {
        $validate = $request->validated();

        if(! $validate){
            return response($validate,400);
        }

        $post = Post::find($id);
        $post->title = $request->input('title');
        $post->image = $request->input('image');
        $post->save();

        return new PostResource($post);
    }

    public function destroy($id)
    {
        $post = Post::find($id);
        $post-> delete();

        return response()->json(['Post Has Been Deleted']);
    }

    public function isLiked($id)
    {
        $post = Post::findOrFail($id)->first();

        if (Like::whereUserId(Auth::id())->wherePostId($post->id)->exists()){
            return 'true';
        }

        return 'false';
    }

    public function like(Post $post)
    {
        $existing_like = Like::wherePostId($post->id)->whereUserId(\Auth::id())->first();

        if (is_null($existing_like)) {
            Like::create([
                'post_id' => $post->id,
                'user_id' => Auth::id()
            ]);
        } else {
            if (is_null($existing_like->deleted_at)) {
                $existing_like->delete();
            } else {
                $existing_like->restore();
            }
        }
    }

}
