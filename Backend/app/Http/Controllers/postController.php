<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Post;
use Illuminate\Http\Request;

class postController extends Controller
{
    public function createPost(Request $request) {

        $request->validate([
            'user_id' => 'required|exists:users,id',
            'image_url' => 'required|string',
        ]);

        $post = Post::create([
            'user_id' => $request->user_id,
            'image_url' => $request->image_url,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Post created successfully',
            'post' => $post,
        ]);
    }

    public function likePost(Request $request) {

        $request->validate([
            'user_id' => 'required|exists:users,id',
            'post_id' => 'required|exists:posts,id',
        ]);

        $isLiked = Like::where([
            'user_id' => $request->user_id,
            'post_id' => $request->post_id
        ]);

        if($isLiked) {
            $isLiked->delete();

            return response()->json([
            'status' => 'success',
            'message' => 'Post unliked successfully',
        ]);
        }else {
            $like = Like::create([
                'user_id' => $request->user_id,
                'post_id' => $request->post_id
            ]);

            return response()->json([
            'status' => 'success',
            'message' => 'Post liked successfully',
        ]);
        }
    }
}
