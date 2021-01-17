<?php
define('HOST', '127.0.0.1');
define('USUARIO', 'rootHacka');
define('SENHA', 'Hackaccr2021');
define('DB', 'hackaccr');

$conexao = mysqli_connect(HOST, USUARIO, SENHA, DB) or die ('Não foi possivel conectar');

?>