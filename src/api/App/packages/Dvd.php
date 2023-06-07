<?php
namespace App\Products;

use Api\Database;
use App\Products;

class Dvd extends Products {

    private string $table = 'dvds';

    public function prepareToCreate($data) {

        $table = $this->table;

        $execution = [
            "sku"   => $data['sku'],
            "type"  => $data['type'],
            "name"  => $data['name'],
            "price" => $data['price'],
            "size"  => $data['info']['size']
        ];

        $sql = "INSERT INTO $table (sku, type, name, price, size)
                VALUES (:sku, :type, :name, :price, :size)";
        
        $this->create($data, $sql, $execution);
    }
}
?>