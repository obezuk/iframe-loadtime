<!doctype html>
<html class="no-js" lang="">

<head>
    <meta charset="utf-8">
    <title>Test Webpage Load Time</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body,
        html {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden;
        }
        
        #overlay {
            position: fixed;
            /* Sit on top of the page content */
            /* display: none; */
            /* Hidden by default */
            width: 100%;
            /* Full width (cover the whole page) */
            height: 100%;
            /* Full height (cover the whole page) */
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            /* Black background with opacity */
            z-index: 200;
            /* Specify a stack order in case you're using a different order for other elements */
            cursor: pointer;
            /* Add a pointer on hover */
        }
        
        .loading {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
        }
        
        .loader {
            left: 50%;
            margin-left: -4em;
            font-size: 10px;
            border: .8em solid rgba(218, 219, 223, 1);
            border-left: .8em solid rgb(16, 1, 224);
            animation: spin 1.1s infinite linear;
        }
        
        .loader,
        .loader:after {
            border-radius: 50%;
            width: 8em;
            height: 8em;
            display: block;
            position: absolute;
            top: 50%;
            margin-top: -4.05em;
        }
        
        @keyframes spin {
            0% {
                transform: rotate(360deg);
            }
            100% {
                transform: rotate(0deg);
            }
        }
        
        #container {
            width: 100vw;
            height: 100vh;
            position: relative;
        }
        
        #iframe {
            position: absolute;
            left: 0;
            z-index: 100;
            right: 0;
            bottom: 0;
            top: 0px;
        }
    </style>
</head>

<body>
    <div id="container">
        <div id="overlay">
            <div class="loading">
                <div class="loader"></div>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs=" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src="index.js"></script>
</body>

</html>
