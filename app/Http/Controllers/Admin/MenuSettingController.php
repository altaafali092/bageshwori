<?php

namespace App\Http\Controllers\Admin;

use App\Enums\MenuTypeEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\MenuSetting\StoreMenuSettingRequest;
use App\Http\Requests\MenuSetting\UpdateMenuSettingRequest;
use App\Models\Category;
use App\Models\MenuSetting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MenuSettingController extends Controller
{
    public function index()
    {
        $menuSettings = MenuSetting::with('menuable', 'parent')

            ->paginate(7);

        // dd($menuSettings->all());
        return Inertia::render('Admin/MenuSetting/Index', [
            'menuSettings' => $menuSettings,
        ]);
    }

    public function create()
    {
        $categories = Category::latest()->get();
        $menuSettings = MenuSetting::latest()->get();
        return Inertia::render('Admin/MenuSetting/Create', [
            'categories' => $categories,
            'menuSettings' => $menuSettings,
            'menuTypes' => MenuTypeEnum::labels(),
            'staticPages' => config('MenuFile.static_pages'),
            'staticPageSlugs' => config('StaticePageSlug.static_page_slugs')
        ]);
    }

    public function store(StoreMenuSettingRequest $request)
    {
        MenuSetting::create($request->validated());

        return to_route('admin.menu-setting.index')->with('success', 'Menu added successfully.');
    }

    public function edit(MenuSetting $menuSetting)
    {
        $categories = Category::latest()->get();
        $menuSettings = MenuSetting::latest()->get();

        return Inertia::render('Admin/MenuSetting/Edit', [
            'menuSetting' => $menuSetting,
            'categories' => $categories,
            'menuSettings' => $menuSettings,
            'menuTypes' => MenuTypeEnum::labels(),
            'staticPages' => config('MenuFile.static_pages'),
            'staticPageSlugs' => config('StaticePageSlug.static_page_slugs'),
        ]);
    }


    public function update(UpdateMenuSettingRequest $request, MenuSetting $menuSetting)
    {
        $menuSetting->update($request->validated());

        return redirect()->back()->with('success', 'Menu updated successfully.');
    }

    public function destroy(MenuSetting $menuSetting)
    {
        $menuSetting->delete();

        return back()->with('success', 'Menu deleted successfully.');
    }

    public function status(MenuSetting $menuSetting)
    {

        $menuSetting->update([
            'is_active' => !$menuSetting->is_active
        ]);
        return back()->with('menu Status updated Sucessfully', 'success');
    }
}
