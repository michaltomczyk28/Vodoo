<?php

namespace App\Models;

use App\Http\Scopes\NewestOrderScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'is_done'
    ];

    protected $casts = [
        'is_done' => 'boolean'
    ];

    protected static function booted()
    {
        static::addGlobalScope(new NewestOrderScope());
    }

    public function scopeUndone($query)
    {
        return $query->where('is_done', false);
    }

    public function scopeDone($query)
    {
        return $query->where('is_done', true);
    }

    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
