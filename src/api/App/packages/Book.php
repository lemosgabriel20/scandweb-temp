<?php
namespace App\Products;

use Api\Database;
use App\Products;

class Book extends Products {

  private string $table = 'books';

  public function prepareToCreate($data) {

      $table = $this->table;

      $execution = [
          "sku"   => $data['sku'],
          "type"  => $data['type'],
          "name"  => $data['name'],
          "price" => $data['price'],
          "weight"  => $data['info']['weight']
      ];

      $sql = "INSERT INTO $table (sku, type, name, price, weight)
              VALUES (:sku, :type, :name, :price, :weight)";
      
      $this->create($data, $sql, $execution);
  }
}
?>