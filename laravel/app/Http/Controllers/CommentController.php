<?php

namespace App\Http\Controllers;

use App\Http\Requests\CommentRequest;
use App\Http\Resources\CommentResource;
use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    public function index(){

        $comments = Comment::all();
        return CommentResource::collection($comments);
    }

    public function store(CommentRequest $request){

        $post = Post::with('comments')->first();

        $comment = new Comment;
        $comment->content = $request->input('content');
        $comment->user_id =  Auth::user()->id;
        $comment->post_id =  $post->id;
        $comment->save();

        return new CommentResource($comment);

    }

    public function show(Comment $comment)
    {
        return $comment;
    }

    public function update(CommentRequest $request, $id)
    {
        $comment = Comment::find($id);
        $comment->content = $request->input('content');
        $comment->save();

        return new CommentResource($comment);
    }

    public function destroy($id)
    {
        $comment = Comment::find($id);
        $comment->delete();

        return response()->json(['Comment Has Been Deleted']);

    }
}
