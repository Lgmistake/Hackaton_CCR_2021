<?php
session_start();
include('conexao.php');

if(!$_SESSION['cnpj']){ 
header('Location: /site.html'); 
exit(); 
}

$pesquisa = mysqli_real_escape_string($conexao, $_POST['NomeV']);
$sql = "select count(*) as total from `hackaccr`.vagas where Nome='{$pesquisa}' and Cnpj='{$_SESSION['cnpj']}'";
$result = mysqli_query($conexao, $sql);
$row = mysqli_fetch_assoc($result);
if($row['total'] == 1){
	$nome = mysqli_real_escape_string($conexao, trim($_POST['NomeV']));
	$descriçao = mysqli_real_escape_string($conexao, trim($_POST['DescriçaoV']));
	$nVagas = mysqli_real_escape_string($conexao, trim($_POST['NuDeVagasV']));
	$local = mysqli_real_escape_string($conexao, trim($_POST['LocalV']));
	$data = mysqli_real_escape_string($conexao, trim($_POST['DataV']));
	$cargo = mysqli_real_escape_string($conexao, trim($_POST['CargoV']));

	$sql ="UPDATE`hackaccr`.vagas SET Descriçao = '{$descriçao}', NumeroDeVagas = '{$nVagas}', Localizaçao = '{$local}', DataLimite = '{$data}', Cargo = '{$cargo}' WHERE Cnpj = '{$_SESSION['cnpj']}' AND Nome = '{$nome}'";

	if($conexao->query($sql) === TRUE){
		header('Location: /site.html');
	}else{
		header('Location: /index.html');
	}	
	$conexao->close();
	exit;
}

$nome = mysqli_real_escape_string($conexao, trim($_POST['NomeV']));
$descriçao = mysqli_real_escape_string($conexao, trim($_POST['DescriçaoV']));
$nVagas = mysqli_real_escape_string($conexao, trim($_POST['NuDeVagasV']));
$local = mysqli_real_escape_string($conexao, trim($_POST['LocalV']));
$data = mysqli_real_escape_string($conexao, trim($_POST['DataV']));

$sql ="INSERT INTO `hackaccr`.vagas (Nome, Descriçao, NumeroDeVagas, Cnpj, Localizaçao, DataLimite, Cargo) VALUES ('{$nome}', '{$descriçao}', '{$nVagas}', '{$_SESSION['cnpj']}', '{$local}', '{$data}', '{$cargo}')";

if($conexao->query($sql) === TRUE){
header('Location: /site.html');
}else{
header('Location: /index.html');
}
$conexao->close();
exit;

?>