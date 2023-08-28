<?php

use App\Http\Controllers\AssetsController;
use App\Http\Controllers\CartController;
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
    switch (auth()->user()->role_id) {
      case 1:
        return redirect('/admin');
        break;
      case 3:
        return redirect('/chef');
      default:
        dd(auth()->user()->role_id);
        return redirect('/inicio');
        break;
    }
  };

  return redirect('/inicio');
});

Route::get('/test', function () {
  return Inertia::render('Test');
});

Route::get('/inicio', function () {
  return Inertia::render('Inicio');
})->name('inicio');

Route::get('/cardapio', MenuController::class)->name('cardapio');

Route::get('/meus-pedidos', function () {
  return Inertia::render('MeusPedidos');
})->name('meus-pedidos');

Route::prefix('/carrinho')->group(function () {
  Route::post('/{product}', [CartController::class, 'add'])->name('carrinho.add');
  Route::get('/checkout', [CartController::class, 'checkout'])->name('carrinho.checkout');

  Route::delete('/{id}', [CartController::class, 'delete'])->name('carrinho.delete');
  Route::delete('/', [CartController::class, 'clear'])->name('carrinho.clear');
});


Route::middleware('auth')->group(function () {
  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');

  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');

  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/admin.php';
require __DIR__ . '/chef.php';
require __DIR__ . '/auth.php';
