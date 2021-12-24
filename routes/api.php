<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\CategoryController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('posts', [PostController::class, 'store']);
    
Route::get('posts', [PostController::class, 'index']);

Route::get('post/{id}', [PostController::class, 'get']);

Route::delete('posts/{id}', [PostController::class, 'delete']);

Route::get('comments/{id}', [CommentController::class, 'get']);

Route::post('comments/{id}', [CommentController::class, 'store']);

Route::get('categories', [CategoryController::class, 'index']);

Route::get('categories/{id}', [CategoryController::class, 'get']);