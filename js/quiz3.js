const grade  = (score) => {
    let classed = null
    if (score >= 81 && score <= 100) {
        classed = "A"
    } else if (score >=71 && score <=80) {
        classed = "B"
    } else if (score >=61 && score <=70) {
        classed = "C"
    } else if (score >= 51 && score <=60) {
        classed = "D"
    } else if (score >= 0 && score <= 50) {
        classed = "F"
    }
    return classed
}

console.log(grade(82))