$(document).ready(function() {

    var start = 0;

    var params = new URLSearchParams(window.location.search)

    var url = params.get('url');

    console.log('embedding ' + url)

    var iframe = document.createElement('iframe');
    iframe.setAttribute("id", "iframe");
    iframe.setAttribute("width", "100%");
    iframe.setAttribute("height", "100%");
    iframe.setAttribute("frameborder", "0");

    iframe.onload = function() {
        var end = Date.now();
        // document.getElementById("time").textContent = () + 'ms';
        var time = end - start;

        $("#overlay").hide();

        window.swal(
            'Finished!',
            'Loaded in ' + (time / 1000) + ' seconds',
        )
    }

    iframe.src = url;
    start = Date.now();

    // $('<div id="overlay"/>').css({
    //     position: 'fixed',
    //     top: 0,
    //     left: 0,
    //     "z-index": 2,
    //     width: '100&#37;',
    //     height: $(window).height() + 'px',
    //     background: 'black url(img/loading.gif) no-repeat center'
    // }).hide().appendTo('body');

    document.getElementById('container').appendChild(iframe);

});
