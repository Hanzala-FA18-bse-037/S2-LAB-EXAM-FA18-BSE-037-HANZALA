fetch('https://jsonplaceholder.typicode.com/')
  .then((response) => response.text())
  .then((json) => console.log(json));