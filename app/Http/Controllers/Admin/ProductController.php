<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\StoreProductRequest;
use App\Http\Requests\Product\UpdateProductRequest;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

use function App\Helpers\deleteFile;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::latest()->paginate(7);
        return Inertia::render('Admin/Product/Index', [
            'products' => $products,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::latest()->get();
        return Inertia::render('Admin/Product/Create', [
            'categories' => $categories,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        // dd($request->all());
        Product::create($request->validated() + ['created_by' => Auth::user()->id]);
        return to_route('admin.products.index')->with('success', 'Product created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        $categories = Category::latest()->get();
        $product->load('category');

        return Inertia::render('Admin/Product/Show', [
            'product' => $product,
            'categories' => $categories,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        $categories = Category::latest()->get();
        return Inertia::render('Admin/Product/Edit', [
            'product' => $product,
            'categories' => $categories,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        $data = $request->validated() + ['created_by' => Auth::user()->id];

        // if you want old image deleted when new one is uploaded
        if ($request->hasFile('image')) {
            deleteFile($product->getRawOriginal('image'));
        }

        $product->update($data);

        return to_route('admin.products.index')->with('success', 'Product updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $imagePath = $product->getRawOriginal('image');
        if ($imagePath && Storage::disk('public')->exists($imagePath)) {
            Storage::disk('public')->delete($imagePath);
        }
        $product->delete();
        return back()->with('success', 'Product deleted successfully');
    }
    public function featured(Product $product)
    {
        $product->update([
            'is_featured' => !$product->is_featured,
        ]);
        return back()->with('success', 'Product featured status updated');
    }
    public function stock(Product $product)
    {
        $product->update([
            'in_stock' => !$product->in_stock,
        ]);
        return back()->with('success', 'Product status updated');
    }
}
