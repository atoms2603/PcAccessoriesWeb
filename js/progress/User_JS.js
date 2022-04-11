var a;
const url = 'https://pcaccessorieswebapi.azurewebsites.net/api/User/';

async function checkLogin(){
    var usname=document.getElementById('user_username').value;
    var uspwd = document.getElementById('user_password').value;
    
    const response = await fetch(url+'login',{
        method: 'POST',
        body:JSON.stringify({
            username:usname,
            password:uspwd,
            rememberMe: true
        }),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    const myJson = await response.json();
    console.log(response);
    console.log(myJson);
}

async function checkRegister(){
    var usname=document.getElementById('user_username').value;
    var uspwd = document.getElementById('user_password').value;
    var user_re_password = document.getElementById('user_re_password').value;
    var user_name = document.getElementById('user_name').value;
    var user_phone = document.getElementById('user_phone').value;
    var user_address = document.getElementById('user_address').value;
    var user_email = document.getElementById('user_email').value;

    const response = await fetch(url+'register',{
        method: 'POST',
        body:JSON.stringify({
            username:usname,
            password:uspwd,
            confirmPassword:user_re_password,
            displayName:user_name,
            address:user_phone,
            phoneNumber:user_address,
            email: user_email
        }),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    const myJson = await response.json();
    console.log(response);
    console.log(myJson);
}