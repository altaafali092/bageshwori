<?php

use App\Http\Controllers\AuthLoginController;
use App\Http\Controllers\FrontendController;
use App\Http\Controllers\StaticPageController;
use Illuminate\Support\Facades\Route;




Route::get('/', [FrontendController::class, 'index'])->name('home');
Route::get('categorywaiseproduct/{category:slug}', [FrontendController::class, 'categorywiseProduct'])->name('categorywiseProduct');
Route::get('products', [FrontendController::class, 'allProduct'])->name('allproduct');
Route::get('product-detail/{product:slug}', [FrontendController::class, 'productPage'])->name('productDetail');
Route::get('blogs', [FrontendController::class, 'blogIndex'])->name('blogIndex');
Route::get('blog-Detail/{blog:slug}', [FrontendController::class, 'blogDetail'])->name('blogDetail');
Route::get('about-us', [FrontendController::class, 'aboutUs'])->name('aboutUs');
Route::post('message', [FrontendController::class, 'message'])->name('frontMessage');
Route::get('our-service', [FrontendController::class, 'ourService'])->name('ourService');

Route::get('user-profile', [FrontendController::class, 'userProfile'])->name('userProfile');
Route::get('user-profile/edit', [FrontendController::class, 'editProfile'])->name('userProfile.edit');
Route::put('user-profile/update', [FrontendController::class, 'updateProfile'])->name('userProfile.update');


require __DIR__ . '/settings.php';

Route::get('/{slug}', [StaticPageController::class, 'show'])
    ->name('staticPage');
