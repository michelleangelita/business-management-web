function validasiEmail(){
    let check = false;
    let email = document.forms['formId']['emailId'].value;
    let arrEmail = email.split('@')
    if(arrEmail.length !=2)
    {
        alert("Email harus diisi")
    }
    else if(arrEmail[0].length<=1)
    {
        alert("Email harus diisi")
    }
    else if(arrEmail[1]!='gmail.com')
    {
        alert('Mohon masukkan email Anda diakhiri dengan @gmail.com')
    }
    else
    {
        check = true;
    }
    return check;
}

function validasiPassword(){
    let check = false;
    let pass = document.forms['formId']['passwordId'].value

    if(pass.length == 0)
    {
        alert('Password harus diisi')
    }
    else if(!(pass.length>=8 && pass.length<=10))
    {
        alert('Mohon isi password min 8 char dan max 10 char')
    }
    else if (pass.search(/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/) < 0)
    {
        alert('Mohon isi password dengan kombinasi huruf besar, huruf kecil dan angka')
    }
    else
    {
        check=true;
    }
    return check;
}

let form = document.getElementById('formId')
form.addEventListener('submit', function(e){
    
    let isEmailValid = validasiEmail(),
        isPasswordValid = validasiPassword();

    if (true == isEmailValid && true == isPasswordValid) 
    {
            alert("Selamat Datang")
         $('#formId').attr('action','home.html');
    }
    else {
        e.preventDefault();
    }
})