<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\OfficeSetting\StoreOfficeSettingRequest;
use App\Http\Requests\Admin\OfficeSetting\UpdateOfficeSettingRequest;
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
        return Inertia::render('admin/OfficeSetting/Index', [
            'officeSetting' => $officeSetting
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
    public function store(StoreOfficeSettingRequest $request)
    {
        $officeSetting = OfficeSetting::latest()->first();

        if (!empty($officeSetting)) {
            $officeSetting->update(checkFileExists($request->validated(), [
                'office_logo' => null,
                'office_cover' => null,
                'office_banner' => null,
                'office_banner_2' => null,
            ]));
        } else {
            OfficeSetting::create(
                checkFileExists($request->validated(), [
                    'office_logo' => null,
                    'office_cover' => null,
                    'office_banner' => null,
                    'office_banner_2' => null,
                ])
            );
        }

        Cache::forget('office_setting');
        return to_route('admin.office-setting.index')
            ->with('success', 'Office Setting Updated Successfully');
    }   
}
