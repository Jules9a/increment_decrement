let nbox = document.querySelector("#number_box")

const min = document.querySelector("#minus")

const plus = document.querySelector("#plus")

const reset = document.querySelector("#reset")

let initial = 0;






plus.addEventListener('click', function() {

    // initial = initial + 1

    let existing_number = nbox.value;
    initial = existing_number

    initial ++;
    nbox.value = initial
})


min.addEventListener('click', () => {
    // initial = initial - 1;

    let existing_number = nbox.value;
    initial = existing_number

    initial --;
    nbox.value = initial;
})


reset.addEventListener('click', function () {
    initial = 0;
    nbox.value = initial;
})