function validasiSubjek() {
    let check = false;
    let subjek = document.forms['formId']['subjekId'].value

    if(subjek.length == 0)
    {
        alert('Subjek harus diisi')
    }
    else if(subjek.length >= 50)
    {
        alert('Subjek maksimal 50 character')
    }
    else
    {
        check=true;
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

function validasiPertanyaan() {
    let check = false;
    let pertanyaan = document.forms['formId']['questionId'].value

    if(pertanyaan.length == 0)
    {
        alert('Pertanyaan harus diisi')
    }
    else if(pertanyaan.length >= 300)
    {
        alert('Pertanyaan maksimal 300 character')
    }
    else
    {
        check = true;
    }
    return check;
}

let form = document.getElementById('formId')
form.addEventListener('submit', function(e){
    
    let isSubjekValid = validasiSubjek(),
        isEmailValid = validasiEmail(),
        isPertanyaanValid = validasiPertanyaan();

    if (true == isSubjekValid && true == isEmailValid && true == isPertanyaanValid) {
            alert("Pertanyaan Berhasil Dikirim")
         $('#formId').attr('action','contactus.html');
    }
    else {
        e.preventDefault();
    }
})