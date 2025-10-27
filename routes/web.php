<?php

use App\Http\Controllers\FrontendController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/',[FrontendController::class,'index'])->name('home');
Route::get('categorywaiseproduct/{category:slug}', [FrontendController::class, 'categorywiseProduct'])->name('categorywiseProduct');
Route::get('prduct-Detail', [FrontendController::class, 'productPage'])->name('productDetail');
Route::get('blogs',[FrontendController::class,'blogIndex'])->name('blogIndex');
Route::get('blog-Detail/{blog:slug}',[FrontendController::class,'blogDetail'])->name('blogDetail');


require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
