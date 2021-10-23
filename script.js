const screen = document.getElementById("Screen");
const clear = document.getElementById('clear');
const backSpace = document.getElementById('backSpace');
const equal = document.getElementById('equal');
const digits = document.querySelectorAll('.digit');

//Click Event On every Button
for (var i = 0; i < digits.length; i++) {
    document.querySelectorAll('.digit')[i].addEventListener("click", function() {

        var innerText_ = this.innerText;
        if (innerText_ == "X") {
            innerText_ = "*";
        }
        console.log(innerText_);
        document.querySelector(".warningText").style.visibility = "hidden";
        screen.value = (screen.value + innerText_);
    });
}

//Click  Eventlistner on Clear btn
clear.addEventListener("click", function() {
    var empty = "";
    screen.value = empty;
});

//Click  Eventlistner on BackSpace
backSpace.addEventListener("click", function() {
    var lenght = screen.value.length;
    screen.value = screen.value.substr(0, lenght - 1);
});

//Click  Eventlistner on =  
equal.addEventListener("click", function() {
    var val = screen.value;
    val = val.trim();
    console.log(val);

    if (val == "") {
        screen.value = "";
        document.querySelector(".warningText").style.visibility = "visible";
        document.querySelector(".warningText").innerText = "! Please enter value.";
    } else if (val[0] == "*" || val[0] == "/" || val[0] == "-" || val[0] == "+"||val[0] == "%") {
        document.querySelector(".warningText").style.visibility = "visible";        
        document.querySelector(".warningText").innerText = "! Please enter digits first.";
        screen.value = "";
    } else {
        val = val.replace(/ /g, "");
        var calculation = eval(val);
        console.log(calculation);
        screen.value = calculation;
        document.querySelector(".warningText").style.visibility = "hidden";
    }
});

// eventListner on Keypresss
document.addEventListener("keypress", function(event) {
    console.log(event.key);
    var eventValue = event.key;
    screen.value = screen.value + eventValue;
    if (isNaN(eventValue)) {
        document.querySelector(".warningText").style.visibility = "visible";
        document.querySelector(".warningText").style.width = "60%";
        document.querySelector(".warningText").innerText = "! Please enter a valid value.";
    } else
        document.querySelector(".warningText").style.visibility = "hidden";
});

//OnInput Function
function onInputFunction() {
    document.querySelector(".warningText").style.visibility = "hidden";
}