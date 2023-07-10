if (localStorage.getItem("Amharic1")) {
  const amharic1 = localStorage.getItem("Amharic1")

  document.querySelector("#am1").value = amharic1

}
if (localStorage.getItem("Amharic2")) {
  const amharic2 = localStorage.getItem("Amharic2")

  document.querySelector("#am2").value = amharic2

}
if (localStorage.getItem("Amharic3")) {
  const amharic3 = localStorage.getItem("Amharic3")

  document.querySelector("#am3").value = amharic3

}
if (localStorage.getItem("Amharic4")) {
  const amharic4 = localStorage.getItem("Amharic4")

  document.querySelector("#am4").value = amharic4

}


if (localStorage.getItem("English1")) {
  const english1 = localStorage.getItem("English1")

  document.querySelector("#en1").value = english1

}
if (localStorage.getItem("English2")) {
  const english2 = localStorage.getItem("English2")

  document.querySelector("#en2").value = english2

}
if (localStorage.getItem("English3")) {
  const english3 = localStorage.getItem("English3")

  document.querySelector("#en3").value = english3

}
if (localStorage.getItem("English4")) {
  const english4 = localStorage.getItem("English4")

  document.querySelector("#en4").value = english4

}


if (localStorage.getItem("Maths1")) {
  const maths1 = localStorage.getItem("Maths1")

  document.querySelector("#math1").value = maths1

}
if (localStorage.getItem("Maths2")) {
  const maths2 = localStorage.getItem("Maths2")

  document.querySelector("#math2").value = maths2

}
if (localStorage.getItem("Maths3")) {
  const maths3 = localStorage.getItem("Maths3")

  document.querySelector("#math3").value = maths3

}
if (localStorage.getItem("Maths4")) {
  const maths4 = localStorage.getItem("Maths4")

  document.querySelector("#math4").value = maths4

}


if (localStorage.getItem("Science1")) {
  const science1 = localStorage.getItem("Science1")

  document.querySelector("#sc1").value = science1

}
if (localStorage.getItem("Science2")) {
  const science2 = localStorage.getItem("Science2")

  document.querySelector("#sc2").value = science2

}
if (localStorage.getItem("Science3")) {
  const science3 = localStorage.getItem("Science3")

  document.querySelector("#sc3").value = science3

}
if (localStorage.getItem("Science4")) {
  const science4 = localStorage.getItem("Science4")

  document.querySelector("#sc4").value = science4

}


if (localStorage.getItem("Sport1")) {
  const sport1 = localStorage.getItem("Sport1")

  document.querySelector("#sp1").value = sport1

}
if (localStorage.getItem("Sport2")) {
  const sport2 = localStorage.getItem("Sport2")

  document.querySelector("#sp2").value = sport2

}
if (localStorage.getItem("Sport3")) {
  const sport3 = localStorage.getItem("Sport3")

  document.querySelector("#sp3").value = sport3

}
if (localStorage.getItem("Sport4")) {
  const sport4 = localStorage.getItem("Sport4")

  document.querySelector("#sp4").value = sport4

}

const save = document.querySelector("#save")

save.addEventListener("click", function() {

  const am1 = parseInt(document.querySelector("#am1").value)
  const am2 = parseInt(document.querySelector("#am2").value)
  const am3 = parseInt(document.querySelector("#am3").value)
  const am4 = parseInt(document.querySelector("#am4").value)

  const en1 = parseInt(document.querySelector("#en1").value)
  const en2 = parseInt(document.querySelector("#en2").value)
  const en3 = parseInt(document.querySelector("#en3").value)
  const en4 = parseInt(document.querySelector("#en4").value)

  const math1 = parseInt(document.querySelector("#math1").value)
  const math2 = parseInt(document.querySelector("#math2").value)
  const math3 = parseInt(document.querySelector("#math3").value)
  const math4 = parseInt(document.querySelector("#math4").value)

  const sc1 = parseInt(document.querySelector("#sc1").value)
  const sc2 = parseInt(document.querySelector("#sc2").value)
  const sc3 = parseInt(document.querySelector("#sc3").value)
  const sc4 = parseInt(document.querySelector("#sc4").value)

  const sp1 = parseInt(document.querySelector("#sp1").value)
  const sp2 = parseInt(document.querySelector("#sp2").value)
  const sp3 = parseInt(document.querySelector("#sp3").value)
  const sp4 = parseInt(document.querySelector("#sp4").value)




  const ama = localStorage.setItem("Amharic1", am1)
  const ama2 = localStorage.setItem("Amharic2", am2)
  const ama3 = localStorage.setItem("Amharic3", am3)
  const ama4 = localStorage.setItem("Amharic4", am4)

  const ene = localStorage.setItem("English1", en1)
  const ene2 = localStorage.setItem("English2", en2)
  const ene3 = localStorage.setItem("English3", en3)
  const ene4 = localStorage.setItem("English4", en4)

  const mam = localStorage.setItem("Maths1", math1)
  const mam2 = localStorage.setItem("Maths2", math2)
  const mam3 = localStorage.setItem("Maths3", math3)
  const mam4 = localStorage.setItem("Maths4", math4)

  const scs = localStorage.setItem("Science1", sc1)
  const scs2 = localStorage.setItem("Science2", sc2)
  const scs3 = localStorage.setItem("Science3", sc3)
  const scs4 = localStorage.setItem("Science4", sc4)

  const sps = localStorage.setItem("Sport1", sp1)
  const sps2 = localStorage.setItem("Sport2", sp2)
  const sps3 = localStorage.setItem("Sport3", sp3)
  const sps4 = localStorage.setItem("Sport4", sp4)

})


function clearRemove() {
  localStorage.clear()
}


const submitbutton = document.querySelector("#submit")

submitbutton.addEventListener("click", function() {

  const am1 = parseInt(document.querySelector("#am1").value)
  const am2 = parseInt(document.querySelector("#am2").value)
  const am3 = parseInt(document.querySelector("#am3").value)
  const am4 = parseInt(document.querySelector("#am4").value)

  const en1 = parseInt(document.querySelector("#en1").value)
  const en2 = parseInt(document.querySelector("#en2").value)
  const en3 = parseInt(document.querySelector("#en3").value)
  const en4 = parseInt(document.querySelector("#en4").value)

  const math1 = parseInt(document.querySelector("#math1").value)
  const math2 = parseInt(document.querySelector("#math2").value)
  const math3 = parseInt(document.querySelector("#math3").value)
  const math4 = parseInt(document.querySelector("#math4").value)

  const sc1 = parseInt(document.querySelector("#sc1").value)
  const sc2 = parseInt(document.querySelector("#sc2").value)
  const sc3 = parseInt(document.querySelector("#sc3").value)
  const sc4 = parseInt(document.querySelector("#sc4").value)

  const sp1 = parseInt(document.querySelector("#sp1").value)
  const sp2 = parseInt(document.querySelector("#sp2").value)
  const sp3 = parseInt(document.querySelector("#sp3").value)
  const sp4 = parseInt(document.querySelector("#sp4").value)

  const amharic = am1 + am2 + am3 + am4

  const english = en1 + en2 + en3 + en4

  const maths = math1 + math2 + math3 + math4

  const science = sc1 + sc2 + sc3 + sc4

  const sport = sp1 + sp2 + sp3 + sp4


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

  const Average = total / 5

  document.querySelector("#total").innerHTML = "Your total score is " + total
  document.querySelector("#Average").innerHTML = "Your average is " + Average

  if (Average == 100) {
    document.querySelector("#grade").innerHTML = "Your grade is A+"
  } else if (Average > 85) {
    document.querySelector("#grade").innerHTML = "Your grade is A"
  } else if (Average == 85) {
    document.querySelector("#grade").innerHTML = "Your grade is B+"
  } else if (Average > 75) {
    document.querySelector("#grade").innerHTML = "Your grade is B"
  } else if (Average == 75) {
    document.querySelector("#grade").innerHTML = "Your grade is C+"
  } else if (Average > 65) {
    document.querySelector("#grade").innerHTML = "Your grade is C"
  } else if (Average == 65) {
    document.querySelector("#grade").innerHTML = "Your grade is D+"
  } else if (Average > 50) {
    document.querySelector("#grade").innerHTML = "Your grade is D"
  } else {
    document.querySelector("#grade").innerHTML = "Your grade is F"
  }


})
