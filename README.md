# 資料流動方式

login頁面
    登入會發送post請求,
    到資料庫撈對應使用者資料,且導回首頁+渲染資料

首頁按金幣+值時,
    判斷1.目前時間-上一次執行時間(大於24小時)
        2.目前連上線(socket撈取連線使用者),是否是資料庫在好友名單裡面
    
    符合(1) 發送post請求, 幣值+1  
    符合(1)(2)發送post請求,幣值+1.25

將資料更新到資料庫,
回傳時會在執行get
把新的資料渲染到頁面

# 開啟頁面

1.開啟MySQL
2.cd mining資料夾, 執行node (npm start)
3.開啟login本地檔案
