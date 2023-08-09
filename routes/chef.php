<?php

use App\Http\Controllers\OrderController;
use Inertia\Inertia;

Route::middleware(['auth', 'chef'])->prefix('chef')->name('chef.')->group(function () {
  Route::redirect('/', '/chef/pedidos');

  Route::get('/pedidos', [OrderController::class, 'index'])->name('pedidos');
});
