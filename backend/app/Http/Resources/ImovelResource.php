<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ImovelResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'titulo' => $this->titulo,
            'descricao' => $this->descricao,
            'endereco' => $this->endereco,
            'finalidade' => $this->finalidade,
            'valor' => $this->valor,
            'quartos' => $this->quartos,
            'banheiros' => $this->banheiros,
            'garagem' => $this->garagem,
            'corretor' => $this->corretor,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
