let paintColor = 'Red'
const paint = (() => {
    return {
        changeColorToBlue: () => {
            paintcolor: 'Blue';
            return paintColor;
        },
        changeColorToGreen: () => {
            paintColor: 'Green';
            return paintColor;
        }
    }
})();

console.log(
    paint.changeColorToBlue()
);