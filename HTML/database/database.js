document.addEventListener("deviceready", openCreelDatabase, false);
var first = window.localStorage.getItem("firstRun");

function navAlert(message){
    navigator.notification.alert(
        message,    // message
        '',         // callback
        'Alert',    // title
        'OK'        // buttonName
    );
}

var myDB;
function openCreelDatabase(){
    myDB = window.sqlitePlugin.openDatabase({name: 'creelDb', location: 'default'}, function(db) {
            db.transaction(function(tx) {
                //navAlert('Database opened');
            }, function(err) {
                navAlert('Open database ERROR: ' + JSON.stringify(err));
            });
    	});
    selectTableProjects();
    //createTableProjects();
}

function createTableProjects() {
    myDB.transaction(function(transaction) {
        transaction.executeSql('CREATE TABLE IF NOT EXISTS tblProjects (' +
                                    'projectUID text primary key, projectName text, ' +
                                    'projectType text, projectLocation text, projectDescription text, ' +
                                    'projectStartDate text, projectStopDate text, optional1 text, ' +
                                    'optional2 text, optional3 text, optional4 text, optional5 text,' +
                                    'optional6 text)', [],
        function(tx, result) {
            navAlert("Table created successfully");
        },
        function(error) {
            navAlert("Error occurred while creating the table:" + JSON.stringify(error));
        });
    });
    insertTableProjects();
}

function insertTableProjects(){
    myDB.transaction(function(transaction) {
        var executeQuery = "INSERT INTO tblProjects (projectUID, projectName, projectType," +
                            "projectLocation, projectDescription, projectStartDate," +
                            "projectStopDate,optional1,optional2, optional3,optional4, optional5, optional6) " +
                            "VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";

        transaction.executeSql(executeQuery, ["337021E5-0C40-4EF5-AA00-25BBAB629F75","Lake Smith Creel", "Access", "Lake Smith Access 2,3,4", "Lake Smith", "2016/07/01","2017/06/30","Are you in favor of 12\" limit? (Y/N)", "How often do you visit? (#)", "Do you eat the fish you catch? (Y/N)"]
        , function(tx, result) {
            navAlert('Inserted');
        },
        function(error){
            //navAlert('Error occurred: ' + error);
        });
    });
    selectTableProjects();
}

function selectTableProjects(){
    myDB.transaction(function(transaction) {
        transaction.executeSql('SELECT * FROM tblProjects', [], function (tx, results) {
            var arr = [];
            var len = results.rows.length;
            for (i = 0; i < len; i++){
                var projectName = results.rows.item(i).projectName;
            }
        }, function(error){
           navAlert('Unable to retrieve data');
       });
    });
}

function closeDB() {
    db.close(function () {
        console.log("DB closed!");
    }, function (error) {
        console.log("Error closing DB:" + error.message);
    });
}