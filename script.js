/** Add any JavaScript you need to this file. */
window.onload = function () {
  var filtering = function () {
    var dryMenu = document.querySelector("#dry a");
    var spicesMenu = document.querySelector("#spices a");
    var seasoningMenu = document.querySelector("#seasoning a");
    var saltsMenu = document.querySelector("#salts a");
    var liquidMenu = document.querySelector("#liquid a");
    var honeyMenu = document.querySelector("#honey a");
    var mapleMenu = document.querySelector("#maple a");
    var hotMenu = document.querySelector("#hot a");
    var accMenu = document.querySelector("#acc a");

    var blogMenu = document.getElementById("blog");

    dryMenu.addEventListener("click", function () {
      dryOpen();
    });
    spicesMenu.addEventListener("click", function () {
      spicesOpen();
    });
    seasoningMenu.addEventListener("click", function () {
      seasoningOpen();
    });
    saltsMenu.addEventListener("click", function () {
      saltsOpen();
    });
    liquidMenu.addEventListener("click", function () {
      liquidOpen();
    });
    honeyMenu.addEventListener("click", function () {
      honeyOpen();
    });
    mapleMenu.addEventListener("click", function () {
      mapleOpen();
    });
    hotMenu.addEventListener("click", function () {
      hotOpen();
    });
    accMenu.addEventListener("click", function () {
      accOpen();
    });

    blogMenu.addEventListener("click", function () {
      closeSidebar();
    });
    var dryMenuMobileLi = document.querySelector(".mobile #dry i");
    var liquidMenuMobileLi = document.querySelector(".mobile #dry i");
    var dryMenuMobile = document.querySelector(".mobile  #dry a");
    var spicesMenuMobile = document.querySelector(".mobile #spices a");
    var seasoningMenuMobile = document.querySelector(".mobile #seasoning a");
    var saltsMenuMobile = document.querySelector(".mobile #salts a");
    var liquidMenuMobile = document.querySelector(".mobile #liquid a");
    var honeyMenuMobile = document.querySelector(".mobile #honey a");
    var mapleMenuMobile = document.querySelector(".mobile #maple a");
    var hotMenuMobile = document.querySelector(".mobile #hot a");
    var accMenuMobile = document.querySelector(".mobile #acc a");

    dryMenuMobile.addEventListener("click", function () {
      closeSidebar();
      dryOpen();
    });
    spicesMenuMobile.addEventListener("click", function () {
      closeSidebar();
      spicesOpen();
    });
    seasoningMenuMobile.addEventListener("click", function () {
      closeSidebar();
      seasoningOpen();
    });
    saltsMenuMobile.addEventListener("click", function () {
      closeSidebar();
      saltsOpen();
    });
    liquidMenuMobile.addEventListener("click", function () {
      closeSidebar();
      liquidOpen();
    });
    honeyMenuMobile.addEventListener("click", function () {
      closeSidebar();
      honeyOpen();
    });
    mapleMenuMobile.addEventListener("click", function () {
      closeSidebar();
      mapleOpen();
    });
    hotMenuMobile.addEventListener("click", function () {
      closeSidebar();
      hotOpen();
    });
    accMenuMobile.addEventListener("click", function () {
      closeSidebar();
      accOpen();
    });
  };

  function closeSidebar() {
    var bb = document.querySelector(".bbcon");
    var mS = document.querySelector(".sidebarMobile .sidebar");
    bb.classList.remove("open");
    mS.classList.remove("open");
  }

  function closeAll() {
    var pl = document.querySelectorAll(".productList");
    var leng = pl.length;
    for (var i = 0; i < leng; ++i) {
      pl[i].style.display = "none";
    }
  }
  function dryOpen() {
    closeAll();
    var dry = document.querySelectorAll(".dry");
    var leng = dry.length;
    for (var i = 0; i < leng; ++i) {
      dry[i].style.display = "inline-block";
    }
  }
  function spicesOpen() {
    closeAll();
    var spices = document.querySelectorAll(".spices");
    var leng = spices.length;
    for (var i = 0; i < leng; ++i) {
      spices[i].style.display = "inline-block";
    }
  }
  function seasoningOpen() {
    closeAll();
    var seasoning = document.querySelectorAll(".seasoning");
    var leng = seasoning.length;
    for (var i = 0; i < leng; ++i) {
      seasoning[i].style.display = "inline-block";
    }
  }
  function saltsOpen() {
    closeAll();
    var salts = document.querySelectorAll(".salts");
    var leng = salts.length;
    for (var i = 0; i < leng; ++i) {
      salts[i].style.display = "inline-block";
    }
  }
  function liquidOpen() {
    closeAll();
    var liquid = document.querySelectorAll(".liquid");
    var leng = liquid.length;
    for (var i = 0; i < leng; ++i) {
      liquid[i].style.display = "inline-block";
    }
  }
  function honeyOpen() {
    closeAll();
    var honey = document.querySelectorAll(".honey");
    var leng = honey.length;
    for (var i = 0; i < leng; ++i) {
      honey[i].style.display = "inline-block";
    }
  }
  function mapleOpen() {
    closeAll();
    var maple = document.querySelectorAll(".maple");
    var leng = maple.length;
    for (var i = 0; i < leng; ++i) {
      maple[i].style.display = "inline-block";
    }
  }
  function hotOpen() {
    closeAll();
    var hot = document.querySelectorAll(".hot");
    var leng = hot.length;
    for (var i = 0; i < leng; ++i) {
      hot[i].style.display = "inline-block";
    }
  }
  function accOpen() {
    closeAll();
    var acc = document.querySelectorAll(".acc");
    var leng = acc.length;
    for (var i = 0; i < leng; ++i) {
      acc[i].style.display = "inline-block";
    }
  }
  function contact() {
    console.log("hell");
    var radio = document.form.radios;
    var pre = null;
    for (var i = 0; i < radio.length; i++) {
      radio[i].addEventListener("change", function () {
        if (this !== pre) {
          pre = this;
        }
        if (this.value == "orderproblem") {
          document.getElementById("orderprob").style.display = "inline-block";
        } else {
          document.getElementById("orderprob").style.display = "none";
        }
      });
    }
  }

  function menuOpen() {
    var bb = document.querySelector(".bbcon");
    var mS = document.querySelector(".sidebarMobile .sidebar");
    bb.addEventListener("click", function () {
      bb.classList.toggle("open");
      mS.classList.toggle("open");
    });
  }

  if (window.location.pathname == "/contact.html") {
    contact();
  }
  menuOpen();
  filtering();
};
