//Eric Wan
//A script I wrote to add this page to your favorites
//no idea why anyone would but whatever
if ((navigator.appName == "Microsoft Internet Explorer") && (parseInt(navigator.appVersion) >= 4)) {//who willingly uses IE anyways
  var url = "http://eric4wan.github.io";
  var title = "Eric Wan's Website!";

  document.getElementById("fav").innerHTML = '<a href="javascript:window.external.AddFavorite(url, title);" onMouseOver=" window.status='Add my site to your favorites!'; return true "onMouseOut=" window.status=' '; return true ">Add my site to your favorites!</a>');
}
else {//all about dat netscape
  var msg = "Bookmark this page!";
  if (navigator.appName == "Netscape") {
    msg += "  (ctrl-d)";
  }
  document.getElementById("fav").innerHTML = msg;
}
