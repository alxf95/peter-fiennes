/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


$("#arrow, #about-me").on("click", function(event){
  $('html, body').animate({
    scrollTop: $("#about-anchor").offset().top
  }, 1000);
});
$(window).scroll(function() {
if ($(document).scrollTop() >= document.getElementById('oaaat-anchor').offsetTop - 2 && $(document).scrollTop() < document.getElementById('media-anchor').offsetTop - 2){
  $('#oaaat-link').addClass('navbar-link-underline');
} else {
  $('#oaaat-link').removeClass('navbar-link-underline');
}
});
$(window).scroll(function() {
if ($(document).scrollTop() >= document.getElementById('media-anchor').offsetTop - 2 && $(document).scrollTop() < document.getElementById('about-anchor').offsetTop - 2){
  $('#media-link').addClass('navbar-link-underline');
} else {
  $('#media-link').removeClass('navbar-link-underline');
}
});
$(window).scroll(function() {
if ($(document).scrollTop() >= document.getElementById('about-anchor').offsetTop - 2 && $(document).scrollTop() < document.getElementById('contact-underline-anchor').offsetTop){
  $('#about-link').addClass('navbar-link-underline');
} else {
  $('#about-link').removeClass('navbar-link-underline');
}
});
$(window).scroll(function() {
if ($(document).scrollTop() >= document.getElementById('contact-underline-anchor').offsetTop){
  $('#contact-link').addClass('navbar-link-underline');
} else {
  $('#contact-link').removeClass('navbar-link-underline');
}
});
$(".dropdown").on("click", function(){
  $(".dropdown-toggle").dropdown("toggle");
});
$("#oaaat-link, #oaaat-link-dropdown").on("click", function(event){
  $('html, body').animate({
    scrollTop: $("#oaaat-anchor").offset().top
  }, 1000);
});
$("#media-link, #media-link-dropdown").on("click", function(event){
  $('html, body').animate({
    scrollTop: $("#media-anchor").offset().top
  }, 1000);
});
$("#about-link, #about-link-dropdown").on("click", function(event){
  $('html, body').animate({
    scrollTop: $("#about-anchor").offset().top
  }, 1000);
});
$("#contact-link, #contact-link-dropdown").on("click", function(event){
  $('html, body').animate({
    scrollTop: $("#contact-anchor").offset().top
  }, 1000);
});
$("#navbar-home").on("click", function(event){
  $('html, body').animate({
    scrollTop: $("#banner-anchor").offset().top
  }, 1000);
});
$(window).scroll(function() {
  if ($(document).scrollTop() >= $(window).height() - 64) {
    $('.navbar').addClass('fill');
  } else {
    $('.navbar').removeClass('fill');
  }
});
