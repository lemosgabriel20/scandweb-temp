<?php
namespace App\Products;
  
use Api\Database;
use App\Products;

class Furniture extends Products {

    private string $table = 'furnitures';

    public function prepareToCreate($data) {
        
        $table = $this->table;

        $execution = [
            "sku"   => $data['sku'],
            "type"  => $data['type'],
            "name"  => $data['name'],
            "price" => $data['price'],
            "height"  => $data['info']['height'],
            "width"  => $data['info']['width'],
            "length"  => $data['info']['length'],
        ];

        $sql = "INSERT INTO $table (sku, type, name, price, height, width, length)
                VALUES (:sku, :type, :name, :price, :height, :width, :length)";

        $this->create($data, $sql, $execution);
    }
}
?>