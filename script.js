// Area of a Trapezoid Calculator by Timothy Veugelers

// Add Event Listener
document.getElementById("calcBtn").addEventListener("click", calculateArea);

// Functions
function calculateArea() {
    // Input
    let sideA = +document.getElementById("inA").value;
    let sideB = +document.getElementById("inB").value;
    let height = +document.getElementById("inHeight").value;

    // Process
    let trapezoidArea = ((sideA+sideB)*height)/2;
    // Output
    document.getElementById("areaOut").innerHTML = trapezoidArea;

}