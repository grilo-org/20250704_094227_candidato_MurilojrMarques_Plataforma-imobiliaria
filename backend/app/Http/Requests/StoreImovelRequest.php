<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreImovelRequest extends FormRequest
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
            'titulo' => 'required|string|max:255',
            'descricao' => 'required|string',
            'endereco' => 'required|string|max:255',
            'finalidade' => 'required|in:venda,locacao',
            'valor' => 'required|numeric|min:0',
            'quartos' => 'required|integer|min:0',
            'banheiros' => 'required|integer|min:0',
            'garagem' => 'required|boolean',
            'corretor' => 'required|string|max:255',
        ];
    }
}
