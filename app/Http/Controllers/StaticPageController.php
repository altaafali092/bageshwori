<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class StaticPageController extends Controller
{
    public function show($slug)
    {
        return match ($slug) {
            'index' => app(FrontendController::class)->index(),
            'about' => Inertia::render('Frontend/About/Index'),
            'blogs' => Inertia::render('Frontend/Blog/Index'),
            default => abort(404),
        };
    }
}
