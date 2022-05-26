//Apply now ribbon
  const ribbon = document.getElementById("menuribbon");

  ribbon.onmouseover = function () {
      this.classList.remove("up");
      this.classList.add("down");
  };

  ribbon.onmouseout = function () {
      this.classList.remove("down");
      this.classList.add("up");
  };

  /****B/C Safari won't play nice with the Apply Now transitions, we're going to add the browser as a ribbon class****/
	(($) => {
	var BrowserDetect = {
	  init: function () {
	      this.browser = this.searchString(this.dataBrowser) || "Other";
	      this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
	  },
	  searchString: function (data) {
	      for (var i = 0; i < data.length; i++) {
	          var dataString = data[i].string;
	          this.versionSearchString = data[i].subString;
	          if (dataString.indexOf(data[i].subString) !== -1) {
	              return data[i].identity;
	          }
	      }
	  },
	  searchVersion: function (dataString) {
	      var index = dataString.indexOf(this.versionSearchString);
	      if (index === -1) {
	          return;
	      }
	      var rv = dataString.indexOf("rv:");
	      if (this.versionSearchString === "Trident" && rv !== -1) {
	          return parseFloat(dataString.substring(rv + 3));
	      } else {
	          return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
	      }
	  },
	  dataBrowser: [{
	      string: navigator.userAgent,
	      subString: "Edge",
	      identity: "MS Edge"
	  }, {
	      string: navigator.userAgent,
	      subString: "MSIE",
	      identity: "Explorer"
	  }, {
	      string: navigator.userAgent,
	      subString: "Trident",
	      identity: "Explorer"
	  }, {
	      string: navigator.userAgent,
	      subString: "Firefox",
	      identity: "Firefox"
	  }, {
	      string: navigator.userAgent,
	      subString: "Opera",
	      identity: "Opera"
	  }, {
	      string: navigator.userAgent,
	      subString: "OPR",
	      identity: "OPR"
	  }, {
	      string: navigator.userAgent,
	      subString: "Netscape",
	      identity: "Netscape"
	  }, {
	      string: navigator.userAgent,
	      subString: "Chrome",
	      identity: "Chrome"
	  }, {
	      string: navigator.userAgent,
	      subString: "Safari",
	      identity: "Safari"
	  }]
	};
	BrowserDetect.init();
	var bv = BrowserDetect.browser;
	if (bv == "Chrome") {
	  $(".ribbon").addClass("chrome");
	} else if (bv == "MS Edge") {
	  $(".ribbon").addClass("edge");
	} else if (bv == "Explorer") {
	  $(".ribbon").addClass("ie");
	} else if (bv == "Firefox") {
	  $(".ribbon").addClass("firefox");
	} else if (bv == "Safari") {
	  $(".ribbon").addClass("safari");
	} else if (bv == "Netscape") {
	  $(".ribbon").addClass("opera");
	} else {
	  $(".ribbon").addClass("browser-unknown");
	}
	})($);

	//mobile hamburger click dropdown
	const bars = document.querySelector(".bars");
	const primaryNavigationMenu = document.querySelector(".nav-primary");
	bars.onclick = function(){
	primaryNavigationMenu.classList.toggle("mobile-hidden");
	}

	//sticky header

	const header = document.querySelector(".header");
	const headerOffset = header.offsetTop;

	window.onscroll = function(){
	if (window.pageYOffset > headerOffset) {
	header.classList.add("sticky");
	}else {
	header.classList.remove("sticky");
	}
	}

  //dropdown open
  $(".dropdown").click(function(){
    $(this).toggleClass("open");
  });