<?php
$name = $_POST['username'];
$email = $_POST['email'];
$pass = $_POST['password'];



if (trim($name) == "")
    echo "Wrong name";
else if (strlen(trim($name)) <= 1)
    echo "Wrong name";
else if (trim($email) == "" || trim($pass) == "")
    echo "Enter all details";
else if (strpos($email, "@") == "") {
    echo "Wrong email";
} else {
    header('Location: /index.html');
    exit;
}
