function welcomeName(){
    const nama = document.forms["welcome-name"]["name-input"].value;

    if (nama == ""){
        document.getElementById("error-name").innerHTML = "Nama Tidak Boleh Kosong!!"

        return false;
    }

    setName(nama);

    return false;
}

function setName(nama){
    document.getElementById("nama").innerHTML = nama;
    document.getElementById("error-name").innerHTML = ""
}


// gambar bagian Home
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n){
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }
    imgList[slideIndex - 1].style.display = "block"
}

setInterval(() => {
    plusDivs(1)
},2000)

// massage Us
function validateForm() {
    var fullName = document.forms["message-form"]["full-name"].value;
    var birthDate = document.forms["message-form"]["birth-date"].value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var messages = document.forms["message-form"]["messages"].value;

    if (fullName === "" || birthDate === "" || gender === null || messages === "") {
        alert("Mohon isi semua kolom yang diperlukan.");
        return false;
    }

    document.getElementById("sender-full-name").textContent = fullName;
    document.getElementById("sender-birth-date").textContent = birthDate;
    document.getElementById("sender-gender").textContent = gender.value;
    document.getElementById("sender-messages").textContent = messages;

    return false;
}