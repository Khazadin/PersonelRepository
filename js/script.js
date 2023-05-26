let balrog = document.getElementById("balrog");
let saat = document.getElementById("saat");
balrog.addEventListener("click", () => {
  alert("Balrog is the coolest boss of fantastic universe history 🐐🔥");
});
let date = new Date();
let month = date.getMonth();
let day = date.getDate();
let year = date.getFullYear();
let tarih;
if (month + 1 == 1) {
  newMonth = "January";
  tarih = `${day} ${newMonth} ${year}`;
  saat.innerHTML = tarih;
} else if (month + 1 == 2) {
  newMonth = "February";
  tarih = `${day} ${newMonth} ${year}`;
  saat.innerHTML = tarih;
} else if (month + 1 == 3) {
  newMonth = "March";
  tarih = `${day} ${newMonth} ${year}`;
  saat.innerHTML = tarih;
} else if (month + 1 == 4) {
  newMonth = "April";
  tarih = `${day} ${newMonth} ${year}`;
  saat.innerHTML = tarih;
} else if (month + 1 == 5) {
  newMonth = "May";
  tarih = `${day} ${newMonth} ${year}`;
  saat.innerHTML = tarih;
} else if (month + 1 == 6) {
  newMonth = "June";
  tarih = `${day} ${newMonth} ${year}`;
  saat.innerHTML = tarih;
} else if (month + 1 == 7) {
  newMonth = "July";
  tarih = `${day} ${newMonth} ${year}`;
  saat.innerHTML = tarih;
} else if (month + 1 == 8) {
  newMonth = "August";
  tarih = `${day} ${newMonth} ${year}`;
  saat.innerHTML = tarih;
} else if (month + 1 == 9) {
  newMonth = "September";
  tarih = `${day} ${newMonth} ${year}`;
  saat.innerHTML = tarih;
} else if (month + 1 == 10) {
  newMonth = "October";
  tarih = `${day} ${newMonth} ${year}`;
  saat.innerHTML = tarih;
} else if (month + 1 == 11) {
  newMonth = "November";
  tarih = `${day} ${newMonth} ${year}`;
  saat.innerHTML = tarih;
} else if (month + 1 == 12) {
  newMonth = "December";
  tarih = `${day} ${newMonth} ${year}`;
  saat.innerHTML = tarih;
}

let folder = `<div class="lowerSec" id="lowerSec">
<img src="photos/xpfolder.png" alt="" class="lowerSecImage" />
<p>Plans</p>
</div>`;
let folder1 = `<div class="lowerSec" id="lowerSec1">
<img src="photos/xpfolder.png" alt="" class="lowerSecImage" />
<p>Projects</p>
</div>`;
let folder2 = `<div class="lowerSec" id="lowerSec2">
<img src="photos/xpfolder.png" alt="" class="lowerSecImage" />
<p>DoNotOpen</p>
</div>`;

let planPOP = `<div class="gifblock folderBlock" id="jsFolder">
<div class="gifBlockUp folderBlockUp">
  <div class="tabLeft">
    <p class="tab-exp">Plans</p>
  </div>
  <div class="tabRight pc-folder-right">
    <button class="tabButton button1">
      <img src="photos/kucultme.png" alt="" class="tab-orta" /></button
    ><button class="tabButton midButton">
      <img
        src="photos/ortalamatusu 2.png"
        alt=""
        class="tab-orta"
      /></button
    ><button class="tabButton" id = "closeButton" onclick="hideElement()">
      <img src="photos/carpi.png" alt="" class="tab-orta" />
    </button>
  </div>
</div>
<div class="pc-folder-bottom">
  <div class="folderinfolder">
    <div class="folder" id="proj">
      <div class="folderUp">
        <img src="photos/textfile.png" alt="" class="folderImage" />
      </div>
      <div><p class="folderText">2023</p></div>
    </div>
    <div class="folder" id="proj">
      <div class="folderUp">
        <img src="photos/textfile.png" alt="" class="folderImage" />
      </div>
      <div><p class="folderText">2024</p></div>
    </div>
  </div>
</div>
</div> `;
let projPOP = `<div class="gifblock folderBlock" id="jsFolder1">
<div class="gifBlockUp folderBlockUp">
  <div class="tabLeft">
    <p class="tab-exp">Projects</p>
  </div>
  <div class="tabRight pc-folder-right">
    <button class="tabButton button1">
      <img src="photos/kucultme.png" alt="" class="tab-orta" /></button
    ><button class="tabButton midButton">
      <img
        src="photos/ortalamatusu 2.png"
        alt=""
        class="tab-orta"
      /></button
    ><button class="tabButton"  id = "closeButton1" onclick="hideElement1()">
      <img src="photos/carpi.png" alt="" class="tab-orta" />
    </button>
  </div>
</div>
<div class="pc-folder-bottom">
  <div class="folderinfolder">
    <div class="folder" id="proj">
      <div class="folderUp">
        <img src="photos/textfile.png" alt="" class="folderImage" />
      </div>
      <div><p class="folderText">2023</p></div>
    </div>
    <div class="folder" id="proj">
      <div class="folderUp">
        <img src="photos/textfile.png" alt="" class="folderImage" />
      </div>
      <div><p class="folderText">2024</p></div>
    </div>
  </div>
</div>
</div> `;
let dontPOP = `<div class="gifblock folderBlock" id="jsFolder2">
<div class="gifBlockUp folderBlockUp">
  <div class="tabLeft">
    <p class="tab-exp">DoNotOpen</p>
  </div>
  <div class="tabRight pc-folder-right">
    <button class="tabButton button1">
      <img src="photos/kucultme.png" alt="" class="tab-orta" /></button
    ><button class="tabButton midButton">
      <img
        src="photos/ortalamatusu 2.png"
        alt=""
        class="tab-orta"
      /></button
    ><button class="tabButton"  id = "closeButton2"onclick="hideElement2()">
      <img src="photos/carpi.png" alt="" class="tab-orta" />
    </button>
  </div>
</div>
<div class="pc-folder-bottom">
  <div class="folderinfolder">
    <div class="folder" id="proj">
      <div class="folderUp">
        <img src="photos/textfile.png" alt="" class="folderImage" />
      </div>
      <div><p class="folderText">2023</p></div>
    </div>
    <div class="folder" id="proj">
      <div class="folderUp">
        <img src="photos/textfile.png" alt="" class="folderImage" />
      </div>
      <div><p class="folderText">2024</p></div>
    </div>
  </div>
</div>
</div> `;
//dwr nin içine atacağı kod
const dwr = document.getElementById("dwr");
const pcup = document.getElementById("pcUpRight");
const jsFolder = document.getElementById("jsFolder");
const lowerSecText = document.getElementById("lowerSecText");
const projFolder = document.getElementById("proj");
const planFolder = document.getElementById("plan");
const dontFolder = document.getElementById("dont");
const lowerSec = document.getElementById("lowerSec");
const lowersec1 = document.getElementById("lowerSec1");
const lowerSec2 = document.getElementById("lowerSec2");

function folderCreator() {
  let folderCheckArray = [];
  let planTrue = "plan";
  let projTrue = "proj";
  let dontTrue = "dont";
  projFolder.addEventListener("click", () => {
    if (dwr.innerHTML == 0) {
      dwr.innerHTML = folder1;
      pcup.innerHTML = projPOP;
      folderCheckArray.push(projTrue);
    } else if (
      dwr.innerHTML != 0 &&
      folderCheckArray.includes("proj") == false
    ) {
      dwr.innerHTML += folder1;
      folderCheckArray.push(projTrue);
      pcup.innerHTML += projPOP;
    }
  });
  planFolder.addEventListener("click", () => {
    if (dwr.innerHTML == 0) {
      folderCheckArray.push(planTrue);
      dwr.innerHTML = folder;
      pcup.innerHTML = planPOP;
    } else if (
      dwr.innerHTML != 0 &&
      folderCheckArray.includes("plan") == false
    ) {
      dwr.innerHTML += folder;
      folderCheckArray.push(planTrue);
      pcup.innerHTML += planPOP;
    }
  });
  dontFolder.addEventListener("click", () => {
    if (dwr.innerHTML == 0) {
      dwr.innerHTML = folder2;
      folderCheckArray.push(dontTrue);
      pcup.innerHTML = dontPOP;
    } else if (
      dwr.innerHTML != 0 &&
      folderCheckArray.includes("dont") == false
    ) {
      dwr.innerHTML += folder2;
      folderCheckArray.push(dontTrue);
      pcup.innerHTML += dontPOP;
    }
  });
}
folderCreator();
function hideElement() {
  document.getElementById("jsFolder").style.display = "none";
  folderCheckArray.pop(planTrue);
  dwr.innerHTML -= folder;
}
function hideElement2() {
  document.getElementById("jsFolder2").style.display = "none";
  folderCheckArray.pop(dontTrue);
  dwr.innerHTML -= folder2;
}
function hideElement1() {
  document.getElementById("jsFolder1").style.display = "none";
  dwr.innerHTML -= folder1;
  folderCheckArray.pop(projTrue);
  dwr.innerHTML -= folder1;
}
hideElement1();
hideElement();
hideElement2();
