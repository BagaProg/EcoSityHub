<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="css/styleL.css">
</head>

<body>
    <img src="images/leaf.png" class="leafone" alt="leaf">
    <img src="images/leaf1.png" class="leaftwo" alt="leaf">
    <div class="container">
        <h1 class="center">LOGIN</h1>
        <form action="login_check.php" method="POST">
            <input type="text" class="inp" name="username" placeholder="Your username..."> <br>
            <input type="email" class="inp" name="email" placeholder="Your email..."> <br>
            <input type="password" class="inp" name="password" placeholder="Your password..."> <br>
            <input type="submit" class="btn" value="Login">
        </form>
    </div>
</body>

</html>