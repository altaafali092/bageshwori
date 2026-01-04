<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\Category;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function dashboard()
    {
        $stats = [
            [
                'label' => 'Total Revenue',
                'value' => '$' . number_format(45231), // Placeholder for actual revenue logic
                'icon' => 'DollarSign',
                'change' => '+20.1%',
                'trend' => 'up',
                'color' => 'text-blue-500 bg-blue-500/10'
            ],
            [
                'label' => 'Products',
                'value' => (string) Product::count(),
                'icon' => 'Package',
                'change' => '+12.5%',
                'trend' => 'up',
                'color' => 'text-purple-500 bg-purple-500/10'
            ],
            [
                'label' => 'Categories',
                'value' => (string) Category::count(),
                'icon' => 'Layers',
                'change' => '+4.3%',
                'trend' => 'up',
                'color' => 'text-orange-500 bg-orange-500/10'
            ],
            [
                'label' => 'Blogs',
                'value' => (string) Blog::count(),
                'icon' => 'FileText',
                'change' => '+2.4%',
                'trend' => 'up',
                'color' => 'text-green-500 bg-green-500/10'
            ],
        ];

        // Fetch real category distribution
        $categoryDistribution = Category::withCount('products')
            ->get()
            ->map(fn($cat) => [
                'name' => $cat->name,
                'value' => $cat->products_count
            ])
            ->take(4)
            ->toArray();

        // Fetch top products (using latest for now as proxy for "top")
        $topProducts = Product::latest()
            ->take(5)
            ->get()
            ->map(fn($p) => [
                'name' => $p->name,
                'sales' => rand(50, 500) // Random sales data for visual
            ])
            ->toArray();

        // Fetch recent activity (Contacts and Products)
        $recentContacts = \App\Models\Contact::latest()->take(3)->get()->map(fn($c) => [
            'id' => 'c-' . $c->id,
            'user' => $c->name,
            'action' => 'Sent a message: ' . \Illuminate\Support\Str::limit($c->subject, 20),
            'time' => $c->created_at->diffForHumans(),
            'type' => 'contact'
        ]);

        $recentProducts = Product::latest()->take(2)->get()->map(fn($p) => [
            'id' => 'p-' . $p->id,
            'user' => 'System',
            'action' => 'New product added: ' . $p->name,
            'time' => $p->created_at->diffForHumans(),
            'type' => 'product'
        ]);

        $recentActivity = $recentContacts->concat($recentProducts)->sortByDesc('time')->values()->toArray();

        return Inertia::render('dashboard', [
            'stats' => $stats,
            'categoryData' => $categoryDistribution,
            'topProducts' => $topProducts,
            'recentActivity' => $recentActivity
        ]);
    }
}
