<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreImovelRequest;
use App\Http\Requests\UpdateImovelRequest;
use App\Http\Resources\ImovelResource;
use App\Services\ImovelService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class ImovelController extends Controller
{
    public function __construct(private ImovelService $imovelService){}
    
    public function index(): JsonResponse{
        $filters = request() ->only(['finalidade', 'valor_min', 'valor_max']);
        $imoveis = $this->imovelService->getAllImoveis($filters);

        return response()->json([
            'data' => ImovelResource::collection($imoveis)
        ]);
    }

    public function store(StoreImovelRequest $request): JsonResponse{
        $imovel = $this->imovelService->createImovel($request->validated());
        return response()->json([
            'data' => new ImovelResource($imovel)
        ], 201);
    }

    public function show(int $id): JsonResponse{
        $imovel = $this->imovelService->getImovel($id);
        if ($response = $this->notFoundIfNull($imovel)) return $response;

        return response()->json([
            'data' => new ImovelResource($imovel)
        ]);
    }

    public function update(UpdateImovelRequest $request, int $id): JsonResponse{
        $updated = $this->imovelService->updateImovel($id, $request->validated());
        if ($response = $this->notFoundIfNull($updated)) return $response;
        return response()->json([
            'message' => 'Imóvel atualizado com sucesso',
            'data' => new ImovelResource($updated)
        ]);
    }

    public function destroy(int $id): JsonResponse{
        $deleted = $this->imovelService->deleteImovel($id);
        if ($response = $this->notFoundIfNull($deleted)) return $response;

        return response()->json(['message' => 'Imóvel deletado com sucesso']);
    }

    private function notFoundIfNull(mixed $value): ?JsonResponse{
        return !$value ? response()->json(['message' => 'Imóvel não encontrado'], 404) : null;
    }
}
