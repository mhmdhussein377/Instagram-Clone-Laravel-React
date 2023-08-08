<?php

namespace App\Http\Controllers;

use App\Models\Follow;
use Illuminate\Http\Request;

class userController extends Controller
{
    public function follow(Request $request) {

        $request->validate([
            'follower_id' => 'required|exists:users,id',
            'following_id' => 'required|exists:users,id',
        ]);

        Follow::create([
            'follower_id' => $request->follower_id,
            'following_id' => $request->following_id,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'User followed successfully'
        ]);
    }

    public function unfollow(Request $request) {

        $request->validate([
            'follower_id' => 'required|exists:users,id',
            'following_id' => 'required|exists:users,id',
        ]);

        Follow::where('follower_id', $request->follower_id)->where('following_id', $request->following_id)->first()->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'User unfollowed successfully'
        ]);
    }
}
