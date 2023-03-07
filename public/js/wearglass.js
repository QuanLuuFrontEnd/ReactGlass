let stateglass = {
    glass: 1,
};
nextglass();
//function to change dress  
function nextglass() {
    
    let glass = document.querySelector("#glass");
    console.log(stateglass);
    if (stateglass.glass < 9) {
        stateglass.glass++;
        glass.setAttribute("class", `glass${stateglass.glass}`);
    } else if (stateglass.glass === 9) {
        stateglass.glass = 1;
        glass.setAttribute("class", `glass${stateglass.glass}`);
    }
}