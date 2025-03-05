<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->isHTML(true);
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'bakenb09@gmail.com'; 
$mail->Password = 'your-app-password';
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;
$mail->setFrom('bakenb09@gmail.com', 'BakenB09'); 
$mail->addAddress('bakenb09@gmail.com');
$mail->Subject = 'Hello! New message from EcoSityHub!';
$body = '<h1>New message from the website</h1>';
if (!empty($_POST['name'])) {
    $body .= '<p><strong>Name:</strong> ' . $_POST['name'] . '</p>';
}
if (!empty($_POST['email'])) {
    $body .= '<p><strong>Email:</strong> ' . $_POST['email'] . '</p>';
}
if (!empty($_POST['message'])) {
    $body .= '<p><strong>Message:</strong> ' . $_POST['message'] . '</p>';
}
if (!empty($_FILES['image']['tmp_name'])) {
    $filePath = __DIR__ . "/../files/" . $_FILES['image']['name'];
    if (copy($_FILES['image']['tmp_name'], $filePath)) {
        $mail->addAttachment($filePath);
    }
}
$mail->Body = $body;
if (!$mail->send()) {
    echo json_encode(['message' => 'Error: ' . $mail->ErrorInfo]);
} else {
    echo json_encode(['message' => 'Email sent successfully!']);
}
?>
