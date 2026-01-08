<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $primaryKey = 'user_id';

    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'profile_image',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
        'role' => 'integer',
    ];

    // RELATIONSHIPS
    public function wishlists()
    {
        return $this->hasMany(Wishlist::class, 'user_id', 'user_id');
    }

    public function testimonials()
    {
        return $this->hasMany(Testimonial::class, 'user_id', 'user_id');
    }

    // SCOPE
    public function scopeAdmin($query)
    {
        return $query->where('role', 1);
    }

    public function scopeCustomer($query)
    {
        return $query->where('role', 0);
    }

    // HELPER
    public function isAdmin()
    {
        return $this->role === 1;
    }

    public function isCustomer()
    {
        return $this->role === 0;
    }
}