<?php

namespace App;

use Api\Database;
use PDO;

class Products {

  private PDO $DB;
  protected array $data;
  private string $table = 'products';

  public function __construct() {
    $this->DB = Database::DB();
  }

  public function getAll() {

    $DB = $this->DB;

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

  private function createProduct($data) {

    $DB = $this->DB;
    
    $execution = [
      "sku" => $data['sku'],
      "type" => $data['type'],
    ];

    $sql = "INSERT INTO products (sku, type) VALUES (:sku, :type)";

    $stmt = $DB->prepare($sql);

    $stmt->execute($execution);
  }

  private function checkSKU($sku) {
    $DB = $this->DB;

    $sql = "SELECT * FROM products WHERE sku = '$sku'";

    $stmt = $DB->query($sql);

    $product = $stmt->fetch(PDO::FETCH_OBJ);

    return $product;
  }

  private function deleteProductBySKU($sku) {
    $DB = $this->DB;

    $sql = "DELETE FROM products WHERE sku = '$sku'";

    $stmt = $DB->prepare($sql);

    $stmt->execute();
  }

  public function deleteAll() {
    $DB = $this->DB;

    $sql = "DELETE FROM products";

    $stmt = $DB->prepare($sql);

    $stmt->execute();
  }

  public function deleteBySKU($sku) {
    $DB = $this->DB;

    $table = $this->table;

    $sql = "DELETE FROM $table WHERE sku = '$sku'";

    $stmt = $DB->prepare($sql);

    $stmt->execute();

    $this->deleteProductBySKU($sku);
  }

  protected function create($data, $sql, $execution) {
    $DB = $this->DB;

    if($this->checkSKU($data['sku'])) {
        http_response_code(409);
        exit();
    }

    $stmt = $DB->prepare($sql);

    $stmt->execute($execution);

    $this->createProduct($data);
  }

}

?>