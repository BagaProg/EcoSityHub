<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/../pages/PHPMailer/Exception.php';
require __DIR__ . '/../pages/PHPMailer/PHPMailer.php';

header('Content-Type: application/json');
error_reporting(E_ALL);
ini_set('display_errors', 1);

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', __DIR__ . '/../pages/PHPMailer/language/');
$mail->isHTML(true);

$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'bakenb09@gmail.com';
$mail->Password = 'your-app-password'; // Убедись, что это пароль приложения
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;
$mail->setFrom('bakenb09@gmail.com', 'BakenB09');
$mail->addAddress('bakenb09@gmail.com');
$mail->Subject = 'Hello! New message from EcoSityHub!';

$body = '<h1>New message from the website</h1>';
if (!empty($_POST['name'])) $body .= '<p><strong>Name:</strong> ' . htmlspecialchars($_POST['name']) . '</p>';
if (!empty($_POST['email'])) $body .= '<p><strong>Email:</strong> ' . htmlspecialchars($_POST['email']) . '</p>';
if (!empty($_POST['message'])) $body .= '<p><strong>Message:</strong> ' . htmlspecialchars($_POST['message']) . '</p>';

if (!empty($_FILES['image']['tmp_name'])) {
    $uploadDir = __DIR__ . '/../files/';
    if (!is_dir($uploadDir)) mkdir($uploadDir, 0777, true);

    $filePath = $uploadDir . basename($_FILES['image']['name']);
    if (move_uploaded_file($_FILES['image']['tmp_name'], $filePath)) {
        $mail->addAttachment($filePath);
    } else {
        echo json_encode(['message' => 'Ошибка загрузки файла']);
        exit;
    }
}

$mail->Body = $body;

try {
    if ($mail->send()) {
        echo json_encode(['message' => 'Email sent successfully!']);
    } else {
        throw new Exception($mail->ErrorInfo);
    }
} catch (Exception $e) {
    echo json_encode(['message' => 'Ошибка: ' . $e->getMessage()]);
}
?>
