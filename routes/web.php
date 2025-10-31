<?php

use App\Http\Controllers\FrontendController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/',[FrontendController::class,'index'])->name('home');
Route::get('categorywaiseproduct/{category:slug}', [FrontendController::class, 'categorywiseProduct'])->name('categorywiseProduct');
Route::get('product-detail/{product:slug}', [FrontendController::class, 'productPage'])->name('productDetail');
Route::get('blogs',[FrontendController::class,'blogIndex'])->name('blogIndex');
Route::get('blog-Detail/{blog:slug}',[FrontendController::class,'blogDetail'])->name('blogDetail');
Route::get('about-us',[FrontendController::class, 'aboutUs'])->name('aboutUs');
Route::post('message',[FrontendController::class, 'message'])->name('frontMessage');


require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
