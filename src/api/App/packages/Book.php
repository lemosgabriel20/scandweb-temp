<?php
namespace App\Products;
  
use App\Products;

class Book extends Products {
  public function __construct() {
    echo 'Book';
  }
}
?>