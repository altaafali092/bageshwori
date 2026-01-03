<?php

namespace App\Http\Controllers;

use App\Http\Requests\Contact\StoreContactRequest;
use App\Models\Blog;
use App\Models\Category;
use App\Models\Contact;
use App\Models\Product;
use App\Models\PromoText;
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
        $blogs = Blog::where('status', 1)->latest()->get();
        $promoTexts = PromoText::latest()->get();

        return Inertia::render('welcome', [
            'sliders' => $sliders,
            'categories' => $categories,
            'products' => $products,
            'topSells' => $topSells,
            'dealdays' => $dealdays,
            'dealWeeks' => $dealWeeks,
            'bestSells' => $bestSells,
            'blogs' => $blogs,
            'promoTexts' => $promoTexts

        ]);
    }
    public function categorywiseProduct(Category $category)
    {

        $products = $category->products()->where('in_stock', 1)->latest()->get();
        return Inertia::render('Frontend/ProductDetail/CategoryProduct', [
            'products' => $products,
            'category' => $category
        ]);
    }

    public function productPage(Product $product)
    {
        $product->load('category');
        return Inertia::render('Frontend/ProductDetail/Index', [
            'product' => $product
        ]);
    }


    public function blogIndex()
    {
        $blogs = Blog::where('status', 1)->latest()->get();
        $blogs->load('user');
        return Inertia::render('Frontend/Blog/Index', [
            'blogs' => $blogs
        ]);
    }

    public function blogDetail(Blog $blog)
    {
        $blogs = Blog::where('status', 1)->latest()->get();
        $blog->load('user');
        return Inertia::render('Frontend/Blog/Detail', [
            'blog' => $blog,
            'blogs' => $blogs
        ]);
    }

    public function aboutUs()
    {
        return Inertia::render('Frontend/About/Index');
    }
    public function message(StoreContactRequest $request)
    {
        Contact::create($request->validated());
        return back()->with('message send sucessfully', 'sucess');
    }
}
