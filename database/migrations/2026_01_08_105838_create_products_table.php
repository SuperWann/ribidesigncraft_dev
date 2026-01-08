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
        Schema::create('products', function (Blueprint $table) {
            $table->id('product_id');
            $table->string('name');
            $table->text('description')->nullable();
            $table->integer('stock')->default(0);
            $table->boolean('is_available')->default(true);
            $table->boolean('is_custom_order')->default(false);
            $table->integer('price');
            $table->boolean('featured')->default(false);
            $table->unsignedBigInteger('product_category_id')->nullable();
            $table->timestamps();
            
            $table->foreign('product_category_id')
                  ->references('product_category_id')
                  ->on('product_categories')
                  ->nullOnDelete();
            
            $table->index('product_category_id');
            $table->index('featured');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
