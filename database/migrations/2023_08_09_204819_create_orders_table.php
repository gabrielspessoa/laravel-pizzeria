<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('orders', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('customer_id');
      $table->unsignedBigInteger('chef_id')->nullable();
      $table->unsignedBigInteger('deliveryman_id')->nullable();
      $table->enum('status', ['pending', 'in_progress', 'completed'])->default('pending');
      $table->timestamps();

      $table->foreign('customer_id')->references('id')->on('users');
      $table->foreign('chef_id')->references('id')->on('users')->where('role_id', '=', 3);
      $table->foreign('deliveryman_id')->references('id')->on('users')->where('role_id', '=', 4);
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('orders');
  }
};
