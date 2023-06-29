// const submitbutton = document.querySelector("#submit") 

document.querySelector("#submit").addEventListener("click", function(){


    const amharic = parseInt(document.querySelector("#am1").value) +
      parseInt(document.querySelector("#am2").value) + parseInt(document.querySelector("#am3").value) + parseInt(document.querySelector("#am4").value)

    const english = parseInt(document.querySelector("#en1").value) +
      parseInt(document.querySelector("#en2").value) + parseInt(document.querySelector("#en3").value) + parseInt(document.querySelector("#en4").value)

    const maths = parseInt(document.querySelector("#math1").value) +
      parseInt(document.querySelector("#math2").value) + parseInt(document.querySelector("#math3").value) + parseInt(document.querySelector("#math4").value)

    const science = parseInt(document.querySelector("#sc1").value) +
      parseInt(document.querySelector("#sc2").value) + parseInt(document.querySelector("#sc3").value) + parseInt(document.querySelector("#sc4").value)

    const sport = parseInt(document.querySelector("#sp1").value) +
      parseInt(document.querySelector("#sp2").value) + parseInt(document.querySelector("#sp3").value) + parseInt(document.querySelector("#sp4").value)



document.querySelector("#amharic").innerHTML = "Your amharic score is " + 
amharic
document.querySelector("#english").innerHTML = "Your english score is " + 
english
document.querySelector("#maths").innerHTML = "Your maths score is " + maths
document.querySelector("#science").innerHTML = "Your science score is " +
science
document.querySelector("#sport").innerHTML = "Your sport score is " + sport


const amAve = parseInt(amharic)
const enAve = parseInt(english)
const mathAve = parseInt(maths)
const scAve = parseInt(science)
const spAve = parseInt(sport)


const total = amAve + enAve + mathAve + scAve + spAve

const Average = total/5

document.querySelector("#total").innerHTML = "Your total score is " + total
document.querySelector("#Average").innerHTML = "Your average is " + Average

if(Average > 85) {
    document.querySelector("#grade").innerHTML = "Your grade is A"
} else if(Average > 75) {
     document.querySelector("#grade").innerHTML = "Your grade is B"
} else if(Average > 65) {
     document.querySelector("#grade").innerHTML = "Your grade is C"
} else if(Average > 50) {
     document.querySelector("#grade").innerHTML = "Your grade is D"
} else {
     document.querySelector("#grade").innerHTML = "Your grade is F"
}

})
