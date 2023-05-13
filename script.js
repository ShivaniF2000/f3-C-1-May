// Function to fetch data from API1
function PromiseAPI1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch("https://dummyjson.com/posts")
          .then((response) => response.json())
          .then((data) => {
            // Show data on the UI
            let tr = document.createElement("tr");
            let td = document.createElement("td");
            td.innerText = JSON.stringify(data);
            tr.appendChild(td);
            document.querySelector("#dataTable tbody").appendChild(tr);
            // Resolve the promise
            resolve(true);
          })
          .catch((error) => reject(error));
      }, 1000);
    });
  }
  
  // Function to fetch data from API2
  function PromiseAPI2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch("https://dummyjson.com/products")
          .then((response) => response.json())
          .then((data) => {
            // Show data on the UI
            let td = document.createElement("td");
            td.innerText = JSON.stringify(data);
            document.querySelector("#dataTable tr:last-of-type").appendChild(td);
            // Resolve the promise
            resolve(true);
          })
          .catch((error) => reject(error));
      }, 2000);
    });
  }
  
  // Function to fetch data from API3
  function PromiseAPI3() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch("https://dummyjson.com/todos")
          .then((response) => response.json())
          .then((data) => {
            // Show data on the UI
            let td = document.createElement("td");
            td.innerText = JSON.stringify(data);
            document.querySelector("#dataTable tr:last-of-type").appendChild(td);
            // Resolve the promise
            resolve(true);
          })
          .catch((error) => reject(error));
      }, 3000);
    });
  }
  
  // Using promise chaining with .then()
  document.querySelector("#fetchDataBtn").addEventListener("click", () => {
    PromiseAPI1()
      .then((result) => {
        if (result) {
          return PromiseAPI2();
        }
      })
      .then((result) => {
        if (result) {
          return PromiseAPI3();
        }
      })
      .catch((error) => console.log(error));
  });
  
  // Using async/await
  // document.querySelector("#fetchDataBtn").addEventListener("click", async () => {
  //   try {
  //     let result = await PromiseAPI1();
  //     if (result) {
  //       result = await PromiseAPI2();
  //       if (result) {
  //         await PromiseAPI3();
  //       }
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // });
  