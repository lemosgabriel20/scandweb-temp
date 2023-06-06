<?php 

namespace Api;

use PDO;

class Database {

  private static $DB;
  public static string $password = 'password';
  public static string $user = 'root';
  public static string $port = '3308';
  public static string $dbname = 'storepage';
  public static string $host = '127.0.0.1';

  public static function init() {
    $password = static::$password;
    $user = static::$user;
    $port = static::$port;
    $dbname = static::$dbname;
    $host = static::$host;

    try {
      
      $DB = new PDO("mysql:host=$host;dbname=$dbname;port=$port;", $user, $password);
      static::$DB = $DB;

    } catch(\PDOException $e) {
        throw new \PDOException($e->getMessage(), $e->getCode());
    }
  }
  public static function DB() {
    return static::$DB;
  }
}
?>