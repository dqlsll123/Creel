// SET NAVBAR
$(document).ready(function(){
    var practice = window.localStorage.getItem("practice");
    var project = window.localStorage.getItem("currentProject");
    var user = window.localStorage.getItem("currentUser");

	//var county = window.localStorage.getItem("county");
	//var tod = window.localStorage.getItem("currTOD");

    // TITLE OF APP
	var title = "<span class='app_title'>MDC CREEL APP</span>"
	//"<a href='index.html' class='app_title'>MDC Creel Survey</a>";
    $('.navbar').find('.mdc_title').find('h4').html(title);

	if(practice === "practice"){
	    $('.navbar').find('.current_project').find('h4').text("PRACTICE");
        $('.navbar').find('.current_clerk').find('h4').text("PRACTICE");
        $('.navbar').find('.current_date').find('h4').text("PRACTICE");
	} else{
	    $('.navbar').find('.current_project').find('h4').text(project);
        $('.navbar').find('.current_clerk').find('h4').text(user);
        $('.navbar').find('.current_date').find('h4').text(getDate());
	}
});

// Return format mm/dd/yyyy
function getDate(){
	var today = new Date();
	var year = today.getFullYear();
	var month = parseInt(today.getMonth()) + 1;
	if(month.toString().length == 1){
	    month = "0" + month;
	}
	var date = today.getDate();
	if(date.toString().length == 1){
	    date = "0" + date;
	}
	var fulldate = month + "/" + date + "/" + year; 
	return fulldate;
}