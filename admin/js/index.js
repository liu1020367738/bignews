$(function () {
    $.ajax({
        type: 'get',
        url: BigNew.user_info,
        //更改请求头
        headers: {
            'Authorization': localStorage.getItem('token')
        },
        success: function (res) {
            if (res.code == 200) {
                //渲染传回来的用户名和图片
                $('.user_info span').html(`欢迎&nbsp;&nbsp;${res.data.nickname}`)
                $('.user_info img').attr('src', res.data.userPic)
                $('.user_center_link img').attr('src', res.data.userPic)
            }
        }
    })


    //退出功能
    $('.logout').on('click', function () {
        //清除本地存储的token
        localStorage.removeItem('token')
        //返回登入页面
        window.location.href = './login.html'
    })

})