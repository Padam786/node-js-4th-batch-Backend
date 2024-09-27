import {fullname, hey} from "./module/sum"

function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched!");
  }, 2000);
}

fetchData((message) => {
  console.log(message);
});
