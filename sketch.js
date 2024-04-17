function setup() {
  createCanvas(400, 400);
}
var PluralNoun1 = prompt("Give me a plural noun!")
var Name1 = prompt("Give me a name!")
var Noun1 = prompt("Give me a noun!")
var LastName = prompt("Give me a last name!")
var PluralNoun2 = prompt("Give me a plural noun!")
var Place1 = prompt("Give me a place!")
var PluralNoun3 = prompt("Give me a plural noun!")
var Place2 = prompt("Give me a place!")
var PluralNoun4 = prompt("Give me a plural noun!")
var Noun2 = prompt("Give me a noun!")
var Adjective1 = prompt("Give me an adjective!")
var Adjective2 = prompt("Give me an adjective!")
var Noun3 = prompt("Give me a noun!")
var Noun4 = prompt("Give me a noun!")
var Noun5 = prompt("Give me a noun!")
var Verb1 = prompt("Give me a verb!")
var Adjective3 = prompt("Give me an adjective!")

  console.log("(To be read with enthusiasm!) Hello there, sports " + PluralNoun1 + "! This is " + Name1 + ", talking to you from the press " + Noun1 + " in " + LastName + " Stadium, where 57,000 cheering " + PluralNoun2 + " have gathered to watch (the) " + Place1 + " " + PluralNoun3 + " take on (the) " + Place2 + " " + PluralNoun4 + ". Even though the " + Noun2 + " is shining, it's a/an " + Adjective1 + " cold day with the temperature in the " + Adjective2 + " 20s. A strong " + Noun3 + " is blowing fiercely across the playing " + Noun4 + " that will definitely affect the passing " + Noun5 + ". We'll be back for the opening " + Verb1 + "-off after a few words from our " + Adjective3 + " sponsor." )
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