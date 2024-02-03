let navIcon = document.querySelector('.navIcon');
let navCnt = document.querySelector('.navCnt');
let icon_divs = document.querySelector('.navIcon').querySelectorAll('div');

function toggle(){
    navCnt.classList.toggle('hide');
    icon_divs.forEach(function(div){
        div.classList.toggle('lines')
    })
}

navIcon.addEventListener('click', toggle)
document.addEventListener('click', function(evt){
    console.log(!navCnt.classList.contains('hide'))
    console.log(!navCnt.parentElement.contains(evt.target))
    if(!navCnt.classList.contains('hide') && !navCnt.parentElement.contains(evt.target)) {
        toggle();
    }
    console.log(!navCnt.classList.contains('hide'))
    console.log(!navCnt.parentElement.contains(evt.target))
})
