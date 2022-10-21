function validasiOldPassword(){
    let check = false;
    let pass = document.forms['formId']['oldpasswordId'].value

    if(pass.length == 0)
    {
        alert('Password lama harus diisi')
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

function validasiNewPassword(){
    let check = false;
    let pass = document.forms['formId']['newpasswordId'].value

    if(pass.length == 0)
    {
        alert('Password baru harus diisi')
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

function validateJabatan(){
    let valid = false;
    let j = document.getElementById("jabatan");
    let optionSelIndex = j.options[j.selectedIndex].value;
    let optionSelectedText = j.options[j.selectedIndex].text;
    if(optionSelIndex != 0)
    {
        valid = true;
    }
    else if (optionSelIndex == 0)
    {
        alert('Silahkan pilih jabatan')
    }
    else 
    {

    }
    return valid;
    }

function validateTambah(){
    let valid = false;
    let e = document.getElementById("tambah");
    let optionSelIndex = e.options[e.selectedIndex].value;
    let optionSelectedText = e.options[e.selectedIndex].text;
    if(optionSelIndex != 0)
    {
        valid = true;
    }
    else if (optionSelIndex == 0)
    {
        alert('Silahkan pilih ditambahkan oleh siapa')
    }
    else 
    {

    }
    return valid;
}

let form = document.getElementById('formId')
form.addEventListener('submit', function(e){
    
    let isOldPasswordValid = validasiOldPassword(),
        isNewPasswordValid = validasiNewPassword();

    if (true == isOldPasswordValid && true == isNewPasswordValid) 
    {
        alert("Password berhasil diubah")
        $('#formId').attr('action','login.html');
    }
    else {
        e.preventDefault();
    }
})