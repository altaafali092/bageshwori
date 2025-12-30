<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\PromoText\StorePromoTextRequest;
use App\Models\PromoText;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PromoTextController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $promoTexts = PromoText::latest()->paginate(7);
        return Inertia::render('Admin/PromoText/Index', [
            'promoTexts' => $promoTexts
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/PromoText/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePromoTextRequest $request)
    {
        PromoText::create($request->validated());
        return to_route('admin.promo-text.index')->with('success', 'Promo Text Created Successfully');
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
    public function destroy(PromoText $promoText)
    {
        $promoText->delete();
        return back()->with('success', 'Promo Text Deleted Successfully');
    }

    public function UpdateStatus(PromoText $promoText)
    {
        $promoText->update([
            'status' => !$promoText->status
        ]);
        return back()->with('success', 'Promo Text Status Updated Successfully');
    }
}
