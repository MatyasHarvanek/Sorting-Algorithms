const AlgorithmSelect = document.getElementById("algorithm-select");
const ItemInput = document.getElementById("item-input");

let currentRunningInterval;
let currentI = 0;
let currentX = 0;

let select_min = 0;

let completed = [];


ItemCountInput.addEventListener("input", () => {

    Reset(false);
});








function BubbleSortStep() {
    if (currentI < Collums.length) {
        if (currentX < Collums.length - currentI - 1) {
            let currentCollum = Collums[currentX];
            let nextCollum = Collums[currentX + 1];
            if (currentCollum.value > nextCollum.value) {
                SwitchCollums(currentCollum.index(), nextCollum.index());
            }
            currentX++;
        }
        else {
            currentI++;
            currentX = 0;
        }
    }
    else {
        clearInterval(currentRunningInterval);
    }
}

function SelectSortStep() {
    if (currentI < Collums.length - 1) {
        if (currentX < Collums.length - 1) {
            if (currentI == 9) {
                console.log("jsee");
            }

            if (currentX == currentI) {
                select_min = Collums[currentX];
            }
            let currentCollum = Collums[currentX];
            if (currentCollum.value <= select_min.value) {
                select_min = Collums[currentX];
            }
            currentX++;
        }
        else {
            SwitchCollums(select_min.index(), currentI);
            currentI++;
            currentX = currentI;
        }
    }
    else {
        clearInterval(currentRunningInterval);
    }
}


let selected;
function InsertSortStep() {

    if (currentI < Collums.length) {
        selected = Collums[currentI];
        if (currentX >= 0) {
            let currentCollum = Collums[currentX];
            let nextCollum = Collums[currentX - 1]
            if (selected.value > nextCollum.value) {
               
            }



            currentX--;
        }
        else {
            currentI++;
            currentX = currentI;
        }
    }
    else {
        clearInterval(currentRunningInterval);
    }
}



function Reset(psoitionReset = true) {
    clearInterval(currentRunningInterval);
    currentI = 0;
    currentX = 0;
    select_min = null;
    if (psoitionReset == true) {
        InitCollums(ItemCountInput.value);
    }
}

// function BubbleSortFull() {

//     for (let i = 0; i < Collums.length; i++) {
//         for (let x = 0; x < Collums.length - i - 1; x++) {
//             let currentCollum = Collums[x];
//             let nextCollum = Collums[x + 1];

//             console.log(currentCollum);
//             if (currentCollum.value > nextCollum.value) {
//                 SwitchCollums(currentCollum.index, nextCollum.index);
//             }
//         }
//     }
// }