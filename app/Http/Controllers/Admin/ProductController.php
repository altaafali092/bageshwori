<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Product\StoreProductRequest;
use App\Http\Requests\Admin\Product\UpdateProductRequest;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::latest()->paginate(10);
        return Inertia::render('admin/Product/Index', [
            'products' => $products,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::latest()->get();
        return Inertia::render('admin/Product/Create', [
            'categories' => $categories,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        Product::create($request->validated()+['created_by'=>Auth::user()->id]);
        return to_route('admin.products.index')->with('success', 'Product created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return Inertia::render('admin/Product/Show', [
            'product' => $product,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        $categories = Category::latest()->get();
        return Inertia::render('admin/Product/Edit', [
            'product' => $product,
            'categories' => $categories,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
      $data = $request->validated();

        if ($request->hasFile('image')) {

            if ($product->getRawOriginal('image') && Storage::disk('public')->exists($product->getRawOriginal('image'))) {
                Storage::disk('public')->delete($product->getRawOriginal('image'));
            }

            // Store new image
            $path = $request->file('image')->store('productImage', 'public');
            $data['image'] = $path;
        } else {
            // keep the old image
            $data['image'] = $product->getRawOriginal('image');
        }
        $product->update($data);
        return back()->with('success', 'Product updated successfully');
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
