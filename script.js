function generateLink() {
  var mobileNumber = document.getElementById("mobileNumber").value;
  var queryMsg = document.getElementById("queryMsg").value;
  if (mobileNumber.length === 12 && queryMsg) {
    var link = "https://wa.me/" + mobileNumber + "?text=" + encodeURIComponent(queryMsg);
    document.getElementById("whatsLink").innerText = "Generated link: "+ link;
    document.getElementById("whatsLink").style.display = "block";
  } else {
    alert("Please enter a 10-digit mobile number with Country Code and a query message.");
  }
}
