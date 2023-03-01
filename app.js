let bakeryitems = ["Muhammad", "Falana", "Dimkhan"]
let askuser = prompt("Please search anything here")

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    for(let i = 0; i <= bakeryitems.length; i++){
        for(let j = 0; j < 5;j++ ){
        if(askuser === bakeryitems[i] ){
            document.write("Yes this "+ askuser +" is available at index of " + [i+1]+"<br />");
        }
        else if(askuser !== bakeryitems){
            document.write(`your are not enough </br >`)
            continue
        }
    }
    }
}