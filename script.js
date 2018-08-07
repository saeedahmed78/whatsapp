let contactsObj = [
{
	name: "Talha Abbas",
	msg : "Hello! Saeed what happend reply asap",
	day : "yesterday",
	img : `<i class = "fas fa-user-circle"></i>`,
	num : "03783966646",
	email : "talha@gmail.com"


	

},
{
	name: "Muhammad Junaid",
	msg : "Hello! Saeed what happend reply asap",
	day : "yesterday",
	img : `<i class = "fas fa-user-circle"></i>`,
	num : "03903966646",
	email : "junaid@gmail.com"

	
},
{
	name: "Shoaib Ahmed",
	msg : "Hello! Saeed what happend reply asap",
	day : "Today",
	img : `<i class = "fas fa-user-circle"></i>`,
	num : "03983966646",
	email : "shoaib@gmail.com"
	
},
{
	name: "Sarah Ahmed",
	msg : "Hello! Saeed what happend reply asapo important dont be miss",
	day : "Today",
	img : `<i class = "fas fa-user-circle"></i>`,
	num : "03873966646",
	email : "sarah@gmail.com"
	
},
{
	name: "Khizer kazmi",
	msg : "Hello! Saeed what happend reply asap",
	day : "Today",
	img : `<i class = "fas fa-user-circle"></i>`,
	num : "03673966646",
	email : "Khizer@gmail.com"

	
},
{
	name: "Yousuf Siddiqui",
	msg : "Hello! Saeed what happend reply asap",
	day : "yesterday",
	img : `<i class = "fas fa-user-circle"></i>`,
	num : "03433966646",
	email : "Yousuf@gmail.com"

	
},
{
	name: "Raees Ahmed",
	msg : "Hello! Saeed what happend reply asapy",
	day : "Today",
	img : `<i class = "fas fa-user-circle"></i>`,
	num : "03873966646",
	email : "raees@gmail.com"

	
},
{
	name: "Sadaqat Alam",
	msg : "Hello! Saeed what happend reply asap",
	day : "Today",
	img : `<i class = "fas fa-user-circle"></i>`,
	num : "03473922646",
	email : "sadaqat@gmail.com"

	
},
{
	name: "Zahid Javaid",
	msg : "Hello! Saeed what happend reply asap",
	day : "Today",
	img : `<i class = "fas fa-user-circle"></i>`,
	num : "0347394446",
	email : "zahid@gmail.com"

	
},






]


function initialize(){
	let contactList = document.querySelector("#contact-list");
	for(let i = 0; i<contactsObj.length; i++){
		contactList.innerHTML +=`<div class = "contacts" onclick = "change(${i})">
		<p class = "profileImg"></p>
		<div class = "para">
		<p class = "namePro"><span>${contactsObj[i].name}</span> <span class ="span-day">${contactsObj[i].day}</span></p>
		<p class = "tickpro"><img src = "images/tick.png" class =  "tick" >${contactsObj[i].msg}</p>
		</div>
		</div>`;
	}
}

function change(changes){

	document.querySelector(".before-click").style.display="none";
	document.querySelector(".one-img").innerHTML = contactsObj[changes].img;
	document.querySelector(".one-name").innerHTML = contactsObj[changes].name;
	document.querySelector(".one-num").innerHTML = "<i class = 'fas fa-phone'></i>"+contactsObj[changes].num;
	document.querySelector(".one-email").innerHTML = "<i class = 'fas fa-envelope'></i>"+contactsObj[changes].email;
	document.querySelector(".one-para").innerHTML = "So many books, so little time";
	
}

















