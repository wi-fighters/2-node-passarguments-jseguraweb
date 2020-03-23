const printHeader = (stars, message) => {
    const defaultMessage = 'hi'
    let starsAbove = []
    let starsBelow = []
    let numOfStars = parseInt(stars, 10)

    if (!numOfStars || !message) {
        for (let i = 0; i < 10; i++) {
            starsAbove.push('*')
            starsBelow.push('*');
        }
        console.log(starsAbove.join(''));
        console.log(defaultMessage);
        console.log(starsBelow.join(''));
    } else {
        for (let i = 0; i < numOfStars; i++) {
            starsAbove.push('*')
            starsBelow.push('*');
        }
        console.log(starsAbove.join(''));
        console.log(message);
        console.log(starsBelow.join(''));
    }
}

module.exports = printHeader