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
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class FrontendController extends Controller
{
    public function index()
    {
        $sliders = Slider::where('status', 1)->latest()->get();

        $categories = Category::where('status', 1)
            ->withCount(['products' => function ($q) {
                $q->whereNull('deleted_at');
            }])
            ->latest()
            ->get();

        $allProducts = Product::with('category')
            ->where('is_featured', 1)
            ->where('in_stock', 1)
            ->latest()
            ->get();

        $products = $allProducts->where('is_featured', 1)->values();

        $sideCategories = $categories->shuffle()->take(2);
        $promoCategories = $categories->shuffle()->take(3);
        $categoryBanners = $categories->shuffle()->take(2);

        $topSells = $allProducts->take(5);
        $trendingProducts = $allProducts->take(6);
        $dealdays = $allProducts->take(1);
        $dealWeeks = $allProducts->take(6);
        $bestSells = $allProducts->take(4);

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
            'promoTexts' => $promoTexts,
            'sideCategories' => $sideCategories,
            'promoCategories' => $promoCategories,
            'categoryBanners' => $categoryBanners,
            'trendingProducts' => $trendingProducts,

        ]);
    }

    public function allProduct()
    {
        $products = Product::where('in_stock', 1)
            ->latest()
            ->get();

        return Inertia::render('Frontend/ProductDetail/CategoryProduct', [
            'products' => $products,
            'category' => null, // Important for all products
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

    // user profile
    public function userProfile()
    {
        return Inertia::render('Frontend/UserProfile/Index');
    }

    public function editProfile()
    {
        return Inertia::render('Frontend/UserProfile/Edit');
    }

    public function updateProfile(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'nullable|string|max:20',
            'address' => 'nullable|string|max:255',
            'avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $user = $request->user();
        $user->name = $request->name;
        $user->phone = $request->phone;
        $user->address = $request->address;

        if ($request->hasFile('avatar')) {
            if ($user->avatar) {
                // Remove /storage/ prefix if present to get relative path
                $oldPath = str_replace('/storage/', '', $user->avatar);
                Storage::disk('public')->delete($oldPath);
            }
            $path = $request->file('avatar')->store('avatars', 'public');
            $user->avatar = '/storage/' . $path;
        }

        $user->save();

        return redirect()->route('userProfile')->with('success', 'Profile updated successfully.');
    }
}
