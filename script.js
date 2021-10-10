const screen = document.getElementById("Screen");
const clear = document.getElementById('clear');
const backSpace = document.getElementById('backSpace');
const equal = document.getElementById('equal');
const digits = document.querySelectorAll('.digit');

for (var i = 0; i < digits.length; i++) {
    document.querySelectorAll('.digit')[i].addEventListener("click", function() {

        var innerText_ = this.innerText;
        if (innerText_ == "X") {
            innerText_ = "*";
        }
        console.log(innerText_);
        screen.value = (screen.value + innerText_);
    });
}

clear.addEventListener("click", function() {
    var empty = "";
    screen.value = empty;
});

backSpace.addEventListener("click", function() {
    var lenght = screen.value.length;
    screen.value = screen.value.substr(0, lenght - 1);
});
equal.addEventListener("click", function() {
    var val = screen.value;
    val = val.trim();
    console.log(val);

    if (val == "") {
        screen.value = "";
        document.querySelector(".warningText").style.display = "block";
    } else {
        val = val.replace(/ /g, "");
        var calculation = eval(val);
        console.log(calculation);
        screen.value = calculation;
        document.querySelector(".warningText").style.display = "none";
    }
});

document.addEventListener("keypress", function(event) {
    console.log(event.key);
    var eventValue = event.key;
    screen.value = screen.value + eventValue;
    if (isNaN(eventValue)) {
        document.querySelector(".warningText").style.display = "block";
        document.querySelector(".warningText").style.width = "60%";
        document.querySelector(".warningText").innerText = "! Please enter a valid value.";
    } else
        document.querySelector(".warningText").style.display = "none";
});