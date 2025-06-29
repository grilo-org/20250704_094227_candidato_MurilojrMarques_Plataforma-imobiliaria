<?php

namespace App\Interfaces;

use App\Models\Imovel;

interface ImovelRepositoryInterface
{
    public function all(array $filters = []);
    public function find(int $id): ?Imovel;
    public function create(array $data): Imovel;
    public function update(int $id, array $data): bool;
    public function delete(int $id): bool;
}