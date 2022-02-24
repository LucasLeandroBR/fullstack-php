<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return false
     */
    public function run()
    {

        $count = \DB::table('products')->count();

        if ($count > 0) {
            $this->command->info('Esse seeder ja foi execultado');
            return false;
        }

        $products = json_decode(file_get_contents(__DIR__ . '/data/products.json'));

        foreach ($products as $product){
            DB::table('products')->insert([
                'title' =>$product->title,
                'type' =>$product->type,
                'description' =>$product->description,
                'price' =>$product->price,
                'rating' =>$product->rating,
            ]);
        }
    }
}
