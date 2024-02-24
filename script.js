function generateLink() {
  var mobileNumber = document.getElementById("mobileNumber").value;
  var queryMsg = document.getElementById("queryMsg").value;
  if (mobileNumber.length === 10 && queryMsg) {
    var link = "https://wa.me/" + mobileNumber + "?text=" + encodeURIComponent(queryMsg);
    document.getElementById("whatsLink").innerText = "Generated link: " + 91+link;
    document.getElementById("whatsLink").style.display = "block";
  } else {
    alert("Please enter a 10-digit mobile number and a query message.");
  }
}
