<?php

    
    $filme = $_POST["filme"];
    $diretor = $_POST["diretor"];
    $cine = $_POST["cine"];
    $personagem = $_POST["personagem"];
    $ator = $_POST["ator"];
    $tempo = $_POST["tempo"];
    $genero = $_POST["genero"];


    $_con = mysqli_connect('127.0.0.1','root','','cinemapw');
    if($_con===FALSE) {
        echo "Não foi possível conectar ao Servidor de banco de dados ";
    } else {
        echo "Foi possível conectar ao Servidor de banco de dados ";
        // Exemplo: SQL query
        // $result = mysqli_query($_con, "use bd_escola;");
        $sql = "INSERT INTO sugestao VALUES (null, '$filme', '$diretor', '$cine', '$personagem', '$ator', '$tempo', '$genero');";
    if(mysqli_query($_con, $sql)){
        echo "Novo registro realizado com sucesso";
    } 
        mysqli_close($_con);
    }

?>