<?php

use App\Http\Controllers\OrderController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', 'chef'])->prefix('chef')->name('chef.')->group(function () {
  Route::redirect('/', '/chef/pedidos');

  Route::post('/pedidos/aceitarPedido/{order}', [OrderController::class, 'acceptOrder'])->name('pedidos.aceitarPedido');
  Route::get('/pedidos', [OrderController::class, 'index'])->name('pedidos');
});
