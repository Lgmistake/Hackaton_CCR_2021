<?php
session_start();
include('conexao.php');

$nome = mysqli_real_escape_string($conexao, trim($_POST['nome']));
$email = mysqli_real_escape_string($conexao, trim($_POST['email']));
$senha = mysqli_real_escape_string($conexao, trim(md5($_POST['senha'])));
$cpf = mysqli_real_escape_string($conexao, trim($_POST['cpf']));
$descriçao = mysqli_real_escape_string($conexao, trim($_POST['descriçao']));
$numero = mysqli_real_escape_string($conexao, trim($_POST['numero']));

$sql = "select count(*) as total from `hackaccr`.usuarios where Cpf='{$cpf}'";
$result = mysqli_query($conexao, $sql);
$row = mysqli_fetch_assoc($result);

if($row['total'] == 1) {
	header('Location: index.html');
	exit;
}

$sql ="INSERT INTO `hackaccr`.usuarios (Nome, Email, Senha, Cpf, Descrição, Numero) VALUES ('{$nome}', '{$email}', '{$senha}', '{$cpf}', '{$descriçao}', '{$numero}')";

if($conexao->query($sql) === TRUE){
header('Location: /login.html');
}else{
header('Location: /index.html');
}
$conexao->close();
exit;

?>