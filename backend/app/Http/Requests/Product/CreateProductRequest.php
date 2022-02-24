<?php

namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;

class CreateProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => ['required'],
            'type' => ['required'],
            'description' => ['required'],
            'price' => ['required'],
            'rating' => ['required'],
        ];
    }

    public function messages()
    {
        return [
            'title.required' => "O campo nome é obrigatório!",
            'type.required' => "Campo obrigatório!",
            'description.in' => "Valores aceitos: privada ou publica",
            'price.required' => "O campo cnpj é obrigatório!",
            'rating.required' => "O campo telefone é obrigatório!",
        ];
    }

}
