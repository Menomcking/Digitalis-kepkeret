import './style.css';

function dark(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}
function urlchange(h){
    document.getElementById("img").src = h.currentTarget.value;
}
function widthchange(){
    document.getElementById("img").width = parseInt(document.getElementById("szelesseg").value);
}
function widenesschange(){
    document.getElementById("img").style.border = parseInt(document.getElementById("keretvastag").value) + "px solid" + document.getElementById("keretszin").value;
}
function colorchange(){
    document.getElementById("img").style.borderColor = document.getElementById("keretszin").value;
}
function refresh(){
    document.getElementById("darkmode").addEventListener("click", dark);
    document.getElementById("url").addEventListener("change", urlchange);
    document.getElementById("szelesseg").addEventListener("input", widthchange);
    document.getElementById("keretvastag").addEventListener("input", widenesschange);
    document.getElementById("keretszin").addEventListener("input", colorchange);
}
document.addEventListener("DOMContentLoaded", refresh);


