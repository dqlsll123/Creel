var functionName = "";

/******** BACK ********/
function back(target){
    navigator.notification.confirm(
        'Are you sure?',  // message
        function(buttonIndex){
            onBack(buttonIndex, target);
        },     // callback
        'Confirm',        // title
        ['OK','Cancel']   // buttonName
    );
}

function onBack(buttonIndex, target){
    if(buttonIndex == 1){
        if(target !== undefined){
            window.location = target;
        } else {
            window.history.back();
        }
    }
}

/******** CANCEL ********/
function cancel(target){
    navigator.notification.confirm(
        'Are you sure?',  // message
        function(buttonIndex){
            onCancel(buttonIndex, target);
        },         // callback
        'Confirm',            // title
        ['OK','Cancel']                  // buttonName
    );
}

function onCancel(buttonIndex, target){
    if(buttonIndex == 1){
        if(target !== undefined){
			if(target == "homepage.html"){
				window.localStorage.removeItem("practice");
			}
			window.location = target;
        } else {
            window.location = "homepage.html";
        }
    }
}

/******** REFUSE ********/
function refused(target){
    navigator.notification.confirm(
        'Are you sure you wish to refuse?',  // message
        function(buttonIndex){
            onRefuse(buttonIndex, target);
        },         // callback
        'Confirm',            // title
        ['OK','Cancel']                  // buttonName
    );
}

function onRefuse(buttonIndex, target){
    if(buttonIndex == 1){
        if(target !== undefined){
            window.location = target;
        }
    }
}

/******** FINISH ********/
function finish(target){
    navigator.notification.confirm(
        'Are you sure?',  // message
        function(buttonIndex){
            onFinish(buttonIndex, target);
        },         // callback
        'Confirm',            // title
        ['OK','Cancel']                  // buttonName
    );
}

function onFinish(buttonIndex, target){
    if(buttonIndex == 1){
        if(target !== undefined){
            window.location = target;
        }
    }
}


/******** LOGOUT ********/

function logout(){
    navigator.notification.confirm(
        'Are you sure you wish to logout?',  // message
        changeLogin,      // callback
        'Confirm',        // title
        ['OK','Cancel']   // buttonName
    );
}

function changeLogin(buttonIndex){
    if(buttonIndex == 1){
        window.location = "index.html";
    }
}