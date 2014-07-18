/* global MozActivity, alert, console, Notification */
"use strict";
(function () {
    // Notifications
    var addNotification = document.querySelector("#add-notification");
    if (addNotification) {
        addNotification.onclick = function () {
            if ("Notification" in window) {
                // Firefox OS 1.1 and higher
                if (Notification.permission !== "denied") {
                    Notification.requestPermission(function (permission) {
                        if(!("permission" in Notification)) {
                            Notification.permission = permission;
                        }
                    });
                }

                if (Notification.permission === "granted") {
                    new Notification("See this", {
                        body : "This is a notification"
                    });
                }
            }
            else {
                // Firefox OS 1.0
                var notify = navigator.mozNotification.createNotification(
                    "See this",
                    "This is a notification"
                );
                notify.show();
            }
        };
    }

    var time=document.querySelector("#gettime");
    if(time){
        time.onclick=function(){
            var currentdate = new Date();
var datetime =  currentdate.getHours() + ":" 
+ currentdate.getMinutes() + ":" + currentdate.getSeconds();
document.getElementById("bv").innerHTML=datetime;

        };
    }



  
})();
