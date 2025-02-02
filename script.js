let imgBox = document.querySelector(".imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let btn = document.getElementById("btn");

btn.addEventListener("click", generateQr);

function generateQr() {
    let textValue = qrText.value.trim();

    if (textValue.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + textValue;
        imgBox.classList.add("show-img");
    } else {
        imgBox.classList.remove("show-img");
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
}
