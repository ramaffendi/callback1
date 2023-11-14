function pendataan(url, cb) {
    let data = new XMLHttpRequest();
    data.onload = function () {
      if (data.status === 200) {
        return cb(JSON.parse(data.responseText));
      }
    };
    data.open("GET", url);
    data.send();
  }
  
  const getData = pendataan(
    "https://jsonplaceholder.typicode.com/users",
    function (getData) {
      console.log(getData);
    }
  );
  