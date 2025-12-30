<?php

use App\Http\Controllers\Admin\BlogController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\MenuSettingController;
use App\Http\Controllers\Admin\OfficeSettingController;
use App\Http\Controllers\Admin\PermissionController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\PromoTextController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;


Route::get('dashboard', [DashboardController::class, 'dashboard'])->name('dashboard');
Route::get('contacts', [ContactController::class, 'index'])->name('contacts.index');
Route::resource('permissions', PermissionController::class);
Route::resource('roles', RoleController::class);
Route::resource('users', UserController::class);
Route::resource('categories', CategoryController::class);
Route::get('categories/{category}/status', [CategoryController::class, 'status'])->name('categories.status');
Route::resource('products', ProductController::class);
Route::get('products/{product}/stock', [ProductController::class, 'stock'])->name('products.stock');
Route::get('products/{product}/featured', [ProductController::class, 'featured'])->name('products.featured');
Route::get('contacts/{contact}/status', [ContactController::class, 'status'])->name('contacts.status');
Route::delete('contacts/{contact}', [ContactController::class, 'destroy'])->name('contacts.destroy');
Route::get('contacts/{contact}', [ContactController::class, 'show'])->name('contacts.show');
Route::resource('sliders', SliderController::class);
Route::get('sliders/{slider}/status', [sliderController::class, 'status'])->name('sliders.status');
Route::resource('blogs', BlogController::class);
Route::get('blogs/{blog}/status', [BlogController::class, 'status'])->name('blogs.status');
Route::resource('office-setting', OfficeSettingController::class);
Route::resource('menu-setting', MenuSettingController::class);
Route::get('menu-setting/{menuSetting}/status', [MenuSettingController::class, 'status'])->name('menu-setting.status');
Route::resource('promo-text', PromoTextController::class);
Route::get('promo-text/{promoText}/status', [PromoTextController::class, 'status'])->name('promo-text.status');
