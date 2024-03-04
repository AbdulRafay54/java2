
let userName = prompt("Please enter your name:");


if (userName !== null && userName !== "") {

  alert("Hello, " + userName + "! Welcome!");
} else {

  alert("Hello, anonymous user! Welcome!");
}


   
    let userInput = prompt("Enter a number to display its multiplication table:");

    
    let number = parseInt(userInput);

    
    if (!isNaN(number)) {
      document.write("<h2>Multiplication Table of " + number + "</h2>");
      document.write("<ul>");
      for (let i = 1; i <= 10; i++) {
        let result = number * i;
        document.write("<li>" + number + " x " + i + " = " + result + "</li>");
      }
      document.write("</ul>");
    } else {
    
      document.write("<h2>Multiplication Table of 5 ( By Default)</h2>");
      document.write("<ul>");
      for (let i = 1; i <= 10; i++) {
        let result = 5 * i;
        document.write("<li>5 x " + i + " = " + result + "</li>");
      }
      document.write("</ul>");
    }
    // 9-11
    let subject1 = prompt("Enter Your First Subject");
    let subject2 = prompt("Enter Your Second Subject");
    let subject3 = prompt("Enter Your Third Subject");
    
    let totalMarks = 100
    let obtainedMarks1 = prompt("Enter obtained marks for  " + subject1 + "    ");
    let obtainedMarks2 = prompt("Enter obtained marks for   " + subject2 + "    ");
    let obtainedMarks3 = prompt("Enter obtained marks for   " + subject3 + "    ");
    
    let totalObtainedMarks = (obtainedMarks1 + obtainedMarks2 + obtainedMarks3);
    let percentage = (totalObtainedMarks *100 / totalMarks  );
    
    document.write("<h2> Result </h2>")
    document.write(" <b> Subject </b>--------- <b> Total Marks </b> -------- <b>  Obtained Marks </b> ");
    document.write(  + subject1 + "" + totalMarks + "" + obtainedMarks1 + "");
    document.write( + subject2 + "" + totalMarks + "" + obtainedMarks2 + "");
    document.write( + subject3 + "" + totalMarks + "" + obtainedMarks3 + "");
    document.write("<p>Total Marks Obtained: " + totalObtainedMarks + "</p>");
    document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");



   

