let nameInput = document.getElementById("name-input");

document.getElementById("kirim").addEventListener("click", function() {
    const nama = nameInput.value

    if (name == "") {
        document.getElementById("error-name").InnerHTML = "Nama tidak Boleh Kosong!"
    } else {
        document.getElementById('nama').innerHTML = nama
    }
    

    document.getElementById('nama').InnerHTML = "nama"
})