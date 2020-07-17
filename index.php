<?php
include 'classes/MyIterator.class.php';
?>

<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Test page</title>
    </head>
    <body>
        <?php
        $iter = new MyIteratator(1,12);
        
        foreach ($iter as $key=>$value){
            echo "The doubled value of $key = $value<br>";
        }
        ?>
        
        <script src = "js/testJavascript.js" ></script>
    </body>
</html>
