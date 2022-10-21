function validasiNoProduk() {
    let check = false;
    let noProduk = document.forms['formId']['noProdukId'].value

    let numbers = /^[0-9]+$/

    if(noProduk.length == 0)
    {
        alert('ID produk harus diisi')
    }
    else if(noProduk.match(numbers))
    {
        check = true;
    }
    else
    {
        alert('Mohon isi ID produk menggunakan angka')
    }
    return check;
}

function validasiNamaProduk() {
    let check = false;
    let namaProduk = document.forms['formId']['namaProdukId'].value

    let letters = /^[A-Za-z]+$/

    if(namaProduk.length == 0)
    {
        alert('Nama produk harus diisi')
    }
    else if(namaProduk.match(letters))
    {
        check = true;
    }
    else
    {
        alert('Mohon masukkan nama produk menggunakan Alphabet')
    }
    return check;
}

function validasiStock() {
    let check = false;
    let stock = document.forms['formId']['stockId'].value

    if(stock == '')
    {
        alert('Stock produk harus diisi')
    }
    else if(stock<=4)
    {
        alert('Stock produk harus lebih dari 5')
    }
    else
    {
        check = true;
    }
    return check;
}

function validasiTanggal(){
    let check = false;
    let tanggal = document.forms['formId']['tanggalId'].value

    if(tanggal == '')
    {
        alert('Tanggal harus diisi')
    }
    else
    {
        check = true;
    }
    return check;
}

function validasiNama() {
    let check = false;
    let nama = document.forms['formId']['adminId'].value

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

let form = document.getElementById('formId')
form.addEventListener('submit', function(e){
    
    let isNoProdukValid = validasiNoProduk(),
        isNamaProduk = validasiNamaProduk(),
        isStockValid = validasiStock(),
        isTanggalValid = validasiTanggal(),
        isNamaValid = validasiNama();

    if (true == isNoProdukValid && true == isNamaProduk && true == isStockValid && true == isTanggalValid && true == isNamaValid) {
            alert("Produk berhasil ditambahkan dan sedang dalam proses")
         $('#formId').attr('action','managementdata.html');
    }
    else {
        e.preventDefault();
    }
})