<?php

// if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
//     require('cors.php');
// }

require('cors.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'));
    // var_dump($data);
    if ($data->title !== '' && $data->content !== '') {
        writeJokeToFile($data->title, $data->content);
    } else {
        returnError();
    }
}

function writeJokeToFile($title, $content) {
    $fp = fopen('jokes-store.txt', 'a');
    fwrite($fp, json_encode([
        'title' => $title,
        'content' => $content,
        'id' => mt_rand()
    ]) . "\n");
    fclose($fp);
}

function returnError() {
    header("HTTP/1.0 400 Bad Request");
    echo json_encode([
        'message' => 'Both title and content are required.'
    ]);
}