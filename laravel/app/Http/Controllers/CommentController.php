<?php

namespace App\Http\Controllers;

use App\Http\Requests\CommentRequest;
use App\Http\Resources\CommentResource;
use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function index(){
        $comments = Comment::all();
        return CommentResource::collection($comments);
    }

    public function store(CommentRequest $request){

        $validate = $request->validated();

        if(!$validate){
            return response($validate,400);
        }

        $comment = new Comment;
        $comment->content = $request->input('content');
        $comment->save();

        return new CommentResource($comment);
    }

    public function show(Comment $comment)
    {
        return $comment;
    }

    public function update(CommentRequest $request, $id)
    {
        $validate = $request->validated();

        if(!$validate){
            return response($validate,400);
        }

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
