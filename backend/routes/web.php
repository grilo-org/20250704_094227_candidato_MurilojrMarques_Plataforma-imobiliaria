<?php

use App\Http\Controllers\ImovelController;
use App\Models\Imovel;
use Illuminate\Support\Facades\Route;

Route::prefix('api')->group(function(){
    Route::get('/', [ImovelController::class, 'index']);
    Route::post('/', [ImovelController::class, 'store']);
    Route::get('/{id}', [ImovelController::class, 'show']);
    Route::put('/{id}', [ImovelController::class, 'update']);
    Route::delete('/{id}', [ImovelController::class, 'destroy']);
});
