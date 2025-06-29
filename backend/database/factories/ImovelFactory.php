<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Imovel>
 */
class ImovelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'titulo' => $this->faker->sentence(3),
            'descricao' => $this->faker->paragraph,
            'endereco' => $this->faker->address,
            'finalidade' => $this->faker->randomElement(['venda', 'locacao']),
            'valor' => $this->faker->numberBetween(100000, 1000000),
            'quartos' => $this->faker->numberBetween(1, 5),
            'banheiros' => $this->faker->numberBetween(1, 4),
            'garagem' => $this->faker->boolean ? $this->faker->numberBetween(1, 3) : 0,
            'corretor' => $this->faker->name,
        ];
    }
}
