<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function index(){
        //
    }

    public function store(Request $request){
        $comment = new Comment;
        $comment->body = $request->input('body');
        $comment->post_id = $request->input('post_id');
        $comment->user_id = $request->input('user_id');
        $comment->save();
        return $comment;
    }

    public function show($id)
    {
        //
    }

    public function getCommentsByPostId($id){
        $comments = Comment::where('post_id',$id)->orderBy('id', 'desc')->get();
        return $comments;
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        $comment = Comment::find($id);
        $comment->delete();

        return response()->json(['Comment Has Been Deleted']);

    }
}
