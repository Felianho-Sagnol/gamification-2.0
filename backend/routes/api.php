<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EtudiantController;

Route::post(
    'auth/register',
    [
        EtudiantController::class,'register'
    ]
)->name('register');

Route::post(
    'auth/login',
    [
        EtudiantController::class,'login'
    ]
)->name('login');
