<?php

use App\Http\Controllers\AssetsController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//   return Inertia::render('Welcome', [
//     'canLogin' => Route::has('login'),
//     'canRegister' => Route::has('register'),
//     'laravelVersion' => Application::VERSION,
//     'phpVersion' => PHP_VERSION,
//   ]);
// })->name('welcome');

Route::get('/', function () {
  if (auth()->check()) {
    return auth()->user()->role_id == 2 ? redirect('/admin') : redirect('/inicio');
  };

  return redirect('/inicio');
});

Route::get('/inicio', function () {
  return Inertia::render('Inicio');
})->name('inicio');

Route::get('/cardapio', MenuController::class)->name('cardapio');

Route::get('/meus-pedidos', function () {
  return Inertia::render('MeusPedidos');
})->name('meus-pedidos');

Route::middleware('auth')->group(function () {
  Route::get('/carrinho', function () {
    return Inertia::render('Carrinho');
  })->name('carrinho');

  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');

  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');

  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/admin.php';
require __DIR__ . '/auth.php';
