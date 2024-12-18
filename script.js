// Get the DOM elements for the clock hands
let hr = document.getElementById("hour");
let min = document.getElementById("minute");
let sec = document.getElementById("second");

// Function to display the time
function displayTime() {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    // Hour hand rotates 30 degrees per hour + 0.5 degrees per minute
    let hRotation = 30 * hh + mm / 2 + 90; // Add 90 for initial offset (adjust to 90° if needed)
    let mRotation = 6 * mm + 90; // Add 90 for initial offset (adjust to 90° if needed)
    let sRotation = 6 * ss + 90; // Add 90 for initial offset (adjust to 90° if needed)

    // Convert degrees to radians and calculate the rotation matrix
    let hRadians = hRotation * Math.PI / 180;
    let mRadians = mRotation * Math.PI / 180;
    let sRadians = sRotation * Math.PI / 180;

    // For hour hand
    let hA = Math.cos(hRadians).toFixed(6);
    let hB = Math.sin(hRadians).toFixed(6);
    let hC = (-Math.sin(hRadians)).toFixed(6);
    let hD = Math.cos(hRadians).toFixed(6);

    // For minute hand
    let mA = Math.cos(mRadians).toFixed(6);
    let mB = Math.sin(mRadians).toFixed(6);
    let mC = (-Math.sin(mRadians)).toFixed(6);
    let mD = Math.cos(mRadians).toFixed(6);

    // For second hand
    let sA = Math.cos(sRadians).toFixed(6);
    let sB = Math.sin(sRadians).toFixed(6);
    let sC = (-Math.sin(sRadians)).toFixed(6);
    let sD = Math.cos(sRadians).toFixed(6);

    // Apply rotation to the clock hands
    hr.style.transform = `matrix(${hA}, ${hB}, ${hC}, ${hD}, 0, 0)`;
    min.style.transform = `matrix(${mA}, ${mB}, ${mC}, ${mD}, 0, 0)`;
    sec.style.transform = `matrix(${sA}, ${sB}, ${sC}, ${sD}, 0, 0)`;
}

// Update the clock every second
setInterval(displayTime, 1000);
