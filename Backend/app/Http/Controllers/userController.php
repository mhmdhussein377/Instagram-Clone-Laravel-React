<?php

namespace App\Http\Controllers;

use App\Models\Follow;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{

    public function getUser() {

        $user = Auth::user();

        return response()->json(["user" => $user]);
    }

    public function follow($userId) {

        $user = Auth::user();

        $isFollowed = Follow::where('follower_id', $user->id)->where('following_id', $userId)->first();

        if($isFollowed) {
            Follow::where('follower_id', $user->id)->where('following_id', $userId)->first()->delete();
        } else {
            Follow::create([
                'follower_id' => $user->id,
                'following_id' => $userId,
            ]);
        }

        return response()->json([
            'status' => 'success',
            'message' => 'User followed/unfollowed successfully'
        ]);
    }

    public function getFollowers() {
        
        $user = Auth::user();
        $followers = $user->followers;

        return response()->json(['followers' => $followers]);
    }

    public function getFollowing() {

        $user = Auth::user();
        $following = $user->following;

        return response()->json(['following' => $following]);
    }

    public function searchUsers($searchItem) {

        $auth_user = Auth::user();

        $users = User::where('username', 'LIKE', "%$searchItem%")
                    ->orWhere('name', 'LIKE', "%$searchItem%")->get();

        // foreach($users as $user) {
        //     $user->is_followed_by_me = $auth_user->isFollowedBy($user);
        // }

        return response()->json(['users' => $users]);
    }

}
