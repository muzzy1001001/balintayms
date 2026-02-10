<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/valentine', function () {
    return view('valentine');
})->name('valentine');