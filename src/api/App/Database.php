<?php 

namespace Api;

use PDO;

class Database {

  private string $password = 'password';
  private string $user = 'root';
  private string $port = '3308';
  private string $dbname = 'storepage';
  private string $host = '127.0.0.1';

  public function init() {
    $password = $this->password;
    $user = $this->user;
    $port = $this->port;
    $dbname = $this->dbname;
    $host = $this->host;
    try {
      $DB = new PDO("mysql:host=$host;dbname=$dbname;port=$port;", $user, $password);
      return $DB;
    } catch(\PDOException $e) {
      throw new \PDOException($e->getMessage(), $e->getCode());
    }
  }
}
?>