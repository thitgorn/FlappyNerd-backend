<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserLoginController extends Controller
{
    public function logOut() {
        Auth::logout();
        return redirect('/');
    }

    public function getUser() {
        $user = Auth::user();
        if(!$user) {
            return "Guest";
        }
        return $user;
    }
}
