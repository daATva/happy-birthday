function clickerMainloop() {
  let esp1 = document.getElementById("esp1");
  let esp2 = document.getElementById("esp2");
  let initialwidth = esp1.width;
  let cwidth = esp1.width;
  let cmargin = 0;
  let intensity = 1;
  esp1.addEventListener("click", (ev) => {
    intensity += 0.13;
    cwidth -= 10;
    cmargin -= 0.5;
    console.log(cwidth);
  });
  esp2.addEventListener("click", (ev) => {
    intensity += 0.13;
    cwidth -= 28;
    cmargin -= 0.5;
    console.log(cwidth);
  });

  function mainloop() {
    cwidth += 10;
    cmargin += 0.5;
    if (cwidth - initialwidth < 50) {
      setTimeout(mainloop, 1000 / intensity);
    } else {
      console.log("Done");
      document.getElementById("aud").play();
      document.querySelector(".overlay").classList.add("overlay-end");
    }
  }

  function checkerloop() {
    esp1.style.width = cwidth + "px";
    esp2.style.width = cwidth + "px";
    esp1.style.marginRight = cmargin + "px";
    esp2.style.marginLeft = cmargin + "px";
  }

  setTimeout(mainloop, 1000 / intensity);
  setInterval(checkerloop, 50);
}
