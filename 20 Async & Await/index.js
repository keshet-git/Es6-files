const apiUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

function getTop100Campers() {
  fetch(apiUrl)
  .then((r) => r.json())
  .then((json) => {
    console.log(json[0])
  });

}


getTop100Campers();