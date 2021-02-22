var start = 0;

var defaultURL = 'https://httpbin.org/anything';

document.getElementById("url").value = defaultURL
document.getElementById("time").textContent = 'loading...';

var iframe = document.createElement('iframe');

iframe.onload = function() {
    var end = Date.now();
    document.getElementById("time").textContent = (end - start) + 'ms';
}

iframe.src = 'https://httpbin.org/anything';
start = Date.now();

document.body.appendChild(iframe);

document.querySelector("#addressbar").addEventListener("submit", function(e) {
    e.preventDefault();
    var address = document.getElementById("url").value;
    document.getElementById("time").textContent = 'loading...';
    iframe.src = address;
    start = Date.now();
    return false;
});
