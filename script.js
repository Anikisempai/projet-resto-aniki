let prenom = "Medy";
let age = 31
let nomdefamille ="Schot"
console.log("je m'appelle " +prenom+" " +nomdefamille+ " et j'ai "+age+" ans.")

let nombre1 = 22
let nombre2 = 12
let nombre3 = 16
let nombre4 = 15
console.log((nombre1*nombre2)-nombre3*nombre4)

if(age > 18 && age < 50){
    console.log("adulte");

} else if(age <= 3) {
    console.log("bébé");


} else if(age > 3 && age <18) {
    console.log("ado");

} else if(age > 50 && age< 80){
    console.log("vieillard")

} else if(age > 80) {
    console.log("tu vas crever"); 
}
let medy = "Medy"
let carre = document.querySelector(".carre")
console.log(carre)
carre.addEventListener("click",()=>{

    carre.style.backgroundColor= "blue"
});

let input = document.querySelector(".input");
input.addEventListener("input",()=>{
    console.log(input.value)
})
let bonnuméro = 278
if(input.value = bonnuméro){
    console.log("GAGNE")
} else if {()

}