<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SectionController;
use App\Http\Controllers\EtudiantController;

// ------------------authication route-------------------
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

Route::get(
    'auth/isAuthenticated',
    [
        EtudiantController::class,'isAuthenticated'
    ]
)->name('isAuthenticated');

Route::post(
    'auth/getEtudiantById',
    [
        EtudiantController::class,'getEtudiantById'
    ]
)->name('getEtudiantById');

Route::get(
    'auth/logOut',
    [
        EtudiantController::class,'logOut'
    ]
)->name('logOut');


// ----------------Sctions Route------------------

Route::post(
    'sections/addSection',
    [
        SectionController::class,'addSection'
    ]
)->name('addSections');
Route::post(
    'sections/getSectionById',
    [
        SectionController::class,'getSectionById'
    ]
)->name('getSectionById');

Route::get(
    'sections/getSections',
    [
        SectionController::class,'getSections'
    ]
)->name('getSections');


// ---------------Coach route--------------------

Route::post(
    'coachs/addCoach',
    [
        SectionController::class,'addCoach'
    ]
)->name('addCoach');

Route::get(
    'sections/getCoachs',
    [
        SectionController::class,'getCoachs'
    ]
)->name('getCoachs');
