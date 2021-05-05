let account = $("#account");
        let password = $('#password')
        $('#loginBtn').on('click',(e)=>{
        
            startListener("post", "/login", login, { account: account.val(),password:password.val() });
            // alert(password.val());
        })
        function login(data) {
            // console.log(data)
            // accountText.val(data[0].username);
            // $('#password').val(data[0].password);
            // time.value = data[0].time
            console.log(data[0])
            switch(data[0].info){
                case 'error':
                    alert('帳號或密碼錯誤');
                    account.val("");
                    password.val("")
                    break;
                case 'success':
                    // alert('ok')
                window.location.href='file:///D:/%E5%89%8D%E7%AB%AF%E4%BD%9C%E5%93%81/mining/mining/public/index.html';
                    break;
                default:
                    // console.log(data[0])
                    
				// window.location.href= "file:///D:/%E5%89%8D%E7%AB%AF%E4%BD%9C%E5%93%81/mining/1copyajaxgood/public/login.html";
            }
            
        }
