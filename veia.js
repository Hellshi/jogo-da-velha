let estilo = '' 


function ImagemFundo (id, classe) {

    document.getElementById(`${id}`).className = classe 
    document.getElementById(`${id}`).value = `${classe}`

    let a1 = document.getElementById('a1').value 
    let a2 = document.getElementById('a2').value 
    let a3 = document.getElementById('a3').value 
    let a4 = document.getElementById('a4').value 
    let a5 = document.getElementById('a5').value 
    let a6 = document.getElementById('a6').value 
    let a7 = document.getElementById('a7').value 
    let a8 = document.getElementById('a8').value 
    let a9 = document.getElementById('a9').value 

        if (a1 != undefined && a2 != undefined && a3 != undefined && (a1==a2 && a2==a3)) {

            alert(`${a1} Venceu!`)

        } else if (a4 != undefined && a5 != undefined && a6 != undefined && (a4==a5 && a5==a6)) {

            alert(`${a4} Venceu!`)

        } else if (a7 != undefined && a8 != undefined && a9 != undefined && (a7==a8 && a8==a9)) {

            alert(`${a7} Venceu!`)

        } else if (a1 != undefined && a5 != undefined && a9 != undefined && (a1==a5 && a5==a9)) {

            alert(`${a1} Venceu!`)

        } else if (a3 != undefined && a5 != undefined && a7 != undefined && (a3==a5 && a5==a7)) {

            alert(`${a3} Venceu!`)

        } else if ((a1 != undefined) && (a2 != undefined) && (a3 != undefined) 
            (a4 != undefined) && (a5 != undefined) && (a6 != undefined) (a7 != undefined) && (a8 != undefined) && (a9 != undefined) ) {

            alert(`Ninguém Venceu`)

        }

}












