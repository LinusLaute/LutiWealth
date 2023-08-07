<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get form data
  $name = $_POST["name"];
  $email = $_POST["email"];
  $subject = $_POST["subject"];
  $message = $_POST["message"];

  // Compose the email message
  $to = "lautenschlagerlinus@gmail.com"; // Replace with your email address
  $headers = "From: $name <$email>" . "\r\n";
  $headers .= "Reply-To: $email" . "\r\n";
  $headers .= "Content-type: text/plain; charset=UTF-8" . "\r\n";

  // Send the email
  mail($to, $subject, $message, $headers);

  // Redirect to a thank you page
  header("Location: thank-you.html");
  exit;
}
?>
