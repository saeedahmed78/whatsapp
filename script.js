let contactsObj = [
{
	name: "Talha Abbas",
	msg : "Hello! Saeed what happend reply asap",
	day : "yesterday",
	

},
{
	name: "Muhammad Junaid",
	msg : "Hello! Saeed what happend reply asap",
	day : "yesterday",
	
},
{
	name: "Shoaib Ahmed",
	msg : "Hello! Saeed what happend reply asap",
	day : "Today"
	
},
{
	name: "Sarah Ahmed",
	msg : "Hello! Saeed what happend reply asapo important dont be miss",
	day : "Today"
	
},
{
	name: "Khizer kazmi",
	msg : "Hello! Saeed what happend reply asap",
	day : "Today"
	
},
{
	name: "Yousuf Siddiqui",
	msg : "Hello! Saeed what happend reply asap",
	day : "yesterday"
	
},
{
	name: "Raees Ahmed",
	msg : "Hello! Saeed what happend reply asapy",
	day : "Today"
	
},
{
	name: "Sadqat Alam",
	msg : "Hello! Saeed what happend reply asap",
	day : "Today"
	
},
{
	name: "Zahid Javaid",
	msg : "Hello! Saeed what happend reply asap",
	day : "Today"
	
},






]


function initialize(){
	let contactList = document.querySelector("#contact-list");
	for(let i = 0; i<contactsObj.length; i++){
		contactList.innerHTML +=`<div class = "contacts">
		<p class = "profileImg"></p>
		<div class = "para">
		<p class = "namePro"><span>${contactsObj[i].name}</span> <span class = "span">${contactsObj[i].day}</span></p>
		<p class = "tickpro"><img src = "images/tick.png" class =  "tick" >${contactsObj[i].msg}</p>
		</div>
		</div>`;
	}
}

















