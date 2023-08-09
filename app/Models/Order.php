<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
  protected $fillable = [
    'customer_id',
    'chef_id',
    'deliveryman_id',
    'status',
  ];

  public function customer()
  {
    return $this->belongsTo(User::class, 'customer_id');
  }

  public function chef()
  {
    return $this->belongsTo(User::class, 'chef_id');
  }

  public function deliveryman()
  {
    return $this->belongsTo(User::class, 'deliveryman_id');
  }

  public function products()
  {
    return $this->belongsToMany(Product::class);
  }
}
