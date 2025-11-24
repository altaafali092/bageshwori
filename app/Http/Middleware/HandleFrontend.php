<?php

namespace App\Http\Middleware;

use App\Models\Category;
use App\Models\OfficeSetting;
use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Middleware;
use Symfony\Component\HttpFoundation\Response;

class HandleFrontend extends Middleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'officeSettings' => OfficeSetting::first(),
            'globalCategories' => Category::withCount('products')
                ->where('status', 1)
                ->latest()
                ->get(),
        ]);
    }
}
