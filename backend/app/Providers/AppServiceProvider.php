<?php

namespace App\Providers;

use App\Interfaces\ImovelRepositoryInterface;
use App\Repositories\ImovelRepository;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(
            ImovelRepositoryInterface::class,
            ImovelRepository::class
        );
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
