<?php

namespace Database\Seeders;

use App\Models\Order;
use App\Models\Product;
use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrderSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    $order = Order::create([
      'customer_id' => 1,
      'chef_id' => 2,
      'deliveryman_id' => 3,
      'status' => 'pending',
    ]);
  }
}
