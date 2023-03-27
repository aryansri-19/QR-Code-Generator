function generateQRCode() {
    let website = document.getElementById("website").value;
    if (website) {
      let qrcodeContainer = document.getElementById("qr");
      qrcodeContainer.innerHTML = "";
      new QRCode(qrcodeContainer, website); 
      document.getElementById("qrcontainer").style.display = "block";
      document.getElementById('qr').style.display = "block";
    } else {
      alert("Please enter a valid URL");
    }
}  