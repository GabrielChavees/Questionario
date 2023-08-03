document.addEventListener('DOMContentLoaded', function() {
    currentStep = 4
    totalStep = 80
    let scoreEncumbrance = []
    let scoreKindness = []
    let scoreNeuroticism = []
    let scoreOpening = []
    let scoreConscientiosity = []
    function introduction() {
        document.querySelector('.box').style.display = "none"
        document.querySelector('.warnError').style.display = "none"
        let selectAllQuestions = document.querySelectorAll('.questions')
        selectAllQuestions.forEach(function(question) {
            question.style.display = "none"
        })
        document.querySelector(`.questions[data-step="${1}"]`).classList.add('fade-in')
        document.querySelector(`.questions[data-step="${1}"]`).style.display = "block"
        setTimeout(function() {
            document.querySelector(`.questions[data-step="${1}"]`).classList.remove('fade-in')
            document.querySelector(`.questions[data-step="${1}"]`).classList.add('fade-out')
            setTimeout(function() {
                document.querySelector(`.questions[data-step="${1}"]`).style.display = "none"
                document.querySelector(`.questions[data-step="${2}"]`).classList.add('fade-in')
                document.querySelector(`.questions[data-step="${2}"]`).style.display = "block"
                setTimeout(function() {
                    document.querySelector(`.questions[data-step="${2}"]`).classList.remove('fade-in')
                    document.querySelector(`.questions[data-step="${2}"]`).classList.add('fade-out')
                    setTimeout(function() {
                        document.querySelector(`.questions[data-step="${2}"]`).style.display = "none"
                        document.querySelector(`.questions[data-step="${3}"]`).classList.add('fade-in')
                        document.querySelector(`.questions[data-step="${3}"]`).style.display = "flex"
                    }, 1400)
                }, 1400)
            }, 1400)
        }, 1400)
    }
    introduction()
    document.getElementById('start').addEventListener('click', function(event) {
        event.preventDefault()
        document.querySelector(`.questions[data-step="${3}"]`).classList.remove('fade-in')
        document.querySelector(`.questions[data-step="${3}"]`).classList.add('fade-out')
        setTimeout(function() {
            document.querySelector(`.questions[data-step="${3}"]`).style.display = "none"
            document.querySelector('.box').classList.add('fade-in')
            document.querySelector(`.questions[data-step="${4}"]`).classList.add('fade-in')
            document.querySelector('.box').style.display = "flex"
            document.querySelector(`.questions[data-step="${4}"]`).style.display = "flex"
        }, 1400);  
    })
    document.getElementById('submit-button').addEventListener('click', function(event) {
        event.preventDefault() // 6.2
        let inputChecked = document.querySelector('input[name="select"]:checked')
        if(inputChecked === null) {
            document.querySelector('.warnError').style.display = "inline-flex"
            setTimeout(function() {
                document.querySelector('.warnError').style.display = "none"
            }, 2000)
        } else {
            let inputValue = Number(document.querySelector('input[name="select"]:checked').value)
            if(currentStep >= 4 && currentStep <= 18) {
                scoreEncumbrance.push(inputValue)
                console.log(scoreEncumbrance)
            } else if(currentStep >= 19 && currentStep <= 33) {
                scoreKindness.push(inputValue)
                console.log(scoreKindness)
            } else if(currentStep >= 34 && currentStep <= 48) {
                scoreNeuroticism.push(inputValue)
                console.log(scoreNeuroticism)
            } else if(currentStep >= 49 && currentStep <= 63) {
                scoreOpening.push(inputValue)
                console.log(scoreOpening)
            } else if(currentStep >= 64 && currentStep <= 78) {
                scoreConscientiosity.push(inputValue)
                console.log(scoreConscientiosity)
            }
            if(currentStep + 2 !== totalStep) {
                document.querySelector(`.box`).classList.remove('fade-in-04s')
                document.querySelector(`.questions[data-step="${currentStep}"]`).classList.remove('fade-in-04s')
                document.querySelector(`.box`).classList.add('fade-out-04s')
                document.querySelector(`.questions[data-step="${currentStep}"]`).classList.add('fade-out-04s')
                setTimeout(function() {
                    document.querySelector(`.box`).classList.remove('fade-out-04s')
                    document.querySelector(`.questions[data-step="${currentStep}"]`).classList.remove('fade-out-04s')
                    document.querySelector('.box').style.display = "none"
                    document.querySelector(`.questions[data-step="${currentStep}"]`).style.display = "none"
                    document.querySelector(`.quiz`).reset()
                    currentStep = 1 + currentStep
                    document.querySelector('.box').classList.add('fade-in-04s')
                    document.querySelector(`.questions[data-step="${currentStep}"]`).classList.add('fade-in-04s')
                    setTimeout(function() {
                        document.querySelector('.box').style.display = "flex"
                        document.querySelector(`.questions[data-step="${currentStep}"]`).style.display = "flex"
                    }, 380)
                }, 380)
            } else if(currentStep + 2 === totalStep) {
                let sumScoreEncumbrance = scoreEncumbrance.reduce(function(accumulator, currentValue) {
                    return accumulator + currentValue
                }, 0)
                let sumScoreKindness = scoreKindness.reduce(function(accumulator, currentValue) {
                    return accumulator + currentValue
                }, 0)
                let sumScoreNeuroticism = scoreNeuroticism.reduce(function(accumulator, currentValue) {
                    return accumulator + currentValue
                }, 0)
                let sumScoreOpening = scoreOpening.reduce(function(accumulator, currentValue) {
                    return accumulator + currentValue
                }, 0)
                let sumScoreConscientiosity = scoreConscientiosity.reduce(function(accumulator, currentValue) {
                    return accumulator + currentValue
                }, 0)
                let bestResult = Math.max(sumScoreEncumbrance, sumScoreKindness, sumScoreNeuroticism, sumScoreOpening, sumScoreConscientiosity)
                document.querySelector('.box').classList.remove('fade-in-04s')
                document.querySelector(`.questions[data-step="${currentStep}"]`).classList.remove('fade-in-04s')
                document.querySelector('.box').classList.add('fade-out-04s')
                document.querySelector(`.questions[data-step="${currentStep}"]`).classList.add('fade-out-04s')
                setTimeout(function() {
                    document.querySelector('.box').classList.remove('fade-out-04s')
                    document.querySelector(`.questions[data-step="${currentStep}"]`).classList.remove('fade-out-04s')
                    document.querySelector('.box').style.display = "none"
                    document.querySelector(`.questions[data-step="${currentStep}"]`).style.display = "none"
                    currentStep = 1 + currentStep
                    document.getElementById('loading').innerHTML = 'Calculando...'
                    document.querySelector(`.questions[data-step="${currentStep}"]`).classList.add('fade-in')   
                    document.querySelector(`.questions[data-step="${currentStep}"]`).style.display = "flex"
                    setTimeout(function() {
                        document.querySelector(`.questions[data-step="${currentStep}"]`).classList.remove('fade-in')
                        document.querySelector(`.questions[data-step="${currentStep}"]`).classList.add('fade-out') 
                        setTimeout(function() {
                            document.querySelector(`.questions[data-step="${currentStep}"]`).style.display = "none"
                            document.querySelector(`.questions[data-step="${currentStep}"]`).classList.remove('fade-out')
                            document.getElementById('loading').innerHTML = 'Quase lá...'                           
                            document.querySelector(`.questions[data-step="${currentStep}"]`).classList.add('fade-in')
                            document.querySelector(`.questions[data-step="${currentStep}"]`).style.display = "flex"
                            setTimeout(function() {
                                document.querySelector(`.questions[data-step="${currentStep}"]`).classList.remove('fade-in')
                                document.querySelector(`.questions[data-step="${currentStep}"]`).classList.add('fade-out')
                                setTimeout(function() {
                                    document.querySelector(`.questions[data-step="${currentStep}"]`).classList.remove('fade-out')
                                    document.querySelector(`.questions[data-step="${currentStep}"]`).style.display = "none"
                                    currentStep = 1 + currentStep
                                    document.querySelector(`.questions[data-step="${currentStep}"]`).classList.add('fade-in')
                                    document.querySelector(`.questions[data-step="${currentStep}"]`).style.display = "flex"
                                    if(bestResult === sumScoreEncumbrance) {
                                        document.getElementById('personality').innerHTML = `Extroversão`
                                    } else if(bestResult === sumScoreKindness) {
                                        document.getElementById('personality').innerHTML = `Amabilidade`
                                    } else if(bestResult === sumScoreNeuroticism) {
                                        document.getElementById('personality').innerHTML = `Neuroticismo`
                                    } else if(bestResult === sumScoreOpening) {
                                        document.getElementById('personality').innerHTML = `Abertura`
                                    } else if(bestResult === sumScoreConscientiosity) {
                                        document.getElementById('personality').innerHTML = `Conscienciosidade`
                                    }
                                }, 1480)
                            }, 1480)
                        }, 1480)
                    }, 1480)
                }, 380);
            }
        }
    })
})