// array for dev only
const devLoci = ["Sofa", "Table", "PC"];
console.table(devLoci);

const root = document.getElementById("fullpage");

const fillLoci = (arr) => {
  arr.map((x) => {
    let loc = document.createElement("div");
    loc.classList.add("section");
    loc.innerText = x;
    root.appendChild(loc);
  });
  myFullpage.destroy("all");
  myFullpage = setFullpage();
};

fillLoci(devLoci);
