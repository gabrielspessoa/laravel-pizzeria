<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserController extends Controller
{
  public function store(Request $request)
  {
    $validated = $request->validate([
      'name' => 'numeric'
    ]);

    dd($validated);
  }

  public function edit($id)
  {
    $user = User::with('role')->find($id);
    $role = Role::all();

    return Inertia::render('Admin/EditarFuncionario', ['funcionario' => $user, 'cargos' => $role]);
  }

  public function update(Request $request, $id)
  {
    $validated = $request->validate([
      'name' => 'required|string|max:255',
      'email' => 'required|string|email|max:255',
      'role_id' => 'required|numeric',
      'password' => 'confirmed'
    ]);

    $validated['password'] = Hash::make($validated['password']);

    $user = User::find($id);
    $user->update($validated);

    return redirect()->route('admin.funcionarios')->with('status', 'Sucesso ao alterar');
  }
}
