<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Blog\StoreBlogRequest;
use App\Http\Requests\Admin\Blog\UpdateBlogRequest;
use App\Models\Blog;
use Faker\Provider\ar_EG\Internet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blogs = Blog::latest()->paginate(7);
        return Inertia::render('admin/Blog/Index', [
            'blogs' => $blogs
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('admin/Blog/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBlogRequest $request)
    {
        Blog::create($request->validated() + ['user_id'=>Auth::user()->id]);
      
        return to_route('admin.blogs.index')->with('success', 'Blog Created Successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Blog $blog)
    {
        $blog->load('user');
        return Inertia::render('admin/Blog/Show', [
            'blog' => $blog,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Blog $blog)
    {
     
        return Inertia::render('admin/Blog/Edit', [
            'blog' => $blog,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBlogRequest $request, Blog $blog)
    {

        $data = $request->validated()+['user_id'=>Auth::user()->id];
        if ($request->hasFile('image')) {
            if ($blog->getRawOriginal('image') && Storage::disk('public')->exists($blog->getRawOriginal('image'))) {
                Storage::disk('public')->delete($blog->getRawOriginal('image'));
            }
            // Store new image
            $path = $request->file('image')->store('Blog', 'public');
            $data['image'] = $path;
        } else {
            // keep the old image
            $data['image'] = $blog->getRawOriginal('image');
        }
        $blog->update($data);
        return to_route('admin.blogs.index')->with('success', 'Blog Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Blog $blog)
    {
        $imagePath = $blog->getRawOriginal('image');
        if ($imagePath && Storage::disk('public')->exists($imagePath)) {
            Storage::disk('public')->delete($imagePath);
        }
        $blog->delete();
        return to_route('admin.blogs.index')->with('success', 'Blog Deleted Successfully');
    }

    public function status(Blog $blog)
    {
        $blog->update([
            'status' => !$blog->status
        ]);
    }
}
