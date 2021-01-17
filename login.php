<?php
session_start();
include('conexao.php');

if(empty($_POST['cpf']) || empty($_POST['senha'])){
  header('Location: /index.html');
  exit();  
}

$cpf = mysqli_real_escape_string($conexao, $_POST['cpf']);
$senha = mysqli_real_escape_string($conexao, $_POST['senha']);

$query = "select nome from hackaccr.usuarios where Cpf='{$cpf}' and Senha=md5('{$senha}')";

$result = mysqli_query($conexao, $query);

$row = mysqli_num_rows($result);

if($row == 1){
   $usuario_bd = mysqli_fetch_assoc($result);
   $_SESSION['nome'] = $usuario_bd['nome'];
   $_SESSION['cpf'] = $cpf;
   header('Location: /site.html');
   exit();
} else {
	header('Location: /index.html');
	exit;
}

?>