<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{

    public function index()
    {
        $posts = Post::all();
        return $posts;
    }

    public function store(Request $request)
    {
        $post = new Post;
        $post->title = $request->input('title');
        $post->image = $request->input('image');
        $post->user_id = $request->user('api')->id;
        $post->save();
        return $post;
    }

    public function show($id)
    {
        $post = Post::find($id);
        return $post;
    }

    public function update(Request $request, $id)
    {
        $post = Post::find($id);
        $post->title = $request->input('title');
        $post->image = $request->input('image');
        $post->save();
        return $post;
    }

    public function destroy($id)
    {
        $post = Post::find($id);
        $post-> delete();
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
