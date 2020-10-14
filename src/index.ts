import { menuPral } from './view/menuPral'
import { leerTeclado } from './view/entradaTeclado'
const main = async () => {
    let n: number
    do {
        n = await menuPral()
        switch(n){
            case 1:
                console.log("Opcion Triangulo")
                let base: number
                let altura: number
                let lado2: number
                let lado3: number
                altura =  parseInt( await leerTeclado('Establece la altura')) 
                base =  parseInt( await leerTeclado('Establece la base')) 
                lado2 =  parseInt( await leerTeclado('Establece el lado2'))
                lado3 =  parseInt( await leerTeclado('Establece el lado3')) 
                console.log(`El area es: ${areaT(base, altura)}`)
                console.log(`El perimetro es: ${perimetroT(base, lado2, lado3)}`)
                break
            case 2:
                console.log("Opcion Cuadrado")
                let lado: number
                lado =  parseInt( await leerTeclado('Establece un lado')) 
                console.log(`El area es: ${areaC(lado)}`)
                console.log(`El perimetro es: ${perimetroC(lado)}`)
                break
            case 3:
                console.log("Opcion Circulo")
                let radio: number
                radio =  parseInt( await leerTeclado('Establece el radio')) 
                console.log(`El area es: ${areaCir(radio)}`)
                console.log(`El perimetro es: ${perimetroCir(radio)}`)
                break
            case 0:
                console.log('\nAdios')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    }while (n != 0)
}
const sumar = async () => {
    let n1: number
    let n2: number
    n1 =  parseInt( await leerTeclado('Dame un número')) 
    n2 =  parseInt( await leerTeclado('Dame otro número'))
    console.log(`La suma es ${n1 + n2}`)
}

//Operaciones triangulo
const areaT = (base: number, altura: number): number => (base + altura) / 2
const perimetroT = (base: number, lado2: number, lado3: number): number => base + lado2 + lado3


//Operaciones cuadrado
const areaC = (lado: number): number => lado * lado
const perimetroC = (lado: number): number => lado + lado + lado + lado

//Operaciones circulo
const areaCir = (radio: number): number => 2 * 3.1415 * radio
const perimetroCir = (radio: number): number => 3.1415 * (radio * radio)
main()