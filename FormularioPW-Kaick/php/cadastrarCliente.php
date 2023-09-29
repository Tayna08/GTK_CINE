<?php

    
    $nome = $_POST["nome"];
    $cpf = $_POST["cpf"];
    $email = $_POST["email"];
    $cidade = $_POST["cidade"];
    $estado = $_POST["estado"];
    $contato= $_POST["numero"];
    $nascimento = $_POST["nascimento"];
    $rg = $_POST["rg"];

    $_con = mysqli_connect('127.0.0.1','root','','cinemapw');
    if($_con===FALSE) {
        echo "Não foi possível conectar ao Servidor de banco de dados ";
    } else {
        echo "Foi possível conectar ao Servidor de banco de dados ";
        // Exemplo: SQL query
        // $result = mysqli_query($_con, "use bd_escola;");
        $sql = "INSERT INTO cliente VALUES (null, '$nome', '$cpf', '$email', '$cidade', '$estado', '$contato', '$nascimento', '$rg');";
    if(mysqli_query($_con, $sql)){
        echo "Novo registro realizado com sucesso";
    } 
        mysqli_close($_con);
    }

?>
