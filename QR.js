BASE_Url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let btn = document.querySelector(".btn");
let imgbox = document.querySelector(".imgbox");
let qr_image = document.querySelector("#grImage");
let text = document.querySelector("#text");
let msg = document.querySelector(".msg");



function fch(){
    if(text.value.length > 0 ){
        qr_image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text.value;
        imgbox.classList.add("show-img");
        msg.style.display = "none";
    }else{
        text.classList.add("error");
        setTimeout(()=>{
            text.classList.remove("error");
        },1000);
        msg.style.display = "block";
    }

}