<?php

namespace App\Models;

use App\OrderProduct;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
  use HasFactory;

  protected $fillable = [
    'name',
    'sub_title',
    'description',
    'price',
    'sale_price',
    'image_url'
  ];

  public function Category()
  {
    return $this->belongsTo(Category::class);
  }

  public function orders()
  {
    return $this->belongsToMany(Order::class)->using(OrderProduct::class);
  }
}
