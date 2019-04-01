var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");

function scrollQuestion() {
    if (this.id == "q1") {
        q2.scrollIntoView(true);
    }

    if (this == "q2") {
        q3.scrollIntoView(true);
    }
}
