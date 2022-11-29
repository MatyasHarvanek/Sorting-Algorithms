function Order() {
    Reset(false);
    switch (AlgorithmSelect.value) {
        case "bubblesort":
            if (currentRunningInterval) {
                clearInterval(currentRunningInterval);
            }
            currentRunningInterval = setInterval(BubbleSortStep, 0);
            break;
        case "selectsort":
            if (currentRunningInterval) {
                clearInterval(currentRunningInterval);
            }
            currentRunningInterval = setInterval(SelectSortStep, 0);
            break;
    }
}