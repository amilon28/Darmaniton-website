"use strict";

const headerDownloadBtn = document.getElementById("header-download-btn");

window.addEventListener("resize", function () {
  if (this.innerWidth <= 375) {
    console.log(this.innerWidth);
    headerDownloadBtn.innerText = "دانلود مستقیم اپ";
  }
});
