<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateImovelRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'titulo' => 'sometimes|string|max:255',
            'descricao' => 'sometimes|string',
            'endereco' => 'sometimes|string|max:255',
            'finalidade' => 'sometimes|in:venda,locacao',
            'valor' => 'sometimes|numeric|min:0',
            'quartos' => 'sometimes|integer|min:0',
            'banheiros' => 'sometimes|integer|min:0',
            'garagem' => 'sometimes|boolean',
            'corretor' => 'sometimes|string|max:255',
        ];
    }
}
