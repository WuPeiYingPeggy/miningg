const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const { response } = require("express");

const app = express();

//導入socket.io
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


//增加靜態檔案的路徑
// app.use(express.static('public'));

app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "mining"
});


app.get('/', function (req, res) {
  const sql = `SELECT username,password,time,friends, coin, id,friName,senName 
  FROM user as u,fri as f
  where username="krtek"`
  db.query(sql, function (err, rows) {
    if (err) {
      console.log(JSON.stringify(err));
      return;
    }
    res.send(rows);
    
    
  });
});

app.post('/login', function (req, res) {
  const sql = ` 
  select username, password ,friends,time,coin
  FROM user as u,fri as f
  where username="${req.body.account}" && password="${req.body.password}";`
  db.query(sql, function (err, rows) {
    if (err) {
      console.log(JSON.stringify(err));
      return;
    }
    if(rows.length == 0){
      res.send([{info:'error'}]);
    }else{
      rows[0].info = 'success';
      res.send(rows)
      console.log(rows)
    }
   
    // console.log(req.body.item)
  });

})

app.post('/getCoin', function (req, res) {
  const sql = `UPDATE user SET coin = '${req.body.item}' , time=current_timestamp WHERE username = 'krtek'`
  db.query(sql, function (err, rows) {
    if (err) {
      console.log(JSON.stringify(err));
      return;
    }
    res.send([{info:'ok'}]);
    // console.log(req.body.item)
  });

})

// 數進入server人數
var cnt = 0
io.on("connection", socket => {
  // servser判斷目前有幾個人在線上,再回傳人數
  cnt++;
  io.emit('cntFri', { cnt: cnt });

  socket.on('disconnect', () => {
    cnt--;
    // console.log(cnt)
    io.emit('delUser', { cnt: cnt })
  })
})


httpServer.listen(3003);

//app.listen(3002);