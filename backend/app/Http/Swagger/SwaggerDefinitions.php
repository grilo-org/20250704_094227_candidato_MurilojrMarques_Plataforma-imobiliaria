<?php

namespace App\Http\Swagger;

/**
 * 
 * @OA\Server(
 *     url="http://localhost:8000/api",
 *     description="Servidor de Desenvolvimento"
 * )
 * 
 * @OA\SecurityScheme(
 *     securityScheme="bearerAuth",
 *     type="http",
 *     scheme="bearer",
 *     bearerFormat="JWT"
 * )
 */
class SwaggerDefinitions
{
}