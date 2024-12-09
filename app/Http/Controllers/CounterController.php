<?php

namespace App\Http\Controllers;

use App\Models\Counter;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CounterController extends Controller
{
    public function update(Request $request)
    {
        $counter = Counter::firstOrCreate(['id' => 1]);
        $counter->update(['value' => $request->value]);
        
        return back()->with([
            'count' => $counter->value
        ]);
    }
} 