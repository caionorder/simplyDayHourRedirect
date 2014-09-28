# SimplyDayHourRedirect JS

Script to simply verify day and hour to redirect on JS

## Install

* Include script within HTML `<script src="js/simplyDayHourRedirect.js" type="text/javascript"></script>`



## How to use

```markup
<script>
	var day  = 0 // 0 = Sunday, 1 = Monday...
	var hour = 11 // 01,02,03...
	var url  = 'http://www.google.com.br'; // your url to redirect
	simplyDayHourRedirect(day,hour,url);
</script>
```
