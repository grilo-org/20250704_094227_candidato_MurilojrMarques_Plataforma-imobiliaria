<?php

namespace App\Interfaces;

use App\Models\Imovel;
use Illuminate\Database\Eloquent\Collection;

interface ImovelRepositoryInterface
{
    public function all(array $filters = []): Collection;
    public function find(int $id): ?Imovel;
    public function create(array $data): Imovel;
    public function update(int $id, array $data): bool;
    public function delete(int $id): bool;
}