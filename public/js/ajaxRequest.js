// ====================
//     GENERAL VIEW
// ====================

$(document).ready(function(){
	let type = $('body').attr('id');
	let url;
	
	if (type == 'nutricionista') {
		url = "../php/tablaDietas.php";
	}
	if (type == 'entrenador') {
		url = "../php/trainingTable.php";
	}
	
	$.ajax({
		type:"post",
		url: url,
		data:{
			selected: 0
		},

		success:function(datos){
			$("#info").html(datos);
		}
	});
});

// ========================
//     FIRST TABLE INFO
// ========================

$(document).ready(function(){
	$('#value').on('change',function(id){
		let type = $('body').attr('id');
		let url;
	
		if (type == 'nutricionista') {
			url = "../php/tablaDietas.php";
		}
		if (type == 'entrenador') {
			url = "../php/trainingTable.php";
		}

		$.ajax({
			type:"post",
			url: url,
			data:{
				selected: $('#value').val()
			},

			success:function(datos){
				$("#info").html(datos);
			}
		});
	});
});

// ============
//     USERS
// ============

// Load the new users
function newUsers(){
	let type = $('body').attr('id');
	let url;
	
	if (type == 'nutricionista') {
		url = "../php/usersAmount.php";
	}
	if (type == 'entrenador') {
		url = "../php/newUsersTraining.php";
	}

	$.ajax({
		type:"post",
		url: url,

		success:function(datos){
			$("#newUsers").html(datos);
		}
	});
}

$(document).ready(function(){
	newUsers();
});

// Load users information
function loadUsers(){
	let type = $('body').attr('id');
	let url;
	
	if (type == 'nutricionista') {
		url = "../php/usersTable.php";
	}
	if (type == 'entrenador') {
		url = "../php/userTableTrainer.php";
	}

	$.ajax({
		type:"post",
		url: url,
		data:{
			pMin:'',
			pMax:'',
			aMin:'',
			aMax:''
		},

		success:function(datos){
			$("#users").html(datos);
		}
	});
}

// Show users by ranges
$(document).ready(function(){
	loadUsers();
	$('#showUsers').on('click',function(){
		let pesoMin = document.getElementById("pesoMin").value;
		let pesoMax = document.getElementById("pesoMax").value;
		let alturaMin = document.getElementById("alturaMin").value;
		let alturaMax = document.getElementById("alturaMax").value;

		let type = $('body').attr('id');
		let url;
	
		if (type == 'nutricionista') {
			url = "../php/usersTable.php";
		}
		if (type == 'entrenador') {
			url = "../php/userTableTrainer.php";
		}

		$.ajax({
			type:"post",
			url: url,
			data:{
				pMin:pesoMin,
				pMax:pesoMax,
				aMin:alturaMin,
				aMax:alturaMax
			},

			success:function(datos){
				$("#users").html(datos);
			}
		});	
	});
});

// Load the new emails
function newEmails(){
	let type = $('body').attr('id');
	let url;
	
	if (type == 'nutricionista') {
		url = "../php/loadEmails.php";
	}
	if (type == 'entrenador') {
		url = "../php/loadTrainingEmails.php";
	}

	$.ajax({
		type:"post",
		url: url,
		
		success:function(datos){
			$("#email").html(datos);
		}
	});
}

$(document).ready(function(){
	newEmails();
});

// Set the diet
$(document).ready(function(){
	var url = "../php/asignarDietas.php";
	
	$('#setDiet').on('click',function(){

		$.ajax({
		type:"post",
		url: url,
			data:{
				email: $('#email').val(),
				selected: $('#dietValue').val()
			}
		});

		alert("Dieta asignada");
		loadUsers();
		newEmails();
		newUsers();
	});

});

// ============
//   COMMENTS
// ============

function loadComments(){
	var ajaxRequest;

	if(window.XMLHttpRequest){
		ajaxRequest = new XMLHttpRequest();
	}else{
		ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}

	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200){
			document.getElementById('messages').innerHTML = ajaxRequest.responseText;
		}
	}
	ajaxRequest.open("GET","../php/comments.php",true);
	ajaxRequest.send();
}

$(document).ready(function(){
	loadComments();
});


// Send comments
function sendComment(){
	var message = $("#messa").val();
	var url = "../php/inserComments.php";

	$.ajax({
	 	type:"post",
	 	url: url,
	 	data:{
	 		message: message
	 	},
	});
	// Reset textarea
	$("#messa").val('');

	alert("Mensaje enviado");
	loadComments();
}

// Delete message
function delMessage(id){
	let messageId = id.id;
	
	var url = "../php/deleteMessage.php?val="+messageId;

	 $.ajax({
	  	type:"post",
	  	url: url,
	  	data:{
	  		id: messageId
	  	},
	 });
	 
	 alert("Mensaje eliminado");
	 loadComments();
}

// Modal message form

$(document).ready(function(){
	$('#modalEditButton').on('click',function(){
		// $('#modalTextArea').fadeToggle();
		alert('Bang!');
	});
});

// // Edit message
// function modify(id){
// 	let messageId = id.id;
	
// 	var url = "../php/editMessage.php?val="+messageId;

// 	 $.ajax({
// 	  	type:"post",
// 	  	url: url,
// 	  	data:{
// 	  		id: messageId
// 	  	},
// 	 });
// }