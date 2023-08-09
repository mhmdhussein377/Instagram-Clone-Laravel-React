<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});


Route::group(['middleware' => ['jwt.auth']], function () {

    Route::get("/user", [UserController::class, "getUser"]);
    
    Route::get("/toggle-follow/{userId}", [UserController::class, "follow"]);

    Route::get('/user/followers', [UserController::class, 'getFollowers']);

    Route::get('/user/following', [UserController::class, 'getFollowing']);

    Route::get('/search-users/{searchItem}', [UserController::class, 'searchUsers']);
    

    Route::post("/create-post", [PostController::class, 'createPost']);

    Route::get('/user/following/posts', [PostController::class, 'getFollowingPosts']);

    Route::get("/posts/{postId}/toggle-like", [PostController::class, 'toggleLike']);
});

