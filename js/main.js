//COL LEFT

//img addition
var authorPhoto = document.querySelector('.author-photo');
authorPhoto.src = '../img/author-photo.png';

//text insertion
// var contactH2 = document.querySelector('.contact-h2').textContent = 'Contact me';

//svg addition

var svgArr = document.querySelectorAll('.svg');

//SVG insertion in contact session
console.log(svgArr[0]);

svgArr[0].src = "../svg/phone.svg";
svgArr[1].src = "../svg/email.svg";
svgArr[2].src = "../svg/github.svg";
svgArr[3].src = "../svg/location.svg";

//H2 content - both columns
var h2Content = document.querySelectorAll('h2');

h2Content[0].textContent = "contact me";
h2Content[1].textContent = "languages";
h2Content[2].textContent = "competences";
h2Content[3].textContent = "education";
h2Content[4].textContent = "table";
h2Content[5].textContent = "send me a message"
h2Content[6].textContent = "about me"



//table creation
var newTable = document.querySelector('.table-creation');
var table = document.createElement('table');
table.border = "1";

for (var r = 1; r<=6; r++) {
    var row = table.insertRow(-1);
    for (var c = 1; c<=6; c++) {
      var cell = row.insertCell(-1);
      cell.textContent = r*c;
    } 
  }
  newTable.appendChild(table);

  var tableBtn = document.querySelector('.show-hide-table');

  var click = 1;

  tableBtn.addEventListener('click', function() {

      click++;

      if (click%2 == 0) {
        //show
        table.style.opacity = 0;
      } else if (click%2 != 0) {
          //hide
          table.style.opacity = 1;
      }
  });

  //name input validation

var nameInpt = document.getElementById('name');

nameInpt.pattern = "^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$";
