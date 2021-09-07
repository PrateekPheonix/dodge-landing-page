const myform = document.getElementById("myform");
const first = document.getElementById("first");
const last = document.getElementById("last");
const submit = document.getElementById("submit");

var today = new Date();
var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days

function setCookie(name, id) {
    var element = document.getElementById(id);
    var elementValue = escape(element.value);
    document.cookie = name + "=" + elementValue + "; path=/; expires=" + expiry.toGMTString();
    console.log(document.cookie);
}

function displayCookieValue(name) {
    var value = getCookie(name);
    var element = document.getElementById("value");
    element.innerHTML = "Cookie name: "+ name + ", value " + value;

}

function getCookie(name) {
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
  }

submit.addEventListener("submit",()=>{
  setCookie('first', 'first')
  setCookie('last', 'last')
})
