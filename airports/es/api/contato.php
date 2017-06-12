<?php

$datetime_format = 'd/m/Y H:i:s';
$allowedDomain = 'http://www.ipanmasces.com,http://www.ipamasces.com.br,http://ipanmasces.com,http://ipanmasces.com.br';

function retornarHeaders()
{
    if (function_exists('getallheaders')) {
        return getallheaders();
    }

    foreach ($_SERVER as $key => $value) {
        if (substr($key, 0, 5) == "HTTP_") {
            $key = str_replace(" ", "-", ucwords(strtolower(str_replace("_", " ", substr($key, 5)))));
            $out[$key] = $value;
        } else {
            $out[$key] = $value;
        }
    }
    return $out;
}

$request_header = retornarHeaders();
$origin = $request_header["Origin"];

if (strpos($allowedDomain, $origin) === false) {
    return;
}

header('Access-Control-Allow-Origin: ' . $origin);

header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

header('Cache-Control: no-cache, must-revalidate');

header('Content-type: application/json; charset=utf-8');

date_default_timezone_set('America/Sao_Paulo');

$to = "n4works@gmail.com, tiagor87@gmail.com";
$subject = "Contato através do site";

// Campos da mensagem
// %de%
// %nome%
// %assunto%
// %mensagem%
// %data%

$request_body = file_get_contents('php://input');

$data = json_decode($request_body);

if (isset($data->de) && isset($data->assunto) && isset($data->mensagem) && isset($data->nome)) {
    $from = trim($data->de);
    $nome = trim($data->nome);
    $assunto = trim($data->assunto);
    $mensagem = htmlspecialchars($data->mensagem);

    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

    $headers .= 'From: contato@n4works.com' . "\r\n";
    $headers .= 'Reply-To: ' . $from . "\r\n";
    $headers .= 'X-Mailer: PHP/' . phpversion();

    $message = file_get_contents("email_template.html");

    $message = str_replace("%de%", $from, $message);
    $message = str_replace("%nome%", $nome, $message);
    $message = str_replace("%assunto%", $assunto, $message);
    $message = str_replace("%mensagem%", $mensagem, $message);
    $message = str_replace("%data%", date($datetime_format), $message);

    if (mail($to, $subject . " ($assunto)", $message, $headers)) {
        echo '{"msg":"Email enviado com sucesso."}';
    } else {
        echo '{"msg":"Email não enviado com as configurações: To: ' . $to . '; Assunto: ' . $assunto . '; Headers: ' . $headers . '"}';
    }
} else {
    echo '{"msg":"Email não enviado com as configurações: To: ' . $to . '; Assunto: ' . $assunto . '; Headers: ' . $headers . '"}';
}