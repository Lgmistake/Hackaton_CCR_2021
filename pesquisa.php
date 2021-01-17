<?php
include('conexao.php');

$pesquisa = mysqli_real_escape_string($conexao, $_POST['pesquisa']);
$sql = "select count(*) as total from `hackaccr`.mentorias where Nome='{$pesquisa}'";
$result = mysqli_query($conexao, $sql);
$row = mysqli_fetch_assoc($result);

if($row['total'] == 1) {
    $query = "select Nome from `hackaccr`.mentorias where Nome='{$pesquisa}'";
    $result = mysqli_query($conexao, $query);
    $site = mysqli_fetch_assoc($result);
    header('Location:'.$site['Nome'].'.html');
	exit;
}else{
	$sql = "select count(*) as total from `hackaccr`.vagas where Nome='{$pesquisa}'";
    $result = mysqli_query($conexao, $sql);
    $row = mysqli_fetch_assoc($result);

    if($row['total'] == 1) {
        $query = "select Nome from `hackaccr`.vagas where Nome='{$pesquisa}'";
        $result = mysqli_query($conexao, $query);
        $site = mysqli_fetch_assoc($result);
        header('Location:'.$site['Nome'].'.html');
		exit;
	}else{
		$sql = "select count(*) as total from `hackaccr`.vagas where Nome='{$pesquisa}'";
        $result = mysqli_query($conexao, $sql);
        $row = mysqli_fetch_assoc($result);

        if($row['total'] == 1) {
            $query = "select Nome from `hackaccr`.vagas where Nome='{$pesquisa}'";
            $result = mysqli_query($conexao, $query);
            $site = mysqli_fetch_assoc($result);
            header('Location:'.$site['Nome'].'.html');
			exit;
		}else{
            header('Location: /site.html');
			exit;
		}
	}
}
?>

