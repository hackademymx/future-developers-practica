dia = 1
function semana(dia){
    switch(dia){
        case 1:
            return 'Lunes'
            break
        case 2:
            return 'Martes'
            break
        case 3:
            return 'Miércoles'
            break
        case 4:
            return 'Jueves'
            break
        case 5:
            return 'Viernes'
            break
        case 6: 
            return 'Sabado'
            break
        case 7:
            return 'Domingo'
            break
        default:
            return 'No existe'
            break
    }
}

let dia1=semana(1)
let dia2=semana(3)
console.log(`Hoy es ${dia1}`)
console.log(`Hoy es ${dia2}`)