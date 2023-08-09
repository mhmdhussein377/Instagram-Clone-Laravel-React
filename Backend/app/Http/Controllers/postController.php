<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    public function createPost(Request $request) {

        $user = Auth::user();

        $request->validate([
            'image_url' => 'required|string',
        ]);

        $post = Post::create([
            'user_id' => $user->id,
            'image_url' => $request->image_url,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Post created successfully',
            'post' => $post,
        ]);
    }

    public function getFollowingPosts() {

        $user = Auth::user();
        $followingPosts = [];

        foreach ($user->following as $followedUser) {
            $followingPosts = $followedUser->posts()->with('likes')->with('user')->latest()->get();

            foreach($followingPosts as $post) {
                $post->liked_by_me = $post->likes->contains('user_id', $user->id);
            }
        }
        
        return response()->json(['posts' => $followingPosts]);
    }
}
