const handleClick = () => {
  var username = document.getElementById("exampleInputEmail1").value;
  var password = document.getElementById("exampleInputPassword1").value;
  console.log(username);
  console.log(password);
  if (username === "admin" && password === "123456") {
    //console.log("correct");
    alert("Correct");
    location.href = "hompage.html";
  } else {
    //console.log("Incorrect");
    document.getElementById("alert").style.display = "flex";
    //alert("Incorrect");
  }
};
