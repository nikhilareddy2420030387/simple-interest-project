function calculateInterest() {
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let time = document.getElementById("time").value;

    if (principal && rate && time) {
        let simpleInterest = (principal * rate * time) / 100;
        document.getElementById("result").innerText = 
            "Simple Interest = " + simpleInterest;
    } else {
        document.getElementById("result").innerText = 
            "Please fill all fields.";
    }
}
