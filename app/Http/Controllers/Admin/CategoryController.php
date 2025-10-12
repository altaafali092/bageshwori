<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Category\StoreCategoryRequest;
use App\Http\Requests\Admin\Category\UpdateCategoryRequest;
use App\Models\Category;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class CategoryController extends Controller
{
    
    public function index()
    {
        $categories = Category::latest()->paginate(7);
        return Inertia::render('admin/Category/Index',[
            'categories' => $categories,
        ]);
    }

    public function create()
    {
        return Inertia::render('admin/Category/Create');
    }

    public function store(StoreCategoryRequest $request)
    {
        Category::create($request->validated());
        return to_route('admin.categories.index')->with('success','Category created successfully');
    }

    public function show(Category $category)
    {
        return Inertia::render('admin/Category/Show',[
            'category' => $category,
        ]);

    }

    public function edit(Category $category)
    {
        return Inertia::render('admin/Category/Edit',[
            'category' => $category,
        ]);
    }

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
