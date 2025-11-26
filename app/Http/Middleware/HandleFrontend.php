<?php

namespace App\Http\Middleware;

use App\Models\Category;
use App\Models\OfficeSetting;
use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Middleware;
use Symfony\Component\HttpFoundation\Response;
use App\Models\MenuSetting; // Assuming MenuSetting model exists and needs to be imported

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

            'menuSettings' => MenuSetting::where('is_active', 1)
                ->whereNull('menu_id')
                ->with(['children' => fn($query) => $query->where('is_active', 1)])
                ->orderBy('position')
                ->get(),
        ]);
    }
}
