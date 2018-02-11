function wlCommonInit(){
	/*
	 * Use of WL.Client.connect() API before any connectivity to a MobileFirst Server is required. 
	 * This API should be called only once, before any other WL.Client methods that communicate with the MobileFirst Server.
	 * Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 *    
	 *    WL.Client.connect({
	 *    		onSuccess: onConnectSuccess,
	 *    		onFailure: onConnectFailure
	 *    });
	 *     
	 */
	
	// Common initialization code goes here
	
}
function registerFunction(){
	var uid,pwd,nm,ag,city;
	uid = $('#ruserid').val();
	pwd = $('#rpassword').val();
	nm = $('#rname').val();
	ag = $('#rage').val();
	city = $('#rcity').val();
		if(email_val(uid)){
			if(fn_val(nm)){
				if(ag>=18 && ag<=60){
					alert("login Successfull");
					window.location.assign("#displayPage");
					$('#1').val("Welcome " +uid);
					$('#2').val(nm);
					$('#3').val(ag);
					$('#4').val(city);
				}
				else{
					alert("Age must be between 18 and 60");
					ag.focus;
					return false;
				}
			}}
	
}

function fn_val(fname)
{
	var letter=/^[A-Za-z]+$/;	//regular expression
	if(fname.match(letter) && fname.length<=10)
	{
		return true;
	}
	else{
		alert("First name must be alphabet");
		fname.focus;
		return false;
		}
}



function email_val(emailid)
{
	var letter=/^(\w+[\.\-]?\w+)*@(\w+[\.\-]?\w+)*\.(\w{2,3})+$/;
	if(emailid.match(letter))
		{
		return true;
		}
	else
		{
		alert("Enter valid email id");
		emailid.focus();
		return false;
		}
}