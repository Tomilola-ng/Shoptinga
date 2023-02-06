let h_calcs = document.querySelectorAll('.h-calc');
let img__area = document.querySelectorAll('.img--area');
let rocket = document.querySelector('.rocket')

h_calcs.forEach(e => {
    if (e.clientWidth > 768) {
        let tall = e.offsetHeight
        e.style.height = tall + 'px' 
    }
})

function runAnim() {
    img__area.forEach(e => {
        e.classList.toggle('roll-in')
        rocket.classList.toggle('roll-in')
    })
}

function join() {
    document.getElementById('join--page').classList.toggle('dp-none')
}

runAnim()

setInterval(() => {
    runAnim()
}, 2000);

