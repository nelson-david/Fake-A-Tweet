$(document).ready(function(){
	$("#tweet__color").on("change", function(){
		const color = $("#tweet__color").val();
		$(".tweet__card").css("background-color", `${color}`);
	});

	$("#tweet__text__color").on("change", function(){
		const color = $("#tweet__text__color").val();
		$("#user__name").css("color", `${color}`);
		$("#user__handle").css("color", `${color}`);
		$("#tweet__data__text").css("color", `${color}`);
		$(".user__at__tag").css("color", `${color}`);
	});

	$("#tweet__footertext__color").on("change", function(){
		const color = $("#tweet__footertext__color").val();
		$(".tweet__activity").css("color", `${color}`);
		$(".time__stamps span").css("color", `${color}`);
	});

	$("#set__default").on("click", function(){
		$("#tweet__color").val("#16202A");
		$(".tweet__card").css("background-color", "#16202A");
	});

	$("#set__text__default").on("click", function(){
		$("#tweet__text__color").val("#ffffff");
		const color = $("#tweet__text__color").val();
		$("#user__name").css("color", `${color}`);
		$("#user__handle").css("color", `lightgrey`);
		$("#tweet__data__text").css("color", `${color}`);
		$(".user__at__tag").css("color", `lightgrey`);
	});

	$("#set__footertext__default").on("click", function(){
		const color = $("#tweet__footertext__color").val('darkgrey');
		$(".tweet__activity").css("color", `${color}`);
		$(".time__stamps span").css("color", `${color}`);
	});

	$("#remove__image").click(function(){
		const data = $("#remove__image").val();
		const text_data = $("#remove__text").val();

		if (data == "false" && text_data == "true"){
			$("#remove__image").prop("checked", false);
		}else{
			$("#remove__image").val("true");
			$(".tweet__img").attr("hidden", "true");
			$("#tweet__post__image__data__div").attr("hidden", "true")
		}

		if (data == "true"){
			$("#remove__image").val("false");
			$(".tweet__img").removeAttr("hidden");
			$("#tweet__post__image__data__div").removeAttr("hidden");
		}

	});

	$("#remove__text").click(function(){
		const data = $("#remove__text").val();
		const img_data = $("#remove__image").val();

		if (data == "false" && img_data == "true"){
			$("#remove__text").prop("checked", false);
		}else{
			$("#remove__text").val("true");
			$("#tweet__data__text").attr("hidden", "true");
			$("#tweet__data__div").attr("hidden", "true");
		}

		if (data == "true"){
			$("#remove__text").val("false");
			$("#tweet__data__text").removeAttr("hidden");
			$("#tweet__data__div").removeAttr("hidden");
		}

	});

	$("#tweet__custom__date").on("keyup", function(){
		const date = $("#tweet__custom__date").val();

		$("#default__date__time")[0].innerText = date.toString();

	});

	var tweet__data = $("#tweet__data").val();
	var user__name__data = $("#user__name__data").val();
	var user__handle__data = $("#user__handle__data").val();
	var tweet__device__data = $("#tweet__device__data").val();

	$("#tweet__data__text")[0].innerText = tweet__data;
	$("#user__name")[0].innerText = user__name__data;
	$("#user__handle")[0].innerText = user__handle__data;
	$("#tweet__device")[0].innerText = `Twitter for ${tweet__device__data}`;

	$("#tweet__data").on("keyup", function(){
		$("#tweet__data__text")[0].innerText = $("#tweet__data").val();
	});

	$("#tweet__device__data").on("keyup", function(){
		$("#tweet__device")[0].innerText = `Twitter for ${$("#tweet__device__data").val()}`;
	});

	$("#user__name__data").on("keyup", function(){
		$("#user__name")[0].innerText = $("#user__name__data").val();
	});

	$("#user__handle__data").on("keyup", function(){
		$("#user__handle")[0].innerText = $("#user__handle__data").val();
	});

	$("#tweet__user__image__data").on("change", function(){
	    var file = $("#tweet__user__image__data").get(0).files[0];
	    if (file) {
	      var reader = new FileReader();
	      reader.onload = function() {
	        $(".profile__img").css("background-image", `url('${reader.result}')`)
	      }
	      reader.readAsDataURL(file);
	    }
	});

	$("#tweet__post__image__data").on("change", function(){
	    var file = $("#tweet__post__image__data").get(0).files[0];
	    if (file) {
	      var reader = new FileReader();
	      reader.onload = function() {
	        $(".tweet__img").attr("src", reader.result)
	      }
	      reader.readAsDataURL(file);
	    }
	});


	var today = new Date();
	var date__time = today.getHours() + ":" + ("0" + (today.getMinutes() +1)).slice(-2) + " . " + ("0" + (today.getDate())).slice(-2) + "." + ("0" + (today.getMonth() +1)).slice(-2) + "." + today.getFullYear().toString().slice(2, 4)

	$("#default__date__time")[0].innerText = date__time.toString();

	$("#proccess__image__btn").on("click", function(e){
		e.preventDefault();
		$("#spinner__auth").removeAttr("hidden");

		window.scrollTo(0,0);

		html2canvas(document.getElementById("tweet__card"), {backgroundColor: null, x: 15}).then(canvas => {
			//$("#append__canvas").append(canvas);
			//$("#append__canvas canvas").attr("class", "pain__css")
		    $("#download__png").attr("href", canvas.toDataURL());
		    $("#download__png").removeAttr("hidden");
		    $("#spinner__auth").attr("hidden", "true");


			// setTimeout(function () {
			// 	$("#download__png").attr("hidden", "true");
			// }, 20000);
			// return false;

		});

	});

});