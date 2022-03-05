const serverUrl = "https://g64twekkv66i.usemoralis.com:2053/server";
const appId = "J6eU3JYOOAkGro0NwlsA1upVp4rMCE0Yk2dkUrYt";
Moralis.start({ serverUrl, appId });
console.log("Hello World")

let homepage ="http://127.0.0.1:5500/index.html";
if ( Moralis.User.current() == null && window.location.href != homepage)
 {
 document.querySelector('body').style.diasplay='none';
 window.location.href="index.html";
}

login = async () =>{ 
      await Moralis.Web3.authenticate().then(async function (user)
      {
          console.log("logged in user:", user);
          user.set("name",document.getElementById('user_username').value);
          user.set("email",document.getElementById('user_email').value);
          await user.save();
          window.location.href="Daashboard.html";
    })
  }
  logout = async () => {
    await Moralis.User.logout ();
    window.location.href="index.html";
    console.log("logged out");
  }
  if(document.getElementById("btn-login") != null)
  {
    document.getElementById("btn-login").onclick = login;
  }
  if(document.getElementById("btn-logout") != null)
  {
    document.getElementById("btn-logout").onclick = logout;
  }
