<?php

namespace App\Services;

use App\Interfaces\ImovelRepositoryInterface;
use App\Models\Imovel;
use Illuminate\Database\Eloquent\Collection;

class ImovelService{
    public function __construct(private ImovelRepositoryInterface $repository)
    {
        
    }

    public function getAllImoveis(array $filters = []): Collection
    {
        return $this->repository->all($filters);
    }

    public function getImovel(int $id): ?Imovel{
        return $this->repository->find($id);
    }

    public function createImovel(array $data): Imovel
    {
        return $this->repository->create($data);
    }

    public function updateImovel(int $id, array $data): ?Imovel
    {
        $imovel = $this->repository->find($id);
        if (!$imovel) {
            return null;
        }
        $imovel->update($data);
        return $imovel;
    }

    public function deleteImovel(int $id): bool
    {
        return $this->repository->delete($id);
    }
}