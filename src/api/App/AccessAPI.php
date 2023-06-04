<?php 
namespace App\Api;

use App\Products;
use PDO;

class AccessAPI {
  private string $method;
  protected array $body;
  
  public function __construct(string $method, array $body) {
    $this->method = $method;
    $this->body = $body;
    $this->response();
  }
  private function response() {
    require(__DIR__ . '/packages/Products.php');
    $products = new Products();
    $method = $this->method;
    $body = $this->body;

    if ($method === 'GET') {
      // get all products
      echo $products->getAll();
      exit();
    }

    else if ($method === 'POST') {
      // create new product
      $data = json_decode(file_get_contents("php://input"), true);
      $type = ucfirst($data['type']);
      require(__DIR__ . '/packages/' .$type. '.php');
      $class = 'App\\Products\\' . $type;
      $operation = new $class();
      $operation->insert();
      var_dump($type);
    }

    else if ($method === 'DELETE') {
      // delete product(s)
      var_dump(['STATUS' => 'DELETED']);
    }
  }

}

?>