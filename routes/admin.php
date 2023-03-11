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

  Route::get('/admin/funcionarios/{id}', function ($id) {
    return Inertia::render('Admin/EditarFuncionario', ['funcionario' => User::with('role')->find($id), 'cargos' => Role::all()]);
  })->name('admin.funcionarios.index');

  Route::get('/admin/funcionarios/{id}/editar', [UserController::class, 'edit'])->name('admin.funcionarios.editar');

  Route::patch('/admin/funcionarios/{id}/atualizar', [UserController::class, 'update'])->name('admin.funcionarios.atualizar');

  Route::get('/admin/produtos', [ProductController::class, 'index'])->name('admin.produtos');
});
