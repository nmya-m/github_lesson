function setup() {
  createCanvas(400, 400);
}
var PluralNoun1 = ""
var Name1 = ""
var Noun1 = ""
var LastName = ""
var PluralNoun2 = ""
var Place1 = ""
var PluralNoun3 = ""
var Place2 = ""
var PluralNoun4 = ""
var Noun2 = ""
var Adjective1 = ""
var Adjective2 = ""
var Noun3 = ""
var Noun4 = ""
var Noun5 = ""
var Verb1 = ""
var Adjective3 = ""

function print_story(){
  PluralNoun1 = document.getElementById("PluralNoun1").value
  Name1 = document.getElementById("Name1").value
  Noun1 = document.getElementById("Noun1").value
  LastName = document.getElementById("LastName").value
  PluralNoun2 = document.getElementById("PluralNoun2").value
  Place1 = document.getElementById("Place1").value
  PluralNoun3 = document.getElementById("PluralNoun3").value
  Place2 = document.getElementById("Place2").value
  PluralNoun4 = document.getElementById("PluralNoun4").value
  Noun2 = document.getElementById("Noun2").value
  Adjective1 = document.getElementById("Adjective1").value
  Adjective2 = document.getElementById("Adjective2").value
  Noun3 = document.getElementById("Noun3").value
  Noun4 = document.getElementById("Noun4").value
  Noun5 = document.getElementById("Noun5").value
  Verb1 = document.getElementById("Verb1").value
  Adjective3 = document.getElementById("Adjective3").value
  
  document.getElementById("story").innerHTML=(  "(To be read with enthusiasm!) Hello there, sports " + PluralNoun1 + "! This is " + Name1 + ", talking to you from the press " + Noun1 + " in " + LastName + " Stadium, where 57,000 cheering " + PluralNoun2 + " have gathered to watch (the) " + Place1 + " " + PluralNoun3 + " take on (the) " + Place2 + " " + PluralNoun4 + ". Even though the " + Noun2 + " is shining, it's a/an " + Adjective1 + " cold day with the temperature in the " + Adjective2 + " 20s. A strong " + Noun3 + " is blowing fiercely across the playing " + Noun4 + " that will definitely affect the passing " + Noun5 + ". We'll be back for the opening " + Verb1 + "-off after a few words from our " + Adjective3 + " sponsor.") 
}


function draw() {
  background(220);
   fill("black")
   rect(65, 150, 275, 150)
  fill("lightgrey")
  circle(290, 190, 50)
  circle(290, 260, 50 )
  rect(85, 170, 160, 20)
  rect(85, 200, 160, 75)
  stroke("black")
  line(90, 215, 235, 215)
  line(90, 225, 235, 225)
  line(90, 235, 235, 235)
  line(90, 245, 235, 245)
  line(90, 255, 235, 255)
  line(90, 265, 235, 265)
}