<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\postController;
use App\Http\Controllers\userController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});


Route::post("/follow", [userController::class, "follow"]);

Route::post("/unfollow", [userController::class, "unfollow"]);

Route::post("/create-post", [postController::class, 'createPost']);

Route::post("/like", [postController::class, 'likePost']);

Route::post("/unlike", [postController::class, 'unlikePost']);