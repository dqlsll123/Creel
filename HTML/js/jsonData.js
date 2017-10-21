/** PROJECT LOCATION **/
var projectList = ["Wappapello", "Lake Smith Creel","Turkey Creek Creel","Reitz Reservoir Creel","St. Louis Creel"];
var wapLoc = ["Chaonia","Rockwood Landing","People's Creek","Redman Creek","Sundowner","Greenville","Holiday Landing"];
var smithLoc = ["Access 2","Access 3","Access 4"];
var turkeyLoc = ["Mile 2","Mile 3","Mile 4","Mile 5"];
var reitzLoc = ["Reitz Reservoir"];
var stlLoc = ["Bus Stop 1","Bus Stop 2","Bus Stop 3","Bus Stop 4"];

function getCreelLocation(project){
	var loc;
	if(project == projectList[0]){
		loc = wapLoc;
	} else if(project == projectList[1]){
		loc = smithLoc;
	} else if (project == projectList[2]){
		loc = turkeyLoc;
	} else if (project == projectList[3]){
		loc = reitzLoc;
	} else {
		loc = stlLoc;
	}
	return loc[0];
}

/** PROJECT SCHEDULES **/
var wapSschedule = ["2016/09/01 08:00:00","2016/09/22 14:00:00"];
var access2Schedule = ["2016/09/01 08:00:00","2016/09/17 14:00:00"];
var mile2Schedule = ["2016/09/15 09:00:00","2016/09/20 15:00:00"];
var reitzSchedule = ["2016/10/01 10:00:00","2016/10/01 16:00:00"];
var bus1schedule = ["2016/12/15 12:00:00","2017/01/01 18:00:00"];

function getProjTime(project){
	var time;
	if(project == projectList[0]){
		time = wapSschedule;
	} else if(project == projectList[1]){
		time = access2Schedule;
	} else if (project == projectList[2]){
		time = mile2Schedule;
	} else if (project == projectList[3]){
		time = reitzSchedule;
	} else {
		time = bus1schedule;
	}
	return time;
}

function setProjTime(project){
	var schedule = getProjTime(project);
	var startTime = schedule[0];
	var stopTime = schedule[1];	
}