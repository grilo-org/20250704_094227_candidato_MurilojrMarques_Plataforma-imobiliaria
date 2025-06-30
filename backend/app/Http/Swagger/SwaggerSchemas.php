<?php

namespace App\Http\Swagger;

/**
 * @OA\Schema(
 *     schema="Imovel",
 *     type="object",
 *     @OA\Property(property="id", type="integer", example=1),
 *     @OA\Property(property="titulo", type="string", example="Casa com Piscina"),
 *     @OA\Property(property="descricao", type="string", example="Excelente casa com 3 quartos e piscina"),
 *     @OA\Property(property="endereco", type="string", example="Rua das Flores, 123 - Jardim Primavera"),
 *     @OA\Property(property="finalidade", type="string", enum={"venda", "locacao"}, example="venda"),
 *     @OA\Property(property="valor", type="number", format="float", example=750000.50),
 *     @OA\Property(property="quartos", type="integer", example=3),
 *     @OA\Property(property="banheiros", type="integer", example=2),
 *     @OA\Property(property="garagem", type="boolean", example=true),
 *     @OA\Property(property="corretor", type="string", example="Carlos Silva"),
 *     @OA\Property(property="created_at", type="string", format="date-time"),
 *     @OA\Property(property="updated_at", type="string", format="date-time")
 * )
 * 
 * @OA\Schema(
 *     schema="ImovelRequest",
 *     type="object",
 *     required={"titulo", "descricao", "endereco", "finalidade", "valor", "quartos", "banheiros", "corretor"},
 *     @OA\Property(property="titulo", type="string", example="Casa com Piscina"),
 *     @OA\Property(property="descricao", type="string", example="Excelente casa com 3 quartos e piscina"),
 *     @OA\Property(property="endereco", type="string", example="Rua das Flores, 123 - Jardim Primavera"),
 *     @OA\Property(property="finalidade", type="string", enum={"venda", "locacao"}, example="venda"),
 *     @OA\Property(property="valor", type="number", format="float", example=750000.50),
 *     @OA\Property(property="quartos", type="integer", example=3),
 *     @OA\Property(property="banheiros", type="integer", example=2),
 *     @OA\Property(property="garagem", type="boolean", example=true),
 *     @OA\Property(property="corretor", type="string", example="Carlos Silva")
 * )
 */
class SwaggerSchemas
{
}