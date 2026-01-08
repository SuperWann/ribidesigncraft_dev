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
        Schema::create('wishlists', function (Blueprint $table) {
            $table->id('wishlist_id');
            $table->unsignedBigInteger('product_id');
            $table->unsignedBigInteger('user_id'); // DIPERBAIKI
            $table->timestamp('created_at')->useCurrent();
            
            $table->foreign('product_id')
                  ->references('product_id')
                  ->on('products')
                  ->cascadeOnDelete();
            $table->foreign('user_id')
                  ->references('user_id')
                  ->on('users')
                  ->cascadeOnDelete();
            
            $table->unique(['product_id', 'user_id']);
            $table->index('user_id');
            $table->index('product_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('wishlists');
    }
};
