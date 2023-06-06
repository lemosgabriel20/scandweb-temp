<?php
namespace App\Products;

use Api\Database;
use App\Products;

class Dvd extends Products {

    private string $table = 'dvds';

    public function create($data) {

        $DB = Database::DB();

        if(Products::checkSKU($data['sku'])) {
            http_response_code(409);
            exit();
        }

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

        $stmt = $DB->prepare($sql);

        $stmt->execute($execution);
        
        Products::insert($data);
    }
    // get dvds
}
?>