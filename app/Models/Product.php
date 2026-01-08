<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $primaryKey = 'product_id';

    protected $fillable = [
        'name',
        'description',
        'stock',
        'is_available',
        'is_custom_order',
        'price',
        'featured',
        'product_category_id'
    ];

    protected $casts = [
        'is_available' => 'boolean',
        'is_custom_order' => 'boolean',
        'featured' => 'boolean',
        'stock' => 'integer',
        'price' => 'integer'
    ];

    // RELATIONSHIPS
    public function category()
    {
        return $this->belongsTo(ProductCategory::class, 'product_category_id', 'product_category_id');
    }

    public function images()
    {
        return $this->hasMany(ProductImage::class, 'product_id', 'product_id');
    }

    public function wishlists()
    {
        return $this->hasMany(Wishlist::class, 'product_id', 'product_id');
    }

    // ATTRIBUTE ACCESSORS
    public function getFormattedPriceAttribute()
    {
        return 'Rp ' . number_format($this->price, 0, ',', '.');
    }

    public function getMainImageAttribute()
    {
        return $this->images->first()->image ?? null;
    }

    // SCOPES
    public function scopeAvailable($query)
    {
        return $query->where('is_available', true);
    }

    public function scopeFeatured($query)
    {
        return $query->where('featured', true);
    }

    public function scopeCustomOrder($query)
    {
        return $this->where('is_custom_order', true);
    }

    public function scopeInStock($query)
    {
        return $query->where('stock', '>', 0);
    }

    public function scopeByCategory($query, $categoryId)
    {
        return $query->where('product_category_id', $categoryId);
    }
}