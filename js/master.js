/**
 * Created by Dakota on 8/16/2015.
 */

var navigation =
    "<nav class='navbar navbar-default navbar-fixed-top'>" +
        "<div class='container'>" +
            "<div class='navbar-header'>" +
                "<button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>" +
                    "<span class='sr-only'>Toggle navigation</span>" +
                    "<span class='icon-bar'></span>" +
                    "<span class='icon-bar'></span>" +
                    "<span class='icon-bar'></span>" +
                "</button>" +
                "<a class='navbar-brand' href='#'>AC Salon and Spa</a>" +
            "</div>" +
            "<div id='navbar' class='navbar-collapse collapse'>" +
                "<ul class='nav navbar-nav navbar-right navigation'>" +
                    "<li><a href='index.html' class='text-center'>Home</a></li>" +
                    "<li><a href='index.html' class='text-center'>About</a></li>" +
                    "<li><a href='index.html' class='text-center'>Services</a></li>" +
                    "<li><a href='index.html' class='text-center'>Our Crew</a></li>" +
                    "<li><a href='index.html' class='text-center'>Media</a></li>" +
                    "<li><a href='index.html' class='text-center'>Contacts</a></li>" +
                "</ul>" +
            "</div>" +
        "</div>" +
    "</nav>";

var footer =
    "<footer id='footer' class='container-fluid'>" +
        "<div class='row'>" +
            "<div class='col-xs-12 center-block'>" +
                "<br>" +
                "<p class='text-center'>Produced by: <a href='http://jodakwebsolutions.com'>Jodak Web Solutions</a></p>" +
            "</div>" +
        "</div>" +
    "</footer>";

$('#footer').replaceWith(footer);
$('#navigation').replaceWith(navigation);

