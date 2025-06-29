<?php

namespace App\Repositories;

use App\Interfaces\ImovelRepositoryInterface;
use App\Models\Imovel;

class ImovelRepository implements ImovelRepositoryInterface
{
    public function all(array $filters = []): array
    {
        $query = Imovel::query();
        
        if (isset($filters['finalidade'])) {
            $query->where('finalidade', $filters['finalidade']);
        }
        
        if (isset($filters['valor_min'])) {
            $query->where('valor', '>=', $filters['valor_min']);
        }
        
        if (isset($filters['valor_max'])) {
            $query->where('valor', '<=', $filters['valor_max']);
        }
        
        return $query->get()->toArray();
    }

    public function find(int $id): ?Imovel
    {
        return Imovel::find($id);
    }

    public function create(array $data): Imovel
    {
        return Imovel::create($data);
    }

    public function update(int $id, array $data): bool
    {
        $imovel = $this->find($id);
        
        if (!$imovel) {
            return false;
        }
        
        return $imovel->update($data);
    }

    public function delete(int $id): bool
    {
        $imovel = $this->find($id);
        
        if (!$imovel) {
            return false;
        }
        
        return $imovel->delete();
    }
}