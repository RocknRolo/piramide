const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = "yellow";

width = ctx.canvas.width;
height = ctx.canvas.height;

let ph_box = document.querySelector(".pyramidHeight");
let bs_box = document.querySelector(".blockSize");

function buildPyramid() {

    let pyramidHeight = parseInt(ph_box.value);
    let blockSize = parseInt(bs_box.value);

    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < pyramidHeight; i++) {
        let xPos = (pyramidHeight - i - 1) * blockSize;
        for (let j = 0; j < i * 2 + 1; j++) {
            ctx.fillRect(xPos, blockSize * i, blockSize-1, blockSize-1);
            xPos += blockSize;
        }
    }
}
