//----------------------PRODUCT--------------------
const bigImg = document.querySelector(".product-content-left-big-img img")
const smalImg = document.querySelectorAll(".product-content-left-small-img img")
smalImg.forEach(function(imgItem,X){
    imgItem.addEventListener("click",function(){
        bigImg.src = imgItem.src
    })
})

const mota = document.querySelector(".mota")
const tinhnang = document.querySelector(".tinhnang")
if(mota){
    mota.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-mota").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-tinhnang").style.display = "block"
    })
}
if(tinhnang){
    tinhnang.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-mota").style.display = "block"
        document.querySelector(".product-content-right-bottom-content-tinhnang").style.display = "none"
    })
}
const butTon = document.querySelector(".product-content-right-bottom-top")
if(butTon){
    butTon.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeB")
    })
}

//-----------------------------------Cantact--------------------

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Giả sử đăng nhập thành công
    document.querySelector('.login-section').style.display = 'none';
    document.querySelector('.appointment-section').style.display = 'block';
});

document.getElementById('addAppointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let customerName = document.getElementById('customerName').value;
    let appointmentDate = document.getElementById('appointmentDate').value;
    let eml = document.getElementById('eml').value;
    let tn = document.getElementById('tn').value;
    let appointmentList = document.getElementById('appointmentList');
    let newAppointment = document.createElement('div');
    newAppointment.textContent = `Tên của bạn: ${customerName}, Tin nhắn: ${tn}, Email: ${eml}`;
    appointmentList.appendChild(newAppointment);

    document.getElementById('addAppointmentForm').reset();
});
