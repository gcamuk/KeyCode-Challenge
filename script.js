keycode = () => {
    let key = event.keyCode;
    let keyStroke = event.key;
    let keyCode = event.code;
    // console.log(key);
    // console.log(keyStroke);
    // console.log(keyCode);

    document.getElementById("key-result").innerHTML = keyStroke;
    document.getElementById("event-result").innerHTML = key;
    document.getElementById("event-code").innerHTML = keyCode;
}




