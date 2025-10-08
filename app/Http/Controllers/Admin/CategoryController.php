<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Category\StoreCategoryRequest;
use App\Http\Requests\Admin\Category\UpdateCategoryRequest;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::latest()->paginate(7);
        return Inertia::render('admin/Category/Index',[
            'categories' => $categories,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('admin/Category/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $request)
    {
        Category::create($request->validated());
        return to_route('admin.categories.index')->with('success','Category created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, Category $category)
    {
         $data = $request->validated();

        if ($request->hasFile('image')) {

            if ($category->getRawOriginal('image') && Storage::disk('public')->exists($category->getRawOriginal('image'))) {
                Storage::disk('public')->delete($category->getRawOriginal('image'));
            }

            // Store new image
            $path = $request->file('image')->store('Category', 'public');
            $data['image'] = $path;
        } else {
            // keep the old image
            $data['image'] = $category->getRawOriginal('image');
        }

        $category->update($data);
        return to_route('admin.categories.index')->with('success','Category updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
         $imagePath = $category->getRawOriginal('image');
        if ($imagePath && Storage::disk('public')->exists($imagePath)) {
            Storage::disk('public')->delete($imagePath);
        }
        $category->delete();
        return back()->with('success','Category deleted successfully');
    }
    public function status(Category $category)
    {
        $category->update([
            'status'=>!$category->status,
        ]);
        return back()->with('success','Category status updated successfully');
    }
}
