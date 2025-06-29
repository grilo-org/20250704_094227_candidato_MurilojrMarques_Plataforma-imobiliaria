<?php

namespace Database\Seeders;

use App\Models\Imovel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ImovelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Imovel::factory()->count(10)->create();
    }
}
