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

    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
