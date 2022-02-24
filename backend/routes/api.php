<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

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


// Group of routes into api middleware
Route::middleware('api')->group(function () {

    // Group of routes for products
    Route::group(['prefix' => 'products'], function () {
        Route::get('', [ProductController::class, 'index']);
        Route::get('/{productId}', [ProductController::class, 'show']);
        Route::post('', [ProductController::class, 'create']);
        Route::put('/{productId}', [ProductController::class, 'update']);
        Route::delete('/{productId}', [ProductController::class, 'delete']);
    });

});


