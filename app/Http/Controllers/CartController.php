<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class CartController extends Controller
{
  public function checkout()
  {
    return inertia('Checkout', ['products' => session()->get('cart')]);
  }

  public function add(Product $product, Request $request)
  {
    $validated = $request->validate([
      'qty' => 'required|numeric'
    ]);

    $qty = $validated['qty'];

    $cart = session()->get('cart', []);

    if (isset($cart[$product->id])) {
      $cart[$product->id]['qty'] += $qty;
    } else {
      $cart[$product->id] = [
        'product' => $product,
        'qty' => $qty
      ];
    }

    session()->put('cart', $cart);
    return response('Item adicionado ao carrinho com sucesso', 200);
  }

  public function delete($id)
  {
    $cart = session()->get('cart', []);


    foreach ($cart as $key => $value) {
      if ($value["product"]->id == $id) {
        unset($cart[$key]);
      }
    }

    session()->put('cart', $cart);

    return response("Item excluído do carrinho", 200);
  }

  public function clear()
  {
    session()->forget('cart');

    return response('Carrinho limpo com sucesso', 200);
  }
}
