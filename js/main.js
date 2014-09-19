$(document).ready(function() {
	function moveTo(i){
		var speed = $("#js-skill-slider").slider( "option", "animate");
		$(".ui-slider-handle").animate({left: scale[i]}, speed);
		setTimeout (function(){
			$("#js-skill-slider").slider( "option", "value", scale[i]);
		}, speed+100);
	};
	
	var scale = [1,149,374,756];
	
	
	//
	var user = {
		"fio" : "Абубекаров Рустам Фатихович",
		"born-year" : 1986,
		"living-place" : "Москва",
		"skype" : "abubekarov",
		"mail" : "roostiq@gmail.com",
		"html-no" : 1,
		"check-bem": 0,
		"check-jquery" : 1,
		"check-grunt" : 0,
		"check-haml" : 0,
		"check-sass" : 0,
		"check-less" : 0,
		"check-cs" : 0,
		"check-jade" : 0,
		"check-stylus" : 0,
		"check-angular": 1,
		"check-android": 0,
		"check-ios": 0,
		"check-windows" : 0,
		"check-mail": 0,
		"check-adaptive" : 1,
		"check-dropbox" : 1,
		"check-gmail" :1,
		"check-github" : 1,
		"js-skill" : 2,
		"date": "19.09.2014"
	};
	
	var i=0;
	var mouse=true;
	
	$( "#js-skill-slider" ).slider({
		animate: 300,
		step:1,
        min: 1,
        max: 760,
        value: scale[0],
		start: function(event, ui) {
			if (event.which=="39" || event.which=="38"){
				event.preventDefault();
				mouse=false;
				if (i<3){i = $.inArray(ui.value, scale)+1;}
				moveTo(i);
			}
			if (event.which=="37" || event.which=="40"){
				event.preventDefault();
				mouse=false;
				if (i>0) {i = $.inArray(ui.value, scale)-1;}
				moveTo(i);
			}
		},
		
		stop: function( event, ui) {
			if (mouse){
				if (ui.value<=69) {	i=0; }
				else if (ui.value>=70 && ui.value<=260) { i=1; }
				else if (ui.value>=261 && ui.value<=565) { i=2;	}
				else if (ui.value>=566){ i=3; };
			};
			moveTo(i);
			mouse=true;
		}
	
	});

	// Обработка кликов по уровнями влядения JS
	$("#js-skill-level td p").on("click", function() {
		i = $(this).data("skill");
		moveTo(i);
	});

	//Расставляем значения из объекта user по форме
		$.each( user, function(propName, val){
			if (val==0 || val==1){ 
				$('input[id='+ propName+']').prop('checked',val);
			}
			else {
				$('input[id='+ propName+']').prop('value',val);
			}
		});
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > 580){  
			moveTo(2);
		}
	});

 });
