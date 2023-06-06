<?php

namespace App;

use Api\Database;
use PDO;

class Products {

  protected array $data;
  private string $table = 'products';

  public static function getAll() {

    $DB = Database::DB();

    $stmt = $DB->query('SELECT * FROM storepage.products');

    $products = $stmt->fetchAll(PDO::FETCH_OBJ);

    $newProducts = [];

    foreach($products as $value) {
      $sku = $value->sku;
      $type = $value->type;
      $table = $type . 's';
      $stmt = $DB->query("SELECT * FROM $table WHERE sku = '$sku' ");
      $newProducts[] = $stmt->fetch(PDO::FETCH_OBJ);
    }

    return json_encode($newProducts);
  }

  protected static function insert($data) {

    $DB = Database::DB();
    
    $execution = [
      "sku" => $data['sku'],
      "type" => $data['type'],
    ];

    $sql = "INSERT INTO products (sku, type) VALUES (:sku, :type)";

    $stmt = $DB->prepare($sql);

    $stmt->execute($execution);
  }

  protected static function checkSKU($sku) {
    $DB = Database::DB();
    $sql = "SELECT * FROM products WHERE sku = '$sku'";
    $stmt = $DB->query($sql);
    $product = $stmt->fetch(PDO::FETCH_OBJ);
    return $product;
  }
}

?>