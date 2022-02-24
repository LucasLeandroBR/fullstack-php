<?php

namespace App\Http\Controllers;

use App\Http\Requests\Product\CreateProductRequest;
use App\Http\Resources\Products\ProductCollection;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    function index(Request $request)
    {
        $products = Product::query()->orderBy('id')->paginate($request->get('per_page'));

        return response()->json(new ProductCollection($products));
    }

    function show($productId)
    {

        $product = Product::find($productId);

        if (is_null($product)) {
            return response()->json(['message' => 'Produto não encontrado'], 404);
        }

        return response()->json($product);
    }

    function create(Request $request)
    {

        $data = $this->decodeJson($request);

        if (count($data) < 1) {
            return response()->json([
                'status' => false,
                'message' => 'Não há dados para serem inseridos.'
            ]);
        }

        foreach ($data as $item) {
            Product::create($item);
        }

        return response()->json([
            'status' => true,
            'message' => 'Banco atualizado com sucesso'
        ]);

    }

    function update(CreateProductRequest $request, $productId)
    {

        $data = $request->only([
            'title',
            'type',
            'description',
            'price',
            'rating'
        ]);

        Product::findOrFail($productId)->update($data);

        return response()->json([
            'status' => true,
            'message' => 'Produto atualizado com sucesso!',
        ]);

    }

    public function delete(Request $request, $productId)
    {

        $product = Product::findOrFail($productId)->delete();

        return response()->json($product);

    }

    private function decodeJson ($request) {

        $data = $request->file('file');

        $jsonData = file_get_contents($data);

        return json_decode($jsonData, true);
    }
}
