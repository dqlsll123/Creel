/** COUNTER FUNCTIONS **/
var a = 0;
function increase(){
	var textBox = document.getElementById("count1");
	a++;
	textBox.value = a;
}

function decrease(){
	var textBox = document.getElementById("count1");
	if(parseInt(textBox.value) > 0){
		navigator.notification.confirm(
			'Are you sure?',  // message
			function(buttonIndex){
				if(buttonIndex == 1){
					a--;
					if(a <= 0){
						a = 0;
					}
				}
				textBox.value = a;
			},         // callback
			'Confirm',            // title
			['OK','Cancel']                  // buttonName
		);
	}
}

var b = 0;
function increase2(){
	var textBox = document.getElementById("count2");
	b++;
	textBox.value = b;
}

function decrease2(){
	var textBox = document.getElementById("count2");

	if(parseInt(textBox.value) > 0){
		navigator.notification.confirm(
			'Are you sure?',  // message
			function(buttonIndex){
				if(buttonIndex == 1){
					b--;
					if(b <= 0){
						b = 0;
					}
				}
				textBox.value = b;
			},         // callback
			'Confirm',            // title
			['OK','Cancel']                  // buttonName
		);
	}
}

var c = 0;
function increase3(){
	var textBox = document.getElementById("count3");
	c++;
	textBox.value = c;
}

function decrease3(){
	var textBox = document.getElementById("count3");

	if(parseInt(textBox.value) > 0){
		navigator.notification.confirm(
			'Are you sure?',  // message
			function(buttonIndex){
				if(buttonIndex == 1){
					c--;
					if(c <= 0){
						c = 0;
					}
				}
				textBox.value = c;
			},         // callback
			'Confirm',            // title
			['OK','Cancel']                  // buttonName
		);
	}
	
}

/** COUNTER LABELS **/
var creel_type =   window.localStorage.getItem("creelType");
var access_stream = ["ADD ANGLER PARTY", "ADD NON - ANGLER PARTY", "ADD NON - CONTACT PARTY"];
var roving = ["ADD BOAT","ADD BANK","ADD PI BOAT"];
var labels;
var font_size;

if (creel_type === "access" || creel_type === "stream"){
	labels = access_stream;
	font_size = "16px";
} else {
	labels = roving;
	font_size = "20px";
}

for (var i=0; i<labels.length; i++){
	$("#btn-count"+(i+1)).html(labels[i]);
	$("#btn-count"+(i+1)).css('font-size',font_size);
}

/** TIMERS **/
function nextSurveyCounter(line, surveyDate){
	if(surveyDate == null){
		surveyDate = "2017/01/01";
	}
	
	var nextDate = new Date(surveyDate);
	var now = new Date();
	var diff = dateDiff(now, nextDate);
	if(dateFormat(now,"yyyy/mm/dd") == dateFormat(nextDate,"yyyy/mm/dd")){
		diff = 0;
	} 
	if((line == "start" || line == "stop") && diff >=1){
		$("#countdown").countdown(surveyDate,function(event){
			$(this).text(line + ": " + event.strftime('%D day(s)'));
		});
	} else if ((line == "start" || line == "stop") && diff < 1){
		$("#countdown").countdown(surveyDate,function(event){
			$(this).text(line + ": " + event.strftime('%H:%M:%S'));
		});
	}
}

function endSurveyCounter(){
	var project = window.localStorage.getItem("currentProject");
	var locArray = getCreelLocation(project);
	var projSchedule = getProjTime(project);
	var stopTime = projSchedule[1];
	if(stopTime == null){
		stopTime = "2017/01/01";
	}
	
	$("#countdown").countdown(stopTime,function(event){
		$(this).text(event.strftime('%H:%M:%S'));
	});
}

function dateDiff(firstDate, secondDate){
	var oneDay = 24*60*60*1000;
	var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
	return diffDays;
}