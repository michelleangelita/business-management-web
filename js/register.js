function validasiNama() {
    let check = false;
    let nama = document.forms['formId']['namaId'].value

    let letters = /^[A-Za-z]+$/

    if(nama.length == 0)
    {
        alert('Nama harus diisi')
    }
    else if(nama.match(letters))
    {
        check = true;
    }
    else
    {
        alert('Mohon masukkan nama Anda menggunakan Alphabet')
    }
    return check;
}

function validasiAlamat(){
    let check = false;
    let alamat = document.forms['formId']['alamatId'].value

    if(alamat.length == 0)
    {
        alert('Alamat harus diisi')
    }
    else
    {
        check = true;
    }
    return check;
}

function validasiTanggalLahir(){
    let check = false;
    let dob = document.forms['formId']['dobId'].value

    if(dob == '')
    {
        alert('Tanggal lahir harus diisi')
    }
    else
    {
        check = true;
    }
    return check;
}

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

function validasiTelepon() {
    let check = false;
    let telepon = document.forms['formId']['phoneId'].value

    let numbers = /^[0-9]+$/

    if(telepon.length == 0)
    {
        alert('Nomor telepon harus diisi')
    }
    else if(telepon.match(numbers))
    {
        check = true;
    }
    else
    {
        alert('Mohon isi nomor telepon Anda menggunakan angka')
    }
    return check;
}

function validasiTerms(){
    let check = false;
    let terms = document.getElementById('termsId');

    if(!terms.checked)
    {
        alert("Silakan menyetujui syarat dan kebijakan yang berlaku")
    }
    else
    {
        check = true;
    }
    return check;
}


let form = document.getElementById('formId')
form.addEventListener('submit', function(e){
    
    let isNamaValid = validasiNama(),
        isAlamatValid = validasiAlamat(),
        isTanggalLahirValid = validasiTanggalLahir(),
        isEmailValid = validasiEmail(),
        isPasswordValid = validasiPassword(),
        isTeleponValid = validasiTelepon(),
        isTermsValid = validasiTerms();

    if (true == isNamaValid && true == isAlamatValid && true == isTanggalLahirValid && true == isEmailValid && true == isPasswordValid && true == isTeleponValid && true == isTermsValid) {
            alert("Pendaftaran Akun Berhasil")
         $('#formId').attr('action','login.html');
    }
    else {
        e.preventDefault();
    }
})