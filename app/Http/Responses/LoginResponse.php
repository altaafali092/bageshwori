<?php

namespace App\Http\Responses;

use Illuminate\Support\Facades\Auth;
use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;

class LoginResponse implements LoginResponseContract
{
    /**
     * Create a new class instance.
     */
    public function toResponse($request)
    {
        $user = Auth::user();

        return match ($user->role) {
            'admin' => redirect()->intended('admin/dashboard'),
            default => redirect()->intended('/'),
        };
    }
}
