$(document).ready(function(){
	$('#logout').on('click',function(){
 		$('.dropdown-content').fadeToggle();

 		$('#accoSettings').on('click',function(){
 			$('#dropConfirm').fadeToggle();
 		});

 		$('#continue').on('click',function(){
 			$('#dropConfirm').fadeOut(1200);
 		});

 		$('#settings').on('click',function(){
 			$('.modal-settings').fadeToggle();
 			$('#close').on('click',function(){
 				$('.modal-settings').fadeOut();
 			});
 		});
 	});
 });