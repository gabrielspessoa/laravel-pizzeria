<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrderProductSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    DB::table('order_product')->insert([
      'order_id' => 1,
      'product_id' => 1,
    ]);

    DB::table('order_product')->insert([
      'order_id' => 1,
      'product_id' => 2,
    ]);

    DB::table('order_product')->insert([
      'order_id' => 1,
      'product_id' => 3,
    ]);
  }
}
