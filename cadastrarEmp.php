<?php
session_start();
include('conexao.php');

$nome = mysqli_real_escape_string($conexao, trim($_POST['nome']));
$email = mysqli_real_escape_string($conexao, trim($_POST['email']));
$senha = mysqli_real_escape_string($conexao, trim(md5($_POST['senha'])));
$cnpj = mysqli_real_escape_string($conexao, trim($_POST['cnpj']));
$descriçao = mysqli_real_escape_string($conexao, trim($_POST['descriçao']));

$sql = "select count(*) as total from `hackaccr`.empresas where Cnpj='{$cnpj}'";
$result = mysqli_query($conexao, $sql);
$row = mysqli_fetch_assoc($result);

if($row['total'] == 1) {
	header('Location: cadastrar.html');
	exit;
}

$sql ="INSERT INTO `hackaccr`.empresas (Nome, Email, Senha, Cnpj, Descriçao) VALUES ('{$nome}', '{$email}', '{$senha}', '{$cnpj}', '{$descriçao}')";

if($conexao->query($sql) === TRUE){
header('Location: /login.html');
}else{
header('Location: /index.html');
}
$conexao->close();
exit;

?>