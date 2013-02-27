$(document).ready(function(){
	$("#content").load("main.html");
	
	$("#mainBut").click(function(){
	  $("#content").fadeOut().hide().load("main.html").fadeIn(600);
	});
	$("#photosBut").click(function(){
	  $("#content").fadeOut().hide().load("photos/index.html").fadeIn(600);
	});
	$("#aboutBut").click(function(){
	  $("#content").fadeOut().hide().load("about.html").fadeIn(600);
	});
	$("#contactBut").click(function(){
	  $("#content").fadeOut().hide().load("contact.html").fadeIn(600);
	});
	$("#newsBut").click(function(){
	  $("#content").fadeOut().hide().load("news/index.html").fadeIn(600);
	});
	$("#officersBut").click(function(){
	  $("#content").fadeOut().hide().load("officer/index.html").fadeIn(600);
	});
});

