<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Imovel extends Model
{
    use HasFactory;

    protected $fillable = [
        'titulo',
        'descricao',
        'endereco',
        'finalidade',
        'valor',
        'quartos',
        'banheiros',
        'garagem',
        'corretor'
    ];

    protected $casts = [
        'garagem' => 'boolean',
    ];

    public function getValorFormatadoAttribute()
    {
        return number_format($this->valor, 2, ',', '.');
    }

    public const FINALIDADE_VENDA = 'venda';
    public const FINALIDADE_LOCACAO = 'locacao';

    public static function finalidades()
    {
        return [
            self::FINALIDADE_VENDA => 'Venda',
            self::FINALIDADE_LOCACAO => 'Locação',
        ];
    }
}
