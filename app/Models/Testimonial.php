<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    use HasFactory;

    protected $primaryKey = 'testimoni_id';

    protected $fillable = [
        'user_id',
        'rating',
        'testimoni',
        'image'
    ];

    public $timestamps = false;

    protected $casts = [
        'rating' => 'integer',
        'created_at' => 'datetime'
    ];

    // RELATIONSHIPS
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'user_id');
    }

    // SCOPES
    public function scopeHighestRated($query)
    {
        return $query->orderBy('rating', 'desc');
    }

    public function scopeLatest($query)
    {
        return $query->orderBy('created_at', 'desc');
    }

    // HELPER
    public function getStarRatingAttribute()
    {
        return str_repeat('★', $this->rating) . str_repeat('☆', 5 - $this->rating);
    }
}