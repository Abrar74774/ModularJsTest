export const makeBig = (element) => {
    let elementHeight = parseFloat(getComputedStyle(element).height.replace(/\D/g, "\'")); //.replace eliminates \D i.e non digit characters (g is for global)
    element.style.height = elementHeight + 30 + "px";
    element.style.width = elementHeight + 30 + "px"; //Using elementHeight here because its equal to width
    console.log(elementHeight);

}