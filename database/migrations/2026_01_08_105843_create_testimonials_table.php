<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('testimonials', function (Blueprint $table) {
            $table->id('testimoni_id');
            $table->unsignedBigInteger('user_id');
            $table->integer('rating');
            $table->text('testimoni');
            $table->text('image')->nullable();
            $table->timestamp('created_at')->useCurrent();
            
            $table->foreign('user_id')
                  ->references('user_id') 
                  ->on('users')
                  ->cascadeOnDelete();
                  
            $table->index('user_id');
        });

        DB::statement('ALTER TABLE testimonials ADD CONSTRAINT testimonials_rating_check CHECK (rating >= 1 AND rating <= 5)');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('testimonials');
    }
};
