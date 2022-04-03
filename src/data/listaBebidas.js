//import caipifrutaMorango from '../images/bebidasSeparadas/caipifrutaMorango.jpeg'
import malvadao from '../images/bebidasSeparadas/malvadao.jpeg'
import muralha from '../images/bebidasSeparadas/muralha.jpeg'
import nutellaHot from '../images/bebidasSeparadas/nutellaHot.jpeg'

import blueGin from '../images/bebidasSeparadas/blueGin.jpg'
import caipirinhaMaracuja from '../images/bebidasSeparadas/caipirinhaMaracuja.jpg'
import caipirinhaMorango from '../images/bebidasSeparadas/caipirinhaMorango.jpg'
import caipirinhaLimao from '../images/bebidasSeparadas/caipirinhaLimao.jpg'
import cubaLibre from '../images/bebidasSeparadas/cubaLibre.jpg'
import ginTropical from '../images/bebidasSeparadas/ginTropical.jpg'
import sexOnBeach from '../images/bebidasSeparadas/sexOnBeach.jpg'
import schweppes from '../images/bebidasSeparadas/schweppes.jpg'
import sodaItalianaLimao from '../images/bebidasSeparadas/sodaItalianaLimao.jpg'
import sodaItalianaAbacaxi from '../images/bebidasSeparadas/sodaItalianaAbacaxi.jpg'
import pinaColada from '../images/bebidasSeparadas/pinaColada.jpg'
import transilvania from '../images/bebidasSeparadas/transilvania.jpg'

export const listaBebidas = [
    { 
        id: 0,
        nome: 'Caipirinha' ,
        preco: 'R$14,99',
        img: caipirinhaMorango,
        sabores: [
            {nome: 'Limão', img: caipirinhaLimao, preco: '', color: '#A9F13E'}, 
            {nome: 'Morango', img: caipirinhaMorango, preco: '', color: '#FF6645'}, 
            {nome: 'Maracujá', img: caipirinhaMaracuja, preco: '', color: '#EFBE47'},
        ]
    },
    { 
        id: 1,
        nome: 'Caipivodka' ,
        preco: 'R$19,99',
        img: caipirinhaLimao,
        sabores: [
            {nome: 'Morango', img: caipirinhaMorango, preco: '', color: 'FF6645'}, 
            {nome: 'Maracujá', img: caipirinhaMaracuja, preco: '', color: 'EFBE47'}, 
            {nome: 'Abacaxi', img: '', preco: ''}, 
        ]
    },
    { 
        id: 2,
        nome: 'Piña Colada' ,
        preco: 'R$19,99',
        img: pinaColada,
        sabores: [{nome: '', img: pinaColada, preco: ''}]
    },
    { 
        id: 3,
        nome: 'Gin Tônica' ,
        preco: 'R$24,99',
        img: transilvania,
        sabores: [
            {nome: 'Transilvania', img: transilvania, preco: ''}, 
            {nome: 'Schweppes Citrus', img: schweppes, preco: '', color: '#DFF13E'}
        ]
    },
    { 
        id: 4,
        nome: 'Gin Tropical' ,
        preco: 'R$14,99',
        img: blueGin,
        sabores: [
            {nome: 'BlueGin', img: blueGin, preco: '', color: '#5BD7F1'}, 
            {nome: 'Normal', img: ginTropical, preco: '', color: '#DFF13E'}
        ]
    },
    { 
        id: 5,
        nome: 'Cuba Libre' ,
        preco: 'R$19,99',
        img: cubaLibre,
        sabores: [{nome: '', img: cubaLibre, preco: '', color: '#A47676'}]
    },
    { 
        id: 6,
        nome: 'Nutella Hot' ,
        preco: 'R$19,99',
        img: nutellaHot,
        sabores: [{nome: '', img: nutellaHot, preco: ''}]
    },
    { 
        id: 7,
        nome: 'Muralha' ,
        preco: 'R$19,99',
        img: muralha,
        sabores: [{nome: '', img: muralha, preco: ''}]
    },
    { 
        id: 8,
        nome: 'Malvadão' ,
        preco: 'R$19,99',
        img: malvadao,
        sabores: [{nome: '', img: malvadao, preco: ''}]
    },

]

