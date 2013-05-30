<?php
if(isset($_POST['email'])) {
	
	// CHANGE THE TWO LINES BELOW
	$email_to = "kirsten.blazic@gmail.com";
	
	$email_subject = "Newark Abbey | General Inquiry";
	
	function died($error) {
		// your error code can go here
		echo "We're sorry, but there's errors found with the form you submitted.<br /><br />";
		echo $error."<br /><br />";
		echo "Please go back and fix these errors.<br /><br />";
		die();
	}
	
// validation expected data exists
	if(!isset($_POST['first_name']) ||
		!isset($_POST['last_name']) ||
		!isset($_POST['age']) ||
		!isset($_POST['parish']) ||
		!isset($_POST['email']) ||
		!isset($_POST['phone_number']) ||
		!isset($_POST['comments'])) {
		died('We are sorry, but there appears to be a problem with the form you submitted.');		
	}
	
	$first_name = $_POST['first_name']; // required
	$last_name = $_POST['last_name']; // required
	$last_name = $_POST['age']; // required
	$last_name = $_POST['parish']; // required
	$email_from = $_POST['email']; // required
	$last_name = $_POST['phone_number']; // required
	$telephone = $_POST['comments']; // not required

$error_message = "";
	$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_from)) {
  	$error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
	$string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$first_name)) {
  	$error_message .= 'The First Name you entered does not appear to be valid.<br />';
  }
  if(!preg_match($string_exp,$last_name)) {
  	$error_message .= 'The Last Name you entered does not appear to be valid.<br />';
  }
  if(strlen($comments) < 2) {
  	$error_message .= 'The Comments you entered do not appear to be valid.<br />';
  }
  if(strlen($error_message) > 0) {
  	died($error_message);
  }
	$email_message = "Form details below.\n\n";
	
	function clean_string($string) {
	  $bad = array("content-type","bcc:","to:","cc:","href");
	  return str_replace($bad,"",$string);
	}

	$email_message .= "First Name: ".clean_string($first_name)."\n";
	$email_message .= "Last Name: ".clean_string($last_name)."\n";
	$email_message .= "Age: ".clean_string($age)."\n";
	$email_message .= "Parish: ".clean_string($parish)."\n";
	$email_message .= "Email: ".clean_string($email)."\n";
	$email_message .= "Telephone: ".clean_string($phone_number)."\n";
	$email_message .= "Comments: ".clean_string($comments)."\n";
	
		
	
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>



<!-- place your own success html below -->

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN"
   "http://www.w3.org/TR/html4/strict.dtd">

<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>On the Bridge | The Movie</title>

    <!-- Framework CSS -->
    <link rel="stylesheet" href="blueprint/screenbp.css" type="text/css" media="screen, projection">
    <link rel="stylesheet" href="blueprint/print.css" type="text/css" media="print">
    <link href='http://fonts.googleapis.com/css?family=Nobile:regular,italic,bold,bolditalic' rel='stylesheet' 		type='text/css'>
    
    <!-- Navigation CSS/JS -->
	<link href="P7_CSSEXPRESS/p7exp/p7exp.css" rel="stylesheet" type="text/css">
	<script type="text/javascript" src="P7_CSSEXPRESS/p7exp/p7exp.js"></script>
    
	
    <!--[if lt IE 8]><link rel="stylesheet" href="../blueprint/ie.css" type="text/css" media="screen, 				projection"><![endif]-->
    <style type="text/css" media="screen">
      p, table, hr, .box { margin-bottom:25px; }
      .box p { margin-bottom:10px; }
    </style>
    
    <!--[if lte IE 7]>
		<style>
			#menuwrapper, #p7menubar ul a {height: 1%;}
			a:active {width: auto;}
		</style>
	<![endif]-->    
    
  </head>
  
  
<body onLoad="P7_ExpMenu()">


	<!-- Background -->
    <div class="container showcontact">
    
    
    
    <!-- Navigation -->
   	<div class="prepend-2 padtop-50 span-5">
   		<a href=""index.html"" title="Home"><img src="assets/home_button.png" alt="home_button" /></a>
   	</div>
    
    
    
    
    
    <div class="prepend-8 padtop-75">
    
    	<div id="menuwrapper">
			<ul id="p7menubar">
		
				<li><a class="trigger" href="#">About</a>
					<ul>
						<li><a href="about.html">Backstory</a></li>
						<li><a href="protag.html">Protagonists</a></li>
						<li><a href="director.html">Director</a></li>
						<li><a href="production.html">Production Crew</a></li>
						<li><a href="makingof.html">Behind the Scenes</a></li>
						<li><a href="statement.html">Director's Statement</a></li>
						<li><a href="music.html">Movie Soundtrack</a></li>
						<li><a href="soundtrack.html">Music Scene</a></li>
					</ul>
				</li>
		
				<li><a href="trailers.html">Trailers</a></li>

				<li><a href="contact.html">Screenings</a></li>
				
				<li><a href="action.html">Take Action</a></li>
		
				<li><a class="trigger" href="#">News</a>
					<ul>
						<li><a href="events.html">Events</a></li>
						<li><a href="press.html">Press</a></li>
					</ul>
				</li>
				
				
		
				<li id="nav_con"><a href="contact.html">Contact</a></li>
		
			</ul>
	
			<br class="clearit">

		</div>
 	</div> 


	
	
	
    <!-- Left Column -->
    
	<div class="prepend-3 padtop-100 span-8 pad-50">
	
		<h3 class="yellow">Request a Screening</h3>
		<p class="white">Thank you for your interest!<br />
		We will contact you shortly.</p>

	</div>


     <!-- Left Column -->
    
    <div class="prepend-4 span-8 padtop-100 white pad-150">
    	<p>Olivier Morel<br />
		e: omorel39@yahoo.com
		</p>

     
     	<p class="padtop-75">Pawel Rozenberg<br />
		Hassiba Belhadj<br />
		C&eacute;line Nusse<br />
		<a href="http://www.zadigproductions.fr/">Zadig Productions</a><br />
		70, rue Amelot<br />
		75011 Paris - France<br />
		e: info@zadigproductions.com
		</p>

     </div>
	
    
    
    
	<!-- Footer -->
  	<div class="prepend-1 span-23 darkgray copyright">
    	<p>Photos & texts &copy; <a class="gray" href="director.html">Olivier Morel</a>, all rights reserved | Website design by Kirsten Blazic and Olivier Morel | A <a class="gray" href="http://www.zadigproductions.fr/en/">Zadig Productions</a>/<a class="gray" href="http://www.artefrance.fr">Arte-France</a> film, 2011 | <a class="gray" href="acknowledge.html">Acknowledgements</a>
    	</p>
   	 </div>
    
    
     </div>
     
  </body>
  
</html>
    
        

<?php
}
die();
?>


