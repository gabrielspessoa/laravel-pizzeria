<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    DB::table('products')->insert([
      'name' => 'Margherita',
      'sub_title' => 'Pizza Margherita',
      'description' => 'Pizza clássica italiana com tomate, mussarela fresca e manjericão.',
      'price' => 30.0,
      'image_url' => '/storage/pizza-banner.png',
      'category_id' => '1'
    ]);

    DB::table('products')->insert([
      'name' => 'Quatro Queijos',
      'sub_title' => 'Pizza Quatro Queijos',
      'description' => 'Pizza com mussarela, parmesão, gorgonzola e provolone derretidos.',
      'price' => 35.0,
      'image_url' => '/storage/pizza-banner.png',
      'category_id' => '1'
    ]);

    DB::table('products')->insert([
      'name' => 'Frango com Catupiry',
      'sub_title' => 'Pizza de Frango com Catupiry',
      'description' => 'Pizza de frango desfiado, catupiry e milho verde.',
      'price' => 40.0,
      'image_url' => '/storage/pizza-banner.png',
      'category_id' => '1'
    ]);

    DB::table('products')->insert([
      'name' => 'Calabresa',
      'sub_title' => 'Pizza de Calabresa',
      'description' => 'Pizza com fatias de calabresa, cebola e mussarela.',
      'price' => 32.0,
      'image_url' => '/storage/pizza-banner.png',
      'category_id' => '1'
    ]);

    DB::table('products')->insert([
      'name' => 'Portuguesa',
      'sub_title' => 'Pizza Portuguesa',
      'description' => 'Pizza com presunto, cebola, pimentão, ovos e azeitonas.',
      'price' => 38.0,
      'image_url' => '/storage/pizza-banner.png',
      'category_id' => '1'
    ]);

    DB::table('products')->insert([
      'name' => 'Vegetariana',
      'sub_title' => 'Pizza Vegetariana',
      'description' => 'Pizza com abobrinha, berinjela, pimentão, cebola e azeitonas pretas.',
      'price' => 42.0,
      'image_url' => '/storage/pizza-banner.png',
      'category_id' => '1'
    ]);
  }
}
