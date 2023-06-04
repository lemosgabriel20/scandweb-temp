<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Header: *');

require_once(__DIR__ . '/App/Database.php');
require_once(__DIR__ . '/App/AccessAPI.php');

$access = new App\Api\AccessAPI(method: $_SERVER["REQUEST_METHOD"], body: $_REQUEST);
?>