function startListener(method, url, u, require = {}) {
  if (method === "get") {
    fetch("http://localhost:3003" + url, {
      method: "get",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8;",
      },
    })
      .then(function (response) {
        //處理 response
        return response.json();
      })
      .then(function (data) {
        u(data);
        // console.log(data);
      });
  } else {
    // console.log(JSON.stringify(require))
    fetch("http://localhost:3003" + url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(require),
    })
      .then(function (response) {
        //處理 response
        return response.json();
      })
      .then(function (data) {
        console.log(data[0])
        if(data[0].info != "ok"){
          u(data);
        }else{
          startListener('get', '/',u);
        }

        // if(data[0].info == 'error' || 'success' ){
        //   u(data);
        // }else{
          // startListener('get', '/',u);
        // }
        // console.log(data);
      });
  }
}


// axios({
//     method: 'get',
//     baseURL: 'http://localhost:3004',
//     url: '/',
//     'Content-Type': 'application/json',
//   })
//     .then((result) => { console.log(result.data) })
//     .catch((err) => { console.error(err) })


// const path = `http://localhost:3003`;

// var data = {
//   quantity: 1,
// }

// axios.get(path, data)
//   .then(res => {
//     console.log(res);
//   })
//   .catch(error => {
//     console.log(error.response);
//   });


  // axios.get('http://localhost:3003',)
  //   .then((res) => { console.table(res.data) })
  //   .catch((error) => { console.error(error) })
  //   .finally(() => { /* 不論失敗成功皆會執行 */ })

