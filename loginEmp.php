<?php
session_start();
include('conexao.php');

if(empty($_POST['cnpj']) || empty($_POST['senha'])){
  header('Location: /cadastrarEmp.html');
  exit();  
}

$cnpj = mysqli_real_escape_string($conexao, $_POST['cnpj']);
$senha = mysqli_real_escape_string($conexao, $_POST['senha']);

$query = "select nome from hackaccr.empresas where Cnpj='{$cnpj}' and Senha=md5('{$senha}')";

$result = mysqli_query($conexao, $query);

$row = mysqli_num_rows($result);

if($row == 1){
   $usuario_bd = mysqli_fetch_assoc($result);
   $_SESSION['nome'] = $usuario_bd['nome'];
   $_SESSION['cnpj'] = $cnpj;
   header('Location: /site.html');
   exit();
} else {
	header('Location: /cadastrar.html');
	exit;
}

?>