// Getting Loci from local storage
function getLoci (){
  if (localStorage.getItem('userLoci') == null)
    return [];
  
  return JSON.parse(localStorage['userLoci'];
}
                    
function saveLoci (){
    localStorage["userLoci"] = JSON.stringify(userLoci);
}
                  
  let userLoci = getLoci();

//Parsing user string to storable array
function strToLoci (userStr, separator){
  switch(separator){
    case 'n'://new line separator 
      return userStr.split('\n');
     case 't'://tab separator
      return userStr.split('\t');
     case 's'://space line separator 
      return userStr.split('\s');
    default: 
      console.error('unknown separator',separator);
  }
}
  
//for exporting local storage loci
function lociToStr (){
  
}
  
function saveAsFile(fileName, data = '', postfix = (+(new Date)).toString()) {
    let lnk = document.createElement('a');
    lnk.href = `data:text/plain;content-disposition=attachment;filename=${fileName},${data}`
    lnk.download = fileName;
    lnk.target = '_blank';
    lnk.style.display = 'none';
    lnk.id = `downloadlnk-${postfix}`;
    document.body.appendChild(lnk);
    lnk.click();
    document.body.removeChild(lnk);
}

//saveAsFile('New file.txt', 'lorem ispum\n');

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
