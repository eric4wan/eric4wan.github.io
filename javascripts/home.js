//Eric Wan
//A little bit of js to set your homepage to my page for whatever possible reason you could have


if (document.all) {//IE
  document.getElementById("home").innerHTML = '<a href="javascript:history.go(0);" onClick="this.style.behavior=\'url(#default#homepage)\'; this.setHomePage(\'http://www.eric4wan.github.io\');"><font size="5" color=6699FF face=arial><B>Make My Web Page Your Homepage</B></font></a><!-- now why would you do that -->';
}
else if (document.getElementById) {//Netscape 6
  document.getElementById("home").innerHTML = '<a href="http://eric4wan.github.io">Drag this link onto your Home button to make this your homepage.</a><!-- why would you do this lol -->';
}
else if (document.layers) {//Netscape 4 bc 5 was SCRAPPED pow
  document.getElementById("home").innerHTML = '<b>Make this site your homepage:</b><br>- Go to <b>Preferences</b> in the <B>Edit</B> Menu.<br>- Choose <b>Navigator</b> from the list on the left.<br>- Click on the <b>"Use Current Page"</b> button.';
}
else {//literally anything else but like why would you have anything else
  document.getElementById("home").innerHTML = '<b>Make this site your homepage:</b><br>- Go to <b>Preferences</b> in the <B>Edit</B> Menu.<br>- Choose <b>Navigator</b> from the list on the left.<br>- Click on the <b>"Use Current Page"</b> button.';
}

