	function generatePassword() {
        var length = document.getElementById("length").value;
        var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!$&*_~";
        var password = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            password += charset.charAt(Math.floor(Math.random() * n));
        }

        if (password.match(/[a-z]/g) && password.match(/[A-Z]/g) && password.match(/[0-9]/g) || password.match(/[^a-zA-Z\d]/g)) {
            if (localStorage.getItem(password)) {
                generatePassword();
            } else {
                localStorage.setItem(password, true);
                document.getElementById("password").value = password;
                document.getElementById("password").style.animation = "fadeIn 2s";
            }
        } else {
            generatePassword();
        }
    }

	function copyPassword() {
	  var copyText = document.getElementById("password");
	  copyText.select();
	  copyText.setSelectionRange(0, 99999);
	  document.execCommand("copy");
	  alert("Текст скопирован в буфер обмена");
    }