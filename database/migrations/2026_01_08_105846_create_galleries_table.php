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
        Schema::create('galleries', function (Blueprint $table) {
            $table->id('gallery_id');
            $table->string('title');
            $table->text('description')->nullable();
            $table->text('image');
            $table->unsignedBigInteger('gallery_category_id')->nullable();
            $table->timestamp('created_at')->useCurrent();
            
            $table->foreign('gallery_category_id')
                  ->references('gallery_category_id')
                  ->on('gallery_categories')
                  ->nullOnDelete();
                  
            $table->index('gallery_category_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('galleries');
    }
};
