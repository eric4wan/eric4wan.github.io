//Eric Wan
//A script I wrote to add this page to your favorites
//no idea why anyone would but whatever
(function() {
  ('#bookmarkme').click(function() {
    var url = "http://www.eric4wan.github.io";
    var title = "Eric Wan's Website";
    if ('sidebar' in window  && 'addPanel' in window.sidebar) {//mozilla
      window.sidebar.addPanel(url, title, "");
    } else if( /*@cc_on!@*/false) {//IE why would you willingly use IE 
     window.external.AddFavorite(url, title);
    } else {//safari or chrome
     alert('Press " + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Command/Cmd' : 'CTRL') + ' + D to boomark this page.');
    }
  });
});
