$(function () {
    $('.login_form').on('submit', function (e) {
        e.preventDefault()
        $.ajax({
            type: 'post',
            // url: 'http://localhost:8080/api/v1/admin/user/login',
            url: BigNew.user_login,
            data: $(this).serialize(),
            beforeSend: function () {
                var flag = false
                $('input[name]').each(function (index, ele) {
                    if (!$.trim($(ele).val())) {
                        flag = true
                    }
                })
                if (flag) {
                    $('.modal').modal('show')
                    $('.modal p').text('用户名和密码不能为空')
                    return false;
                }
            },
            success: function (res) {
                $('.modal').modal('show')
                $('.modal p').text(res.msg)
                if (res.code == 200) {
                    localStorage.setItem('token', res.token)
                    $('.modal').on('hidden.bs.modal', function (e) {
                        window.location.href = './index.html'
                    })
                }
            }
        })
    })
})
