
    // function report() { document.getElementsByTagName('div')[0].innerHTML = 'screen.width: '+screen.width+'<br> screen.height: '+screen.height+'<br> window.innerWidth: '+window.innerWidth+'<br> window.innerHeight: '+window.innerHeight+'<br> window.outerWidth: '+window.outerWidth+'<br> window.outerHeight: '+window.outerHeight+'<br> document.documentElement.clientWidth: '+document.documentElement.clientWidth+'<br> document.documentElement.clientHeight: '+document.documentElement.clientHeight+'<br> window.devicePixelRatio: '+window.devicePixelRatio; }
    // window.addEventListener('load', report, false);
    // window.addEventListener('resize', report, false);
    // window.addEventListener('orientationchange', report, false);
    // window.addEventListener('deviceorientation', report, false);
    // window.addEventListener('MozOrientation', report, false);






	// TYPO3 function for decrypting the mail address
	// decrypt helper function
		function decryptCharcode(n,start,end,offset) {
			n = n + offset;
			if (offset > 0 && n > end) {
				n = start + (n - end - 1);
			} else if (offset < 0 && n < start) {
				n = end - (start - n - 1);
			}
			return String.fromCharCode(n);
		}
			// decrypt string
		function decryptString(enc,offset) {
			var dec = "";
			var len = enc.length;
			for(var i=0; i < len; i++) {
				var n = enc.charCodeAt(i);
				if (n >= 0x2B && n <= 0x3A) {
					dec += decryptCharcode(n,0x2B,0x3A,offset);	// 0-9 . , - + / :
				} else if (n >= 0x40 && n <= 0x5A) {
					dec += decryptCharcode(n,0x40,0x5A,offset);	// A-Z @
				} else if (n >= 0x61 && n <= 0x7A) {
					dec += decryptCharcode(n,0x61,0x7A,offset);	// a-z
				} else {
					dec += enc.charAt(i);
				}
			}
			return dec;
		}
			// decrypt spam-protected emails
		function linkTo_UnCryptMailto(s) {
			location.href = decryptString(s,3);
		}

/* toggleClass function */
Node.prototype.toggleClass = function(classname){
    this.className = this.className.indexOf(classname) === -1 ? this.className + " " + classname : this.className.replace(classname, "");
    return this;
}


document.getElementById('nav_anchor').addEventListener('click', function(e) {
   document.getElementById('nav_main').toggleClass('active');
   e.preventDefault();
   return false;
});
