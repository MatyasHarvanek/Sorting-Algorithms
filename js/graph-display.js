const canvas = document.getElementById("graph-canvas");
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
const ctx = canvas.getContext("2d");

const ItemCountInput = document.getElementById("ItemCountInput")
var currentCollum;

setInterval(Render, 0)

function Render() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    Update();
}

class Collum {
    constructor(value, collums) {
        this.collums = collums;
        this.y = canvas.height;
        this.value = value;
    }
    index() {
        return this.collums.indexOf(this);
    }
    render() {

        if (currentX == this.index()) {
            ctx.fillStyle = "red";
        }
        else {
            ctx.fillStyle = "black";
        }
        if (select_min) {
            if (select_min.index() == this.index()) {
                ctx.fillStyle = "blue";
            }
        }


        let width = (canvas.width - Collums.length) / Collums.length;
        ctx.fillRect(this.index() * width + this.index(), this.y, width, -this.value);
    }
}

var Collums = [];

function InitCollums(count) {
    Collums = [];
    for (let i = 1; i <= count; i++) {
        Collums.push(new Collum(i / count * (canvas.height - 100), Collums));
    }
}

ItemCountInput.addEventListener("input", () => {
    InitCollums(ItemCountInput.value);
});

function SwitchCollums(from, to) {
    var temp = Collums[from].value;
    Collums[from].value = Collums[to].value;
    Collums[to].value = temp;
}

//source:
//https://stackoverflow.com/questions/5306680/move-an-array-element-from-one-array-position-to-another
//author:
//https://stackoverflow.com/users/236139/reid
function array_move(old_index, new_index) {
    console.log(Collums.indexOf(Collums[old_index]));
    if (new_index >= Collums.length) {
        var k = new_index - Collums.length + 1;
        while (k--) {
            Collums.push(undefined);
        }
    }
    Collums.splice(new_index, 0, Collums.splice(old_index, 1)[0]);
};
//////////////////////////////////////////////////

InitCollums(10);

function Randomize() {
    Reset(false);
    let currentCount = Collums.length;
    for (var s = 0; s < 5; s++) {
        for (var i = 0; i < currentCount; i++) {
            var from = getRandomInt(currentCount - 1);
            var to = getRandomInt(currentCount - 1);
            SwitchCollums(from, to);
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function Update() {
    for (let i = 0; i < Collums.length; i++) {
        let collum = Collums[i];
        collum.render();
    }
}