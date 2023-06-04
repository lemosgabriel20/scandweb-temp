<?php

namespace App;

use Api\Database;
use PDO;

class Products {

  protected $DB;
  protected array $data;

  public function __construct() {
    $this->DB = (new Database())->init();
  }

  public function getAll() {
    $DB = $this->DB;
    $stmt = $DB->query('SELECT * FROM storepage.products');
    // Get from all tables and format it
    return json_encode($stmt->fetch());
  }
}

?>