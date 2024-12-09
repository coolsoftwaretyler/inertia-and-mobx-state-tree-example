<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Counter extends Model
{
    protected $fillable = ['value'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
} 