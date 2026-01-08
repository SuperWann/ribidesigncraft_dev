<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    use HasFactory;

    protected $primaryKey = 'gallery_id';

    protected $fillable = [
        'title',
        'description',
        'image',
        'gallery_category_id'
    ];

    public $timestamps = false;

    protected $casts = [
        'created_at' => 'datetime'
    ];

    // RELATIONSHIPS
    public function category()
    {
        return $this->belongsTo(GalleryCategory::class, 'gallery_category_id', 'gallery_category_id');
    }
}