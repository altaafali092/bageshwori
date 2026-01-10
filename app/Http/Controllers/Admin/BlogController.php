<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Blog\StoreBlogRequest;
use App\Http\Requests\Blog\UpdateBlogRequest;
use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

use function App\Helpers\deleteFile;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blogs = Blog::latest()->paginate(7);
        return Inertia::render('Admin/Blog/Index', [
            'blogs' => $blogs
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Blog/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBlogRequest $request)
    {
        Blog::create($request->validated() + ['user_id' => Auth::user()->id]);

        return to_route('admin.blogs.index')->with('success', 'Blog Created Successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Blog $blog)
    {
        $blog->load('user');
        return Inertia::render('Admin/Blog/Show', [
            'blog' => $blog,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Blog $blog)
    {

        return Inertia::render('Admin/Blog/Edit', [
            'blog' => $blog,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBlogRequest $request, Blog $blog)
    {

        $data = $request->validated() + ['user_id' => Auth::user()->id];
        // if you want old image deleted when new one is uploaded
        if ($request->hasFile('image')) {
            deleteFile($blog->getRawOriginal('image'));
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
