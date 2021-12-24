<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Comment;

class CommentController extends Controller
{
    public function get(Request $request, $id)
    {
        $comments = Comment::where('post_id', $id)->get();
        return response()->json($comments);
    }

    public function store(Request $request, $id)
    {
        	$data = $request->all();
			$data['post_id'] = $id;
            $comment = Comment::create($data);
            return response()->json($comment);
    }
}