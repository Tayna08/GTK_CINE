<?php

    
    $nome = $_POST["nome"];
    $sinopse = $_POST["sinopse"];
    $elenco = $_POST["elenco"];
    $produtor = $_POST["produtor"];
    $diretor = $_POST["diretor"];
    $data = $_POST["data"];
    $duracao = $_POST["duracao"];
    $classificacao = $_POST["classificacao"];
    $genero = $_POST["genero"];


    $_con = mysqli_connect('127.0.0.1','root','','cinemapw');
    if($_con===FALSE) {
        echo "Não foi possível conectar ao Servidor de banco de dados ";
    } else {
        echo "Foi possível conectar ao Servidor de banco de dados ";
        // Exemplo: SQL query
        // $result = mysqli_query($_con, "use bd_escola;");
        $sql = "INSERT INTO filme VALUES (null, '$nome', '$sinopse', '$elenco', '$produtor', '$diretor', '$data', '$duracao', '$classificacao', '$genero');";
    if(mysqli_query($_con, $sql)){
        echo "Novo registro realizado com sucesso";
    } 
        mysqli_close($_con);
    }

?>