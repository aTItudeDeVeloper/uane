<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// Registrar rotas de API manualmente (Laravel 12 não cria provider padrão)
Route::prefix('api')
    ->middleware('api')
    ->group(base_path('routes/api.php'));