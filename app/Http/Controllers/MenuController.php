<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class MenuController extends Controller
{
  public function __invoke()
  {
    $pizzas = DB::table('products')->where('category_id', 1)->get();

    return Inertia::render('Cardapio', ['pizzas' => $pizzas]);
  }
}
