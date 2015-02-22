//Eric Wan
//A script I wrote for uh, no reason?
var txt = "<p>Here's some of your info: </p>";
var platform = navigator.platform;
if (platform.match(/Linux/i)) {
  platform += " (nice!)";// because your above average CS major uses linux
}
txt += "<p>You are currently running " + platform + ".</p>;

document.getElementById("nav").innerHTML = txt;
