<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\PermissionController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\UserController;

use Illuminate\Support\Facades\Route;




Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'dashboard'])->name('dashboard');
    Route::resource('permissions', PermissionController::class);
    Route::resource('roles', RoleController::class);
    Route::resource('users',UserController::class);
    Route::resource('categories',CategoryController::class);
    Route::get('categories/{category}/status',[CategoryController::class,'status'])->name('categories.status');
    Route::resource('products',ProductController::class);
    Route::get('products/{product}/stock',[ProductController::class,'stock'])->name('products.stock');
    Route::get('products/{product}/featured',[ProductController::class,'featured'])->name('products.featured');
   
});