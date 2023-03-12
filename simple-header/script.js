const left = document.getElementById("left-side");

const handleMove = e => {
    const p = e.clientX / window.innerWidth * 100
    left.style.width = p +'%'
}

document.onmousemove = e => handleMove(e);

document.ontouchmove = e => handleMove(e.touches[0]);