$(document).ready(function() {		
	BrowserFallbacks.init();
  Search.init();
});

var BrowserFallbacks = {
  init: function() {
    BrowserFallbacks.initPlaceholders();
  },

  initPlaceholders: function() {
    if (!Modernizr.placeholder) {
    }
  }

}

var Search = {
  init: function() {
    Search.observeFocus();
  },
  
  observeFocus: function() {
  	$('form#search input').focus(function() {
		  $(this).parent('form#search').addClass('focus');
		});
  	$('form#search input').blur(function() {
		  $(this).parent('form#search').removeClass('focus');
		});
  }
}
;
