function reverseString() {
    const inputString = document.getElementById("inputString").value;
    let reversedString = "";

    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString[i];
    }

    document.getElementById("outputString").innerText = reversedString;
}