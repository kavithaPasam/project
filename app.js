function talk(){

var know = {
"Who are you" : "Hello, Codewith_random here ",
"How are you" : "Good :)",
"What can i do for you" : "Please Give us A Follow & Like.",
"Your followers" : "I have my family of 5000 members, i don't have follower ,have supportive Famiy ",
"ok" : "Thank You So Much",

"Bye" : "Okay! Will meet soon..",
"schemes":"related to education, Economic, health care",
"education":"schemes are Eklavya Model Residential Schools, National Fellowship,Scholarship for Higher Education"
"economic":"Schemes are Tribal Sub Plan (TSP),Pradhan Mantri Van Dhan Yojana, Institutional Support For Development And Marketing Of Tribal Products",
"health care":"Schemes are Tribal Sub Plan (TSP), Pradhan Mantri Van Dhan Yojana, Institutional Support For Development And Marketing Of Tribal Products"
	
};


var user = document.getElementById('userBox').value;
document.getElementById('chatLog').innerHTML = user + "<br>";
if (user in know) {
document.getElementById('chatLog').innerHTML = know[user] + "<br>";
	
} 
else{
document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
}




}

function ans(){





}
