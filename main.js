// $("#accordion").on("show.bs.collapse", function() {
// 	$("#accordion .in").collapse("hide");
// });
$(".navbar-nav>li>a").on("click", function() {
	$(".navbar-collapse").collapse("hide");
});

// The function actually applying the offset
function offsetAnchor() {
	if (location.hash.length !== 0) {
		window.scrollTo(window.scrollX, window.scrollY - 100);
	}
}

// Captures click events of all <a> elements with href starting with #
$(document).on("click", 'a[href^="#"]', function(event) {
	// Click events are captured before hashchanges. Timeout
	// causes offsetAnchor to be called after the page jump.
	window.setTimeout(function() {
		offsetAnchor();
	}, 0);
});

// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0);

// --- form 1 field required ---

$("form").on("submit", function() {
	if ($("#c-email").val() === "" && $("#phone").val() === "") {
		alert(
			" Por favor insira seu email ou telefone \n Please enter either your phone or email \n メールアドレスか電話番号のどっちらかを入力してください"
		);
		return false; /* cancel submit */
	}

	/* Passed! */
	/* Forms in snippets won't submit so ... */
	/* alert("Mensagem enviada com sucesso!");
});

// formspree

var message = "";

$("#sendMessage").on("click", function() {
	message = $("#contactform").serialize();
	$.ajax({
		url: "//formspree.io/izanagi05@gmail.com",
		method: "POST",
		data: { message: message },
		dataType: "json"
	});
	alert("Thanks for the email, we'll be in touch promptly.");
	return false;
});
