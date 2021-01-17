<?php
session_start();
include('conexao.php');

$pesquisa1 = mysqli_real_escape_string($conexao, $_POST['CargoM']);
$pesquisa2 = mysqli_real_escape_string($conexao, $_POST['LocalM']);
$sql = "select count(*) as total from `hackaccr`.mentorias where Cargo='{$pesquisa}' and Localizaçao='{$pesquisa2}'";
$result = mysqli_query($conexao, $sql);
$row = mysqli_fetch_assoc($result);
if($row['total'] => 1){
	
	$sql = "select * as total from `hackaccr`.mentorias where Cargo='{$pesquisa}' and Localizaçao='{$pesquisa2}'";
	$result = mysqli_query($conexao, $sql);
	$Dados = mysqli_fetch_assoc($result);
	$Nome = $Dados['Nome'];
	$NVagas = $Dados['NumeroDeVagas'];
	$Desc = $Dados['Descrição'];
    $Data = $Dados['DataLimite'];

	header('Location: /pesquisa.html');
	exit;
}

header('Location: /site.html');
exit;

?>