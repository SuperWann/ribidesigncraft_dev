<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Faq extends Model
{
    use HasFactory;

    protected $primaryKey = 'faq_id';

    protected $fillable = [
        'question',
        'answer'
    ];

    public $timestamps = false;

    protected $casts = [
        'created_at' => 'datetime'
    ];

    // SCOPES
    public function scopeLatest($query)
    {
        return $query->orderBy('created_at', 'desc');
    }
}