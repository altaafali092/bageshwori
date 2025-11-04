<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\OfficeSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

use function App\Helpers\checkFileExists;

class OfficeSettingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $officeSetting = OfficeSetting::first();
        return Inertia::render('admin/OfficeSetting/Index',[
            'officeSetting'=>$officeSetting
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $officeSetting = OfficeSetting::latest()->first();

        if (!empty($officeSetting)) {
            $officeSetting->update(checkFileExists($request->validated(), [
                'office_image' => null,
                'office_cover' => null
            ]));
        } else {
            OfficeSetting::create(checkFileExists($request->validated(), [
                'office_image' => null,
                'office_cover' => null
            ]) + [
                'created_by' => Auth::user()->id,
            ]);
        }

        Cache::forget('office_setting');
        return to_route('admin.office-setting.index')
            ->with('success', 'Office Setting Updated Successfully');
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
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
