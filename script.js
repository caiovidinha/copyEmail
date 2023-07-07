const email = document.querySelector('.email')
const copy = document.querySelector('.copy')
const capa = document.querySelector('.copy-email') 

function subirCopia(){
    copy.style.margin = '-30px 0 0 -125px'
}

function descerCopia(){
    copy.style.margin = '30px 0 0 -125px'
}

function copiarEmail() {
    navigator.clipboard.writeText('caiomdavidinha@gmail.com');
    copy.innerHTML = '<p class="copy-email" style="cursor: default;">E-mail copiado!</p>'
    setTimeout(() => {
    copy.innerHTML = '<p class="copy-email" style="cursor: pointer;">Copiar E-mail <i class="fa-regular fa-copy" style="color: rgb(255, 255, 255);"></i></p>'
    },1000)
}