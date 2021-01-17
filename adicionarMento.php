<?php
session_start();
include('conexao.php');

if(!$_SESSION['cpf']){ 
header('Location: /site.html'); 
exit(); 
}

$pesquisa = mysqli_real_escape_string($conexao, $_POST['NomeM']);
$sql = "select count(*) as total from `hackaccr`.mentorias where Nome='{$pesquisa}' and Cpf='{$_SESSION['cpf']}'";
$result = mysqli_query($conexao, $sql);
$row = mysqli_fetch_assoc($result);
if($row['total'] == 1){
	$nome = mysqli_real_escape_string($conexao, trim($_POST['NomeM']));
	$descriçao = mysqli_real_escape_string($conexao, trim($_POST['DescriçaoM']));
	$nVagas = mysqli_real_escape_string($conexao, trim($_POST['NuDeVagasM']));
	$local = mysqli_real_escape_string($conexao, trim($_POST['LocalM']));
	$data = mysqli_real_escape_string($conexao, trim($_POST['DataM']));
    $cargo = mysqli_real_escape_string($conexao, trim($_POST['CargoM']));

	$sql ="UPDATE`hackaccr`.mentorias SET Descriçao = '{$descriçao}', NumeroDeVagas = '{$nVagas}', Localizaçao = '{$local}', DataLimite = '{$data}', Cargo = '{$cargo}' WHERE Cpf = '{$_SESSION['cpf']}' AND Nome = '{$nome}'";

	if($conexao->query($sql) === TRUE){
		header('Location: /site.html');
	}else{
		header('Location: /index.html');
	}	
	$conexao->close();
	exit;
}


$nome = mysqli_real_escape_string($conexao, trim($_POST['NomeM']));
$descriçao = mysqli_real_escape_string($conexao, trim($_POST['DescriçaoM']));
$nVagas = mysqli_real_escape_string($conexao, trim($_POST['NuDeVagasM']));
$local = mysqli_real_escape_string($conexao, trim($_POST['LocalM']));
$data = mysqli_real_escape_string($conexao, trim($_POST['DataM']));

$sql ="INSERT INTO `hackaccr`.mentorias (Nome, Descriçao, NumeroDeVagas, Cpf, Localizaçao, DataLimite,Cargo) VALUES ('{$nome}', '{$descriçao}', '{$nVagas}', '{$_SESSION['cpf']}', '{$local}', '{$data}', '{$cargo}')";

if($conexao->query($sql) === TRUE){
header('Location: /site.html');
}else{
header('Location: /index.html');
}
$conexao->close();
exit;

?>