function simplyDayHourRedirect(d,h,u){

	var date = new Date;

	var dayOfWeek = date.getDay();
	var hour = date.getHours(); 

	if(dayOfWeek == d && hour == h){

		window.location.replace(u);

	}


}