<?php

header('Access-Control-Allow-Origin: http://localhost:4200');  //I have also tried the * wildcard and get the same response
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');

echo json_encode([
    ['name' => 'alice'],
    ['name' => 'jane']
]);