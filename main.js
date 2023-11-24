// event listener
document.getElementById("btn").addEventListener("click", btnClicked);
// function
function btnClicked() {
  // let statements
  let output1 = document.getElementById("output-1");
  let output2 = document.getElementById("output-2");
  let output3 = document.getElementById("output-3");
  let output4 = document.getElementById("output-4");

  let score = 0;

  let input1 = document.getElementById("input-1").value.toLowerCase();
  let input2 = document.getElementById("input-2").value.toLowerCase();
  let input3 = document.getElementById("input-3").value.toLowerCase();
  let input4 = document.getElementById("input-4").value.toLowerCase();

  // if statement Q1
  if (input1 === "yes") {
    output1.innerHTML = "Correct!";
    score++;
  } else {
    output1.innerHTML = "Incorrect";
  }

  // if statemnt Q2
  if (input2 === "ubisoft") {
    output2.innerHTML = "Correct!";
    score++;
  } else if (input2 === "Tom Clancy") {
    output2.innerHTML = "Correct!";
  } else {
    output2.innerHTML = "Incorrect";
  }

  // if statement Q3
  if (input3 === "70") {
    output3.innerHTML = "Correct!";
    score++;
  } else {
    output3.innerHTML = "Incorrect";
  }

  // if statement Q4
  if (input4 === "sledge") {
    output4.innerHTML = "Correct!";
    score++;
  } else {
    output4.innerHTML = "Incorrect";
  }

  let percentage = score * 25;
  document.getElementById("score").innerHTML = `${score}/4 ${percentage}%`;

  if (score === 0) {
    document.getElementById("feedback").innerHTML = "Keep Trying.";
  } else if (score === 1) {
    document.getElementById("feedback").innerHTML = "Try Harder!";
  } else if (score === 2) {
    document.getElementById("feedback").innerHTML = "Nice job!";
  } else if (score === 3) {
    document.getElementById("feedback").innerHTML = "Great work!";
  } else {
    document.getElementById("feedback").innerHTML = "Excellent!";
  }
}
