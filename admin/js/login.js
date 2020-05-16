$(function () {
    $('.login_form').on('submit', function (e) {
        e.preventDefault()
        $.ajax({
            type: 'post',
            url: 'http://localhost:8080/api/v1/admin/user/login',
            data: $(this).serialize(),
            beforeSend: function () {
                var flag = false
                if (!$.trim($('input[name]').val())) {
                    flag = true
                }
                if (flag) {
                    alert('用户名和密码不能为空')
                    return false;
                }
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
