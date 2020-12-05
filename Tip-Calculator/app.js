//user bill input
let userbill = document.getElementById("bill");
//slider variables
let slider = document.getElementById("range");
let peopleSlider = document.getElementById("peopleRange");
//slider value text
let output = document.getElementById("tipValue");
let peopleOutput = document.getElementById("peopleTotal");
//bill calculation display variables
let tipPerPerson = document.getElementById("tipPp");
let totalTip = document.getElementById("tipTotal");
let totalBill = document.getElementById("totalBill");


//value for sliders display and default number values
output.innerHTML = slider.value + "%";
peopleOutput.innerHTML = peopleSlider.value;
totalBill.innerHTML = "$0.00";
//total amount function
userbill.oninput = function () {
    totalBill.innerHTML = "$" + userbill.value;
}
//value change on slider slide
slider.oninput = function () {
    if (userbill.value == null || userbill.value === "") {
        userbill.value = 0.00;
    }
    output.innerHTML = this.value + "%";
    const tip = (this.value / 100 * userbill.value).toFixed(2);
    totalTip.innerHTML = "$" + tip;
    totalBill.innerHTML = "$" + (parseFloat(tip) + parseFloat(userbill.value)).toFixed(2);

}

peopleSlider.oninput = function () {
    peopleOutput.innerHTML = this.value;
    const tip = (slider.value / 100 * userbill.value).toFixed(2);
    tipPerPerson.innerHTML = "$" + (tip / this.value).toFixed(2);
}