<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Models\Slider;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FrontendController extends Controller
{
    public function index()
    {
        $sliders = Slider::where('status', 1)->latest()->get();
        $categories = Category::withCount('products')
            ->where('status', 1)
            ->latest()
            ->get();
        $products = Product::with('category')
            ->where('is_featured', 1)
            ->where('in_stock', 1)
            ->latest()
            ->get();
        $topSells = Product::with('category')
            ->where('in_stock', 1)
            ->latest()->limit(6)
            ->get();
        $topSells = Product::with('category')
            ->where('in_stock', 1)
            ->latest()
            ->limit(4)
            ->get();
        // Deals of the week

        $dealdays = Product::with('category')
            ->where('in_stock', 1)
            ->latest()
            ->limit(1)
            ->get();
        $dealWeeks = Product::with('category')
            ->where('in_stock', 1)
            ->latest()
            ->limit(6)
            ->get();

        $bestSells = Product::with('category')
            ->where('in_stock', 1)
            ->latest()
            ->limit(4)
            ->get();

        return Inertia::render('welcome', [
            'sliders' => $sliders,
            'categories' => $categories,
            'products' => $products,
            'topSells' => $topSells,
            'dealdays' => $dealdays,
            'dealWeeks' => $dealWeeks,
            'bestSells' => $bestSells,

        ]);
    }
    public function productPage(Product $product)
    {
        return Inertia::render('Frontend/ProductDetail/Index', [
            'product' => $product
        ]);
    }
}
