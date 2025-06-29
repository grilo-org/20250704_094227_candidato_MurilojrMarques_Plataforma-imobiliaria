<?php

use App\Http\Controllers\ImovelController;
use Illuminate\Support\Facades\Route;

Route::get('/', [ImovelController::class, 'index']);
Route::post('/', [ImovelController::class, 'store']);
Route::get('/{id}', [ImovelController::class, 'show']);
Route::put('/{id}', [ImovelController::class, 'update']);
Route::delete('/{id}', [ImovelController::class, 'destroy']);
