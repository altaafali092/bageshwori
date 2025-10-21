<?php

namespace App\Http\Controllers;

use App\Models\Slider;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FrontendController extends Controller
{
    public function index()
    {
        $sliders = Slider::where('status', 1)->latest()->get();
        return Inertia::render('welcome', [
            'sliders' => $sliders
        ]);
    }
    public function productPage(Request $request)
    {
        return Inertia::render('Frontend/ProductDetail/Index');
    }
}
