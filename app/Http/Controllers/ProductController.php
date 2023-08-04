<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $products = Product::all();
    return Inertia::render('Admin/Produtos', ['produtos' => $products]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return Inertia::render('Admin/NovoProduto');
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(StoreProductRequest $request)
  {
    $validated = $request->validated();

    $product = new Product();

    $product->fill($validated);
    $product->save();

    return to_route('admin.produtos.index');
  }

  /**
   * Display the specified resource.
   */
  public function show(Product $product)
  {
    return $product;
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Product $product)
  {
    $categories = Category::all();
    return Inertia::render('Admin/EditarProduto', ['produto' => $product, 'categorias' => $categories]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(StoreProductRequest $request, Product $product)
  {
    $validated = $request->validated();

    dd($product);
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Product $product)
  {
    $product->delete();
    return to_route('admin.produtos.index', [], 303);
  }
}
