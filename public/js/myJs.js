// 點擊krtek 幣值加1
// 1.取得krteck,添加點擊事件
// 2.input 元素取得,幣值加1
// 3.回傳到頁面
// 4.10秒內不能再按

//計算時間
//1.取得上次時間
//2.取得現在時間
let socket = io('http://localhost:3003')

const krtek = document.querySelector('.krtek');
const coin = document.querySelector('.coin');
const time = document.querySelector('.time')
let cntFri = 0;

// 判斷除了自己 同時在線人數
socket.on('cntFri', data => {
  cntFri = data.cnt
  // console.log(cntFri)
})

//監聽用戶離開
socket.on('delUser', data => {
  cntFri = data.cnt
  // console.log(cntFri)
}) 

const krtekClick = (e) => {
  // 幣值加1
  const lastTime = new Date(time.value);
  const countTime = new Date() - lastTime;

  if (countTime <= 86400000) {
      return
      // console.log(lastTime);
  } else {
    //排除自己連接server
    if (cntFri > 1) {
      coin.value = parseFloat(coin.value) + 1.25;
    } else {
      coin.value = parseFloat(coin.value) + 1;
    }

    startListener("post", "/getCoin", u, { item: coin.value });
    console.log("ok");
  }
  
}
krtek.onclick = krtekClick;

let usernameText = $("#username");

function u(data) {
  console.log(data[0])
  usernameText.val(data[0].username);
  coin.value = data[0].coin;
  time.value = data[0].time

}

startListener("get", `/`, u);