let people = document.getElementById('people');
let people_less = document.getElementById('people_less');
let people_more = document.getElementById('people_more');

let people_index = 4;

people_less.addEventListener('click', ()=>
{
	people_index =people_index- 1;

	if (people_index <= 0)
	 {
		people_index = 1;
		people.value = people_index + 'people';
	} 
	else 
	{
		people.value = people_index + 'people';
	}
})

people_more.addEventListener('click', ()=>
{
	people_index += 1;

	if (people_index >= 4)
	 {
		people_index = 4;
		people.value = people_index + 'people';
	} 
	else 
	{
		people.value = people_index + 'people';
	}
})

let checkin_data = document.getElementById('checkin_data');
let checkin = document.getElementById('checkin');
let checkout_data = document.getElementById('checkout_data');
let checkiout= document.getElementById('checkout');

checkin.addEventListener('change', () => 
{
	let checkin_value = checkin.value;
	//console.log(checkin_value);

	let dates = new Date(checkin_value);
	let dates2 = new Date();
	const week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
	let day = week[dates.getDay()]; 
	//console.log(day)

	let date = checkin_value.slice(8,10);
	//console.log(date);

	let months = ['Jan','Feb','Mar','apr','may','jun','jul', 'aug', 'sep', 'oct', 'nov', 'dec']

	let month = months[dates.getMonth()];

	if(dates < date2)
	{
		console.log('No Date');
	}
	else
	{
		checkin_data.innerText = day + ', ' + date + ' '+month;  
	}
})

checkout.addEventListener('change', () => 
{
	let checkout _value = checkout.value;
	//console.log(checkin_value);

	let dates = new Date(checkout_value);
	let dates2 = new Date();
	const week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
	let day = week[dates.getDay()]; 
	//console.log(day)

	let date = checkout_value.slice(8,10);
	//console.log(date);

	let months = ['Jan','Feb','Mar','apr','may','jun','jul', 'aug', 'sep', 'oct', 'nov', 'dec']

	let month = months[dates.getMonth()];

	if(dates < date2)
	{
		console.log('No Date');
	}
	else
	{
		checkout_data.innerText = day + ', ' + date + ' '+month;  
	}
})

let checkin_more = document.getElementById('checkin_more');
let checkin_less = document.getElementById('checkin_less');


checkin_more.addEventListener('click',()=>
{
	const week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
	var month = ['Jan','Feb','Mar','apr','may','jun','jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

	let today = new Date()
	let tomorrow = new Date(today);

	tomorrow.setDate(tomorrow.getDate()+1);

	let day =  week[tomorrow.getDay()];
	let date = Date.getDate();
	let month = month[today.getMonth()];

})