<?php

namespace App\Http\Controllers\Swagger;

use Illuminate\Routing\Controller;

/**
 * @OA\Info(
 *     title="API de Imóveis",
 *     version="1.0.0",
 *     description="Documentação da API para gerenciamento de imóveis",
 *     @OA\Contact(
 *         email="suporte@empresa.com",
 *         name="Equipe de Desenvolvimento"
 *     ),
 *     @OA\License(
 *         name="MIT",
 *         url="https://opensource.org/licenses/MIT"
 *     )
 * )
 * 
 * @OA\Server(
 *     url=L5_SWAGGER_CONST_HOST,
 *     description="Servidor API Local"
 * )
 * 
 * @OA\Tag(
 *     name="Imóveis",
 *     description="Operações relacionadas a imóveis"
 * )
 */
class ImovelControllerSwagger extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/imoveis",
     *     tags={"Imóveis"},
     *     summary="Listar todos os imóveis",
     *     description="Retorna uma lista de imóveis com possibilidade de filtro",
     *     @OA\Parameter(
     *         name="finalidade",
     *         in="query",
     *         description="Filtrar por finalidade (venda ou locacao)",
     *         required=false,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Parameter(
     *         name="valor_min",
     *         in="query",
     *         description="Valor mínimo do imóvel",
     *         required=false,
     *         @OA\Schema(type="number")
     *     ),
     *     @OA\Parameter(
     *         name="valor_max",
     *         in="query",
     *         description="Valor máximo do imóvel",
     *         required=false,
     *         @OA\Schema(type="number")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Operação bem sucedida",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(ref="#/components/schemas/Imovel")
     *         )
     *     )
     * )
     */
    public function index() {}

    /**
     * @OA\Post(
     *     path="/api/imoveis",
     *     tags={"Imóveis"},
     *     summary="Cadastrar novo imóvel",
     *     description="Cria um novo registro de imóvel",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(ref="#/components/schemas/ImovelRequest")
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Imóvel criado com sucesso",
     *         @OA\JsonContent(ref="#/components/schemas/Imovel")
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Erro de validação"
     *     )
     * )
     */
    public function store() {}

    /**
     * @OA\Get(
     *     path="/api/imoveis/{id}",
     *     tags={"Imóveis"},
     *     summary="Visualizar imóvel específico",
     *     description="Retorna os dados de um imóvel específico",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID do imóvel",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Operação bem sucedida",
     *         @OA\JsonContent(ref="#/components/schemas/Imovel")
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Imóvel não encontrado"
     *     )
     * )
     */
    public function show() {}

    /**
     * @OA\Put(
     *     path="/api/imoveis/{id}",
     *     tags={"Imóveis"},
     *     summary="Atualizar imóvel",
     *     description="Atualiza os dados de um imóvel existente",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID do imóvel",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(ref="#/components/schemas/ImovelRequest")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Imóvel atualizado com sucesso"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Imóvel não encontrado"
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Erro de validação"
     *     )
     * )
     */
    public function update() {}

    /**
     * @OA\Delete(
     *     path="/api/imoveis/{id}",
     *     tags={"Imóveis"},
     *     summary="Excluir imóvel",
     *     description="Remove um imóvel do sistema",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID do imóvel",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Imóvel excluído com sucesso"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Imóvel não encontrado"
     *     )
     * )
     */
    public function destroy() {}
}
