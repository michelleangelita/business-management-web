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

let form = document.getElementById('formId')
form.addEventListener('submit', function(e){
    
    let isEmailValid = validasiEmail();

    if (true == isEmailValid) {
            alert("Link verifikasi telah dikirim ke email Anda")
         $('#formId').attr('action','forgetpassword.html');
    }
    else {
        e.preventDefault();
    }
})