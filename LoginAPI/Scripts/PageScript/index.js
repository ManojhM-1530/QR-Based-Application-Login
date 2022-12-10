
var GetLogin = function () {
    var Username = $('#txtUsername').val();
    var Password = $('#txtPassword').val();

    var loginurl = "/api/values/GetLogin";

    var logindata = JSON.stringfy({ "Username": username, "Password": password });

    $.ajax({
        type: "POST",
        data: logindata,
        url: loginurl,
        contentType: "application/json;charset=uft-8",
        dataType: "json",
        success: function (result) {
            alert(result)
        },
        error: function (result) {
            alert(result)
        },
    });
};