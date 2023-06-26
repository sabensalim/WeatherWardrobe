var subbutton = document.getElementById('subbutton');
var inVal = document.getElementById('inValue');
var name = document.querySelector('.name');
var temp = document.querySelector('.temp');
var temph3 = document.querySelector('.temph3');
var desc = document.querySelector('.desc');
var desch3 = document.querySelector('.desch3');




subbutton.addEventListener('click', function() {
  console.log(inVal.value);
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inVal.value + '&appid=9e204ab6ac9981f96cbb94b4a440dbe3')
    .then(response => response.json())
    .then(data => {
      var nameVal = data['name'];
      var tempVal = Math.floor((((data['main']['temp']) / 10) * 2) + 30);
      var descVal = data['weather'][0]['description'];
      
      name.innerHTML = nameVal;
      
      temp.innerHTML = "<h3>The current in "+nameVal+" weather is: <h3>" + tempVal + " F";
      desc.innerHTML = "<h3>The weather in "+nameVal+" can be described as: <h3>" + descVal;
      // button.innerHTML = "jsdafkldjls;ka";

    })
    .catch(err => alert("City not found."))
});
// }

// document.getElementById("bttn").addEventListener("click", function() {
//   console.log("clicked");
// });
// button = document.getElementById('submit');
// console.log('b4');
// function repositrate() {
//   console.log("clicked");
// }
// button.addEventListener('click', repositrate); 

