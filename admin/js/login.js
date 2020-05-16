$(function () {
    $('.input_sub').on('click', function (e) {
        // 阻止默认的提交行为
        e.preventDefault()
        var username = $('.input_txt').val()
        var pwd = $('.input_pass').val()
        //检测用户名和密码是否为空
        if (!$.trim(username) || !$.trim(pwd)) {
            alert('用户名和密码不能为空,请重新输入...')
            return;
        }
        //发送请求
        $.ajax({
            type: 'post',
            url: 'http://localhost:8080/api/v1/admin/user/login',
            data: {
                username: username,
                password: pwd
            },
            success: function (res) {
                if (res.code == 200) {
                    alert(res.msg)
                    window.location.href = './index.html'
                } else {
                    alert(res.msg)
                }
            }
        })
    })
})