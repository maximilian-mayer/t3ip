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


$(function(){

  if(Modernizr.mq('only screen and (max-width: 599px)')) {
    $(".hassub").append('<span class="icon-chevron-down" />');

    $(".icon-chevron-down").on('click', function(e){
        e.stopPropagation();
        e.preventDefault();

        if ($(this).parent().hasClass('open')) {
          $(this).parent().removeClass('open');
        } else {
          $(this).parent().addClass('open');
        }
    });
  }



  if(Modernizr.mq('only screen and (min-width: 600px)')) {
    var $subnav  = $('.hassub.act .second-level, .hassub.cur .second-level');
    var navpos   = $subnav.offset();
    var navwidth = $subnav.width();
    var totalWidth = 0;
    var screenWidth = window.innerWidth;

    $("> li", $subnav).each(function(){
      totalWidth += $(this).outerWidth();
    });

    var diffX = totalWidth - navwidth;

    $subnav.parent().append('<div id="nav_morebtn">&#187;</div>');
    $subnav.parent().prepend('<div id="nav_lessbtn">&#171;</div>');

    $('#nav_lessbtn').hide();

    $('#nav_morebtn').on('click', function(){
      $subnav.css({
        transform: 'translateX(-'+ diffX +'px)'
      });
      $(this).hide();
      $('#nav_lessbtn').show();
    });

    $('#nav_lessbtn').on('click', function(){
      console.log('clicked');
      $subnav.css('transform', 'translateX(0)');
      $(this).hide();
      $('#nav_morebtn').show();
    });
  }

});

