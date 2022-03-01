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

        //$this->authorize('view', auth()->user());
        $comments = Comment::all();
        return CommentResource::collection($comments);
    }

    public function store(Post $post, CommentRequest $request){

          $comment = $post->comments()->create([
              'content' => $request['content'],
              'user_id' => auth()->user()->id
          ]);

        return new CommentResource($comment);

    }

    public function show($id)
    {
        $comment = Comment::findOrFail($id);
        return  new CommentResource($comment);
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
