<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', 'admin'])->group(function () {
  Route::redirect('/admin', '/admin/dashboard');

  Route::get('/admin/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
  })->name('admin.dashboard');

  Route::get('/admin/funcionarios', function () {
    return Inertia::render('Admin/Funcionarios', ['funcionarios' => User::with('role')->get()]);
  })->name('admin.funcionarios');

  // Route::get('/admin/funcionarios/create', [UserController::class, 'create'])->name('admin.funcionarios.create');

  Route::prefix('admin/funcionarios')->group(function () {
    Route::get('/create', [UserController::class, 'create'])->name('admin.funcionarios.create');

    Route::get('/admin/funcionarios/{id}', function ($id) {
      return Inertia::render('Admin/EditarFuncionario', ['funcionario' => User::with('role')->find($id), 'cargos' => Role::all()]);
    })->name('admin.funcionarios.index');

    Route::get('/admin/funcionarios/{id}/editar', [UserController::class, 'edit'])->name('admin.funcionarios.editar');

    Route::patch('/admin/funcionarios/{id}/atualizar', [UserController::class, 'update'])->name('admin.funcionarios.atualizar');
  });



  // Route::get('/admin/produtos', [ProductController::class, 'index'])->name('admin.produtos');

  // Route::get('/admin/produtos/criar', [ProductController::class, 'create'])->name('admin.produtos.criar');

  Route::resource('/admin/produtos', ProductController::class)->names([
    'index' => 'admin.produtos.index',
    'create' => 'admin.produtos.create',
    'store' => 'admin.produtos.store',
    'show' => 'admin.produtos.show',
    'edit' => 'admin.produtos.edit',
    'update' => 'admin.produtos.update',
    'destroy' => 'admin.produtos.destroy'
  ])->parameters(['produtos' => 'product']);
});
