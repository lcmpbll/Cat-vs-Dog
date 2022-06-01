$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");
		$("ul#dog").prepend("<li>Arf!</li>");
		});




  $("button#woof").click(function() {
    $("ul#cat").prepend("<li>Mew!</li>");
		$("ul#dog").prepend("<li>Woof!</li>");
  });

  $("button#stop").click(function() {
    $("ul#cat").prepend("<li>Hisss!</li>");
		$("ul#dog").prepend("<li>Grrrr!</li>");
  });
	
	 
	
});