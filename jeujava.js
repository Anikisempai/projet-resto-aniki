let min = 1
    max = 1000
    bon = Math.floor(Math.random() * max)+1;
    target = document.querySelector(".target");
    restart = document.querySelector(".restart");
    bouton = document.querySelector(".bouton");
    p = document.querySelector("p");
    tentative = 0
    restart.style.display = "none"
    prenom = ["Medy","Mathis","Jill","Mathilde","Alberto","Vrastuvrich","Ju",]
        prenom.forEach(prenom => {
            if (prenom.length >=5){
            console.log(prenom)
            }
        });

bouton.addEventListener("click",()=>{
    let input = document.querySelector(".input").value;
    console.log(input);
    let result = Math.abs(bon - input)
        console.log(result)

  if (tentative<=10) {
     if (result >= 500){
         console.log("Très Froid");
         target.innerHTML="<h5>Très froid</h5>"  

     } else if (result >= 200){
         console.log("Froid");
         target.innerHTML="<h5>Froid</h5>" 

     } else if (result >= 75){
         console.log("Chaud");
         target.innerHTML="<h5>Chaud</h5>"

     } else if (result >= 20){
         console.log("très chaud");
         target.innerHTML="<h5>Très chaud</h5>"

        } else if (result >= 10){
            console.log("Bouillant poto");
            target.innerHTML="<h5>Très chaud</h5>"

    } else if (result >= 5){
        console.log("Tu brûles");
        target.innerHTML="<h5>Tu brûles</h5>"

    } else if (result >= 1){
        console.log("Tu me touches là frère");
        target.innerHTML="<h5>Tu me touches là</h5>"

     } else if(result === 0){
        console.log("BON");
        target.innerHTML="<h5>GG EZ NICE TUTO</h5>"
     }
        tentative++;

  } else {
        p.innerHTML= "Vous avez dépassé le nombre de tentatives possibles !"
        bouton.style.display = "none" 
        restart.style.display = "block" 

  
  }

  
   
    

});

 