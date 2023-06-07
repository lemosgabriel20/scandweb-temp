<?php 
namespace App\Api;

use App\Products;
use Api\Database;
use PDO;

class AccessAPI {

  private string $method;
  protected array $body;
  
  public function __construct(string $method, array $body) {
    Database::init();
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
      echo ($products->getAll());
    }
  
    if ($method === 'POST') {

      $data = json_decode(file_get_contents("php://input"), true);

      $model = ucfirst($data['type']);

      require(__DIR__ . '/packages/' .$model. '.php');

      $class = 'App\\Products\\' . $model;

      $modelObj = new $class();

      $modelObj->prepareToCreate($data);

      http_response_code(201);
    }

    if ($method === 'DELETE') {
      
      $data = json_decode(file_get_contents("php://input"), true);

      if ($data['massDelete']) {

        $products->deleteAll();

        http_response_code(300);

      } else {

        $model = ucfirst($data['type']);

        require(__DIR__ . '/packages/' .$model. '.php');
  
        $class = 'App\\Products\\' . $model;
  
        $modelObj = new $class();
  
        
        $sku = $data['sku'];
        
        $modelObj->deleteBySKU($sku);
          
        http_response_code(300);
      }
    }
  }

}

?>