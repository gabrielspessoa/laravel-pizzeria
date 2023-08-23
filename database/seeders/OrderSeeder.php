<?php

namespace Database\Seeders;

use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use Carbon\Carbon;
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
    collect(range(0, 9))->each(
      fn () => Order::factory()->hasAttached(Product::inRandomOrder()->limit(rand(1, 4))->get(), ['quantity' => 1])->create()
    );
    // DB::table('orders')->insert([
    //   'customer_id' => 1,
    //   'status' => 'pending',
    //   'created_at' => Carbon::now()->format('Y-m-d H:i:s')
    // ]);

    // DB::table('orders')->insert([
    //   'customer_id' => 2,
    //   'status' => 'pending',
    //   'created_at' => Carbon::now()->format('Y-m-d H:i:s')
    // ]);

    // DB::table('orders')->insert([
    //   'customer_id' => 3,
    //   'status' => 'pending',
    //   'created_at' => Carbon::now()->format('Y-m-d H:i:s')
    // ]);

    // DB::table('orders')->insert([
    //   'customer_id' => 2,
    //   'status' => 'pending',
    //   'created_at' => Carbon::now()->format('Y-m-d H:i:s')
    // ]);

    // DB::table('orders')->insert([
    //   'customer_id' => 2,
    //   'status' => 'pending',
    //   'created_at' => Carbon::now()->format('Y-m-d H:i:s')
    // ]);

    // DB::table('orders')->insert([
    //   'customer_id' => 2,
    //   'status' => 'pending',
    //   'created_at' => Carbon::now()->format('Y-m-d H:i:s')
    // ]);

    // DB::table('orders')->insert([
    //   'customer_id' => 2,
    //   'status' => 'pending',
    //   'created_at' => Carbon::now()->format('Y-m-d H:i:s')
    // ]);

    // DB::table('orders')->insert([
    //   'customer_id' => 2,
    //   'status' => 'pending',
    //   'created_at' => Carbon::now()->format('Y-m-d H:i:s')
    // ]);

    // DB::table('orders')->insert([
    //   'customer_id' => 2,
    //   'status' => 'pending',
    //   'created_at' => Carbon::now()->format('Y-m-d H:i:s')
    // ]);

    // DB::table('orders')->insert([
    //   'customer_id' => 2,
    //   'status' => 'pending',
    //   'created_at' => Carbon::now()->format('Y-m-d H:i:s')
    // ]);

    // DB::table('orders')->insert([
    //   'customer_id' => 2,
    //   'status' => 'pending',
    //   'created_at' => Carbon::now()->format('Y-m-d H:i:s')
    // ]);

    // DB::table('orders')->insert([
    //   'customer_id' => 2,
    //   'status' => 'pending',
    //   'created_at' => Carbon::now()->format('Y-m-d H:i:s')
    // ]);
  }
}
