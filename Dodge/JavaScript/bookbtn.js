
if (confirm('Do you want to be redirected to the demo video!')) {
window.onload = function() {
    // similar behavior as clicking on a link
    window.location.href = "https://youtu.be/gj3DGmXg5Sc";
}
} 
else {
  // Do nothing!
console.log('okay');
}

const bookbtn = document.getElementById("bookbtn");
bookbtn.addEventListener("click", () => {
    alert("You are gonna be redirected to the booking page!");
})
