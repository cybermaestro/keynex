<?php

$name = $_POST['name'];
        $number = $_POST['number'];
        $mail = $_POST['mail'];
        $question = $_POST['task'];


        $conn = new mysqli("localhost", "Dmitrii", "Lbvf1299", "php-mysql-test");

        if(empty($_POST['name'])) exit("Поле не заполнено");
        if(empty($_POST['number'])) exit("Поле не заполнено");
        if(empty($_POST['mail'])) exit("Поле не заполнено");
        if(empty($_POST['task'])) exit("Поле не заполнено");

        if ($conn->connect_error){
            die("Connection failed: ".$conn->connect_error);
        }

        $sql = "INSERT INTO `consultation` (`name`, `number`, `email`, `question`) VALUES('$name','$number','$mail','$question')";

        if ($conn->query($sql) === TRUE) {
            echo "ADDED: ".$name.", ".$number.",".$mail.", ".$question;
        } else {
            echo "Error: ".$sql."<br>".$conn->error;
        }

        header("Location: index.html");

        $conn->close();

?>