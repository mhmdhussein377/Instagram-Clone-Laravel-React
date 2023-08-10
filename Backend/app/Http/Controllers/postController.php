<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    public function createPost(Request $request) {

        $user = Auth::user();

        $request->validate([
            'image' => 'required|string',
        ]);

        $base64Image = $request->image;
        echo $base64Image;
        $decodedImage = base64_decode($base64Image);

        $filename = 'post_' . time() . '.jpg';
        $path = Storage::disk('public')->put('post_images/' . $filename, $decodedImage);

        $post = Post::create([
            'user_id' => $user->id,
            'image_url' => 'post_images/' . $filename
        ]);

        $imageUrl = Storage::url('post_images/' . $filename);

        return response()->json([
            'status' => 'success',
            'message' => 'Post created successfully',
            'post' => $post,
            'image_url' => $imageUrl
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

    public function toggleLike($postId) {

        $user = Auth::user();
        $post = Post::find($postId);
        $likeExists = $post->likes()->where('user_id', $user->id)->exists();

        if($likeExists) {
            $post->likes()->where('user_id', $user->id)->delete();
        } else {
            $like = new Like(['user_id' => $user->id]);
            $post->likes()->save($like);
        }

        return response()->json(['status' => 'success', 'message' => 'post has been liked/disliked successfully']);
    }
}
