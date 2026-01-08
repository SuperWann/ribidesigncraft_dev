<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GalleryCategory extends Model
{
    use HasFactory;

    protected $primaryKey = 'gallery_category_id';

    protected $fillable = [
        'name'
    ];

    // RELATIONSHIPS
    public function galleries()
    {
        return $this->hasMany(Gallery::class, 'gallery_category_id', 'gallery_category_id');
    }
}