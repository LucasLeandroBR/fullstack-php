<?php

namespace App\Http\Resources\Products;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array
     */

    public function toArray($request)
    {

        if (isset($this->id)) {
            return $this->jsonReturn($this);
        }

        return $this->resource->map(function ($item) {
            return $this->jsonReturn($item);
        });

    }

    public function jsonReturn ($item) {
        return [
            'id' => $item->id,
            'title' => $item->title,
            'type' => $item->type,
            'description' => $item->description,
            'price' => $item->price,
            'rating' => $item->rating,
            'created_at' => $item->created_at,
            'deleted_at' => $item->deleted_at,
        ];
    }
}
