<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\UnitController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\UserRoleController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ManageDebtController;
use App\Http\Controllers\OprasionalController;
use App\Http\Controllers\ManageCapitalController;
use App\Http\Controllers\ManageDebtDetailController;
use App\Http\Controllers\ManageReceivableController;
use App\Http\Controllers\ManageReceivableDetailController;

Route::get('/', [DashboardController::class, 'index'])->name('dashboard');


Route::resource('menu', MenuController::class);
Route::resource('oprasional', OprasionalController::class);
Route::resource('modal', ManageCapitalController::class);
Route::resource('hutang', ManageDebtController::class);
Route::resource('hutang/detail', ManageDebtDetailController::class)->only(['store', 'update', 'destroy']);
Route::resource('piutang', ManageReceivableController::class)->except(['created', 'edit']);
Route::resource('piutang/detail', ManageReceivableDetailController::class)->only(['store', 'update', 'destroy']);
Route::resource('customer', CustomerController::class)->only(['index', 'store', 'update', 'destroy']);

Route::get('user', [UserController::class, 'index'])->name('user');
Route::get('user/profile', [UserController::class, 'show'])->name('user.show');

Route::get('login', [LoginController::class, 'index'])->name('login');

Route::controller(UserRoleController::class)->group(function () {
    Route::get('role', 'index')->name('role.index');
    Route::get('role/{role:slug}', 'show')->name('role.show');
    Route::post('role/change-access', 'changeAccess')->name('role.changeAccess');
});

Route::controller(UnitController::class)->group(function () {
    Route::get('units', 'index')->name('units.index');
    Route::post('units', 'store')->name('units.store');
    Route::put('units/{unit}', 'update')->name('units.update');
    Route::delete('units/{unit}', 'destroy')->name('units.destroy');
});

Route::controller(ProductController::class)->group(function () {
    Route::get('products', 'index')->name('products.index');
    Route::post('products', 'store')->name('products.store');
    Route::post('products/change-stock', 'changeStock')->name('product.change-stock');
    Route::put('products/{product}', 'update')->name('products.update');
    Route::delete('products/{product}', 'destroy')->name('products.destroy');
    Route::get('products/download-format', 'downloadFormat')->name('products.download-format');
    Route::post('products/import', 'import')->name('products.import');
});
