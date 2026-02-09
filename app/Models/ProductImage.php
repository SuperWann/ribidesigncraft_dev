<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class ProductImage extends Model
{
    use HasFactory;

    protected $primaryKey = 'product_image_id';

    protected $fillable = [
        'product_id',
        'image',
        'alt_text'
    ];

    public $timestamps = false;

    protected $casts = [
        'created_at' => 'datetime'
    ];

    protected static function boot()
    {
        parent::boot();

        static::updating(function ($image) {
            if ($image->isDirty('image')) {
                $old = $image->getOriginal('image');
                if ($old && Storage::disk('public')->exists($old)) {
                    Storage::disk('public')->delete($old);
                }
            }
        });

        static::deleting(function ($image) {
            if ($image->image && Storage::disk('public')->exists($image->image)) {
                Storage::disk('public')->delete($image->image);
            }
        });
    }

    // RELATIONSHIPS
    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id', 'product_id');
    }
}