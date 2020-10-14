import { leerTeclado } from '../view/entradaTeclado'

export const menuPral = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Triangulo')
    console.log('2.- Cuadrado')
    console.log('2.- Circulo')
    console.log('0.- Salir')
    n = parseInt( await leerTeclado('opción: ') )
    return n
}