//Eric Wan
//A script I wrote to add this page to your favorites
//no idea why anyone would but whatever
var url
if ('sidebar' in window  && 'addPanel' in window.sidebar) {//mozilla
  window.sidebar.addPanel(location.href, document.title, "");
} else if( /*@cc_on!@*/false) {//IE why would you willingly use IE 
  window.external.AddFavorite(location.href, document.title);
} else {//safari or chrome
  alert('Press " + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Command/Cmd' : 'CTRL') + ' + D to boomark this page.');
}
