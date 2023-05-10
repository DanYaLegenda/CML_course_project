

var xmlDoc;

if (typeof window.DOMParser != "undefined") {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "../url/list.xml", false);
    if (xmlhttp.overrideMimeType) {
        xmlhttp.overrideMimeType('text/xml');
    }
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
} else {
    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    xmlDoc.async = "false";
    xmlDoc.load("../url/list.xml");
}

const dishes = xmlDoc.getElementsByTagName("card");
var str = "";


for (let i = 0; i < dishes.length; i++) {
    const dist = dishes[i];
    const titleXML = dist.getElementsByTagName("title")[0].textContent;
    const textXML =  dist.getElementsByTagName("subtitle")[0].textContent;
    str += "<div class=\"card\"><div class=\"text\"><h2>" + titleXML +"</h2><p>" + textXML + "</p></div><a href=\"#\" class=\"button\">подробнее</a></div>";
}

document.getElementById("list").innerHTML += str;


