<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $orders = Order::all()->load('chef', 'deliveryman', 'customer', 'products')->sortBy(function ($order) {
      switch ($order->status) {
        case 'in_progress':
          return [1, $order->updated_at];
        case 'pending':
          return [2, $order->created_at];
        case 'completed':
          return [3, $order->updated_at];
        default:
          return [4, $order->updated_at];
      }
    })->values();
    return Inertia::render('Chef/Pedidos', ['pedidos' => $orders]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Display the specified resource.
   */
  public function show(Order $order)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Order $order)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Order $order)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Order $order)
  {
    //
  }

  public function acceptOrder(Order $order)
  {
    $order->chef_id = auth()->id();
    $order->status = 'in_progress';
    $order->save();

    return redirect(route('chef.pedidos'));
  }
}
