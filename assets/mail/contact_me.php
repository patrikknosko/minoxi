<?php
// Check for empty fields
if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(500);
  exit();
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$message = strip_tags(htmlspecialchars($_POST['message']));

// Create the email and send the message
$to = "patrik@testpk.online";
$subject = "Kontaktoval Vás: $name";
$body = "Prijali ste novú správu zo stránky minoxi.sk.<BR/>"."Tu sú detaily:<BR/>Meno: $name<BR/>Email: <a href=\"mailto:$email\">$email</a><BR/>Text správy:\n$message";
$header = "From: noreply@yourdomain.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$header .= "Reply-To: $email";
$header = "Content-Type: text/html; charset=UTF-8";	

if(!mail($to, $subject, $body, $header))
  http_response_code(500);
?>


