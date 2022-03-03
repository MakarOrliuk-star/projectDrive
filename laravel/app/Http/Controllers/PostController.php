<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Http\Resources\PostResource;
use App\Models\Like;
use App\Models\Post;
use App\Models\User;
use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;


class PostController extends Controller
{

    public function index()
    {
        $user = Auth::user();
        $posts = Post::all()->load('comments');

        if ($user->can('view', $posts)) {
            return response()->json(['The user does not have permission to view comments ']);
        }

        return PostResource::collection($posts);
    }

    public function store(PostRequest $request)
    {
        $post = new Post();
        if (Gate::allows('create-post-with-avatar', $post)) {
            if ($request->image) {
                $base64File = $request->image;

                $fileData = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $base64File));
                $extension = explode('/', mime_content_type($base64File))[1];
                $fileName = "/publications/" . time() . '.' . $extension;
                Storage::disk('public')->put($fileName, $fileData);

                $post->image = $fileName;
            }

            $post->title = $request->input('title');
            $post->sign = $request->input('sign');
            $post->user_id = Auth::user()->id;
            $post->save();
            return new PostResource($post);
        }
    }

    public function show(Post $post)
    {
        return new PostResource($post);
    }

    public function update(PostRequest $request, $id)
    {
        $post = Post::find($id);
        if($request->image) {
            $base64File = $request->image;

            $fileData = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $base64File));
            $extension = explode('/', mime_content_type($base64File))[1];
            $fileName = "/publications/" . time() . '.' . $extension;
            Storage::disk('public')->put($fileName , $fileData);

            $post->image = $fileName;
        }

        $post->title = $request->input('title');

        $post->save();

        return new PostResource($post);
    }

    public function destroy($id)
    {
        $post = Post::find($id);
        $post->comments()->delete();
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
