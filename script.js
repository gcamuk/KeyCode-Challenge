keycode = () => {
    let key = event.keyCode;
    let keyStroke = event.key;
    let keyCode = event.code;
    document.getElementById("key-result").innerHTML = keyStroke;
    document.getElementById("event-result").innerHTML = key;
    document.getElementById("event-code").innerHTML = keyCode;
}




