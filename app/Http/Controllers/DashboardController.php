<?php

namespace App\Http\Controllers;

use App\Models\Counter;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function show(): Response
    {
        $counter = auth()->user()->counter()->firstOrCreate(
            [],
            ['value' => 0]
        );

        return Inertia::render('Dashboard', [
            'count' => $counter->value,
        ]);
    }

    public function increment(): RedirectResponse
    {
        $counter = auth()->user()->counter;
        $counter->increment('value');

        return redirect()->back();
    }

    public function decrement(): RedirectResponse
    {
        $counter = auth()->user()->counter;
        $counter->decrement('value');

        return redirect()->back();
    }
} 