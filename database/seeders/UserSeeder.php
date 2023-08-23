<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    DB::table('users')->insert([
      'name' => 'Gabriel Souza Pessoa',
      'email' => 'gabrielsouzapessoa@gmail.com',
      'password' => Hash::make('123'),
      'role_id' => 1,
    ]);

    DB::table('users')->insert([
      'name' => 'Pedro Felipe',
      'email' => 'pedro@gmail.com',
      'password' => Hash::make('123'),
      'role_id' => 3,
    ]);

    DB::table('users')->insert([
      'name' => 'Igor Dopp',
      'email' => 'igor@gmail.com',
      'password' => Hash::make('123'),
      'role_id' => 2,
    ]);

    DB::table('users')->insert([
      'name' => 'Danilo Pereira',
      'email' => 'danilo@gmail.com',
      'password' => Hash::make('123'),
      'role_id' => 2,
    ]);

    DB::table('users')->insert([
      'name' => 'Jonathan Bilar',
      'email' => 'jonathan@gmail.com',
      'password' => Hash::make('123'),
      'role_id' => 4,
    ]);
  }
}
