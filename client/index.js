/*
window.addEventListener('click', async function(event) {
    try {
        let response = await fetch('http://127.0.0.1:8090/list');
        let body = await response.text();
        document.getElementById('content').innerHTML = "<ul>";
        //console.log(typeof body);
        let potatoes = JSON.parse(body);
        for (let i = 0; i < potatoes.length; i++) {
            document.getElementById('content').innerHTML += "<li>" + potatoes[i] + "</li>";
        }
        document.getElementById('content').innerHTML += "</ul>";
    } catch (e) {
        alert(e);
    }
});
*/

document.addEventListener("DOMContentLoaded", function() {
  var list = document.getElementById("get");
  var newRandom = document.getElementById("random");

  async function getInstruments() {
    /*
    fetch('http://127.0.0.1:8090/list') //lost
        .then(function(response) {
            if (response.ok) {
                return response.text();
            } else {
                return "oops";
            }
        })
        //.then(response => response.text())
        .then(body => document.getElementById('content').innerHTML = body)
        .catch((error) => alert(error))
    */
    try {
      let response = await fetch("http://127.0.0.1:8090/list");
      let body = await response.text();
      document.getElementById("content").innerHTML = "<ul>";
      //console.log(typeof body);
      let potatoes = JSON.parse(body);
      for (let i = 0; i < potatoes.length; i++) {
        document.getElementById("content").innerHTML +=
          "<li>" + potatoes[i] + "</li>";
      }
      document.getElementById("content").innerHTML += "</ul>";
    } catch (e) {
      alert(e);
    }
  }

  function randomNumber() {
    fetch("http://127.0.0.1:8090/random/1000")
      .then(response => response.text())
      .then(body => (document.getElementById("content").innerHTML = body))
      .catch(error => alert(error));
  }

  list.addEventListener("click", getInstruments);
  newRandom.addEventListener("click", randomNumber);
});
