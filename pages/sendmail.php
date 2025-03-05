<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;
  require 'phpmailer/src/Exception.php';
  require 'phpmailer/src/PHPMailer.php';
  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('ru' , 'phpmailer/language/');
  $main->IsHTML(true);
  $mail->setFrom('info@fls.guru', 'Baga');
  $mail->addAddress('code@fls.guru');
  $mail->Subject = 'Hello there! It is a EcoSityHub user!';
  $body = '<h1> It is a my first letter </h1>';
  if(trim(!empty($_POST['name']))) {
    $body.= '<p><strong> Name: </strong>' .$_POST['name']. '</p>';
  }
  if(trim(!empty($_POST['email']))) {
    $body.= '<p><strong> E-mail: </strong>' .$_POST['email']. '</p>';
  }
  if(trim(!empty($_POST['message']))) {
    $body.= '<p><strong> Message: </strong>' .$_POST['message']. '</p>';
  }
  if(!empty($_FILES['image']['tmp_name'])) {
    $filePath = __DIR__ . "/../files/" . $_FILES['image']['name'];
    if (copy($_FILES['image']['tmp_name'], $filePath)) {
      $fileAttach = $filePath;
      $body.= '<p><strong> App photo </strong>';
      $mail->addAttachment($fileAttach);
    }
  }
  $mail->Body = $body;
  if(!$mail->send()) {
    $message = 'Error';
  } else {
    $message = 'Data is send!';
  }
  $response = ['message' => $message];
  header('Content-type: application/json');
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type, Authorization");
  if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
  }
  echo json_encode($response);
?>