import image from '../../images/image.jpg'
import seta from '../../images/seta.svg'
import './styles.css'
import { useParams } from 'react-router-dom'
import { listaBebidas } from '../../data/listaBebidas'


export default function BebidasSeparadas() {

    const { id } = useParams()

    const productSelect = listaBebidas.find(bebida => Number(id) === bebida.id)

    if(!productSelect) {
        return (
            <p>Produto não encontrado</p>
        )
    }

    let tamanho = productSelect.sabores.length
    console.log(tamanho)

    var rows = [];
    for (var i = 0; i < tamanho; i++) {
        // note: we are adding a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        rows.push(<div className='bolinha'></div>);
    }
    return (
        <>
            <div className='scroll'>
            <img className='imagemBlur' src={image} alt="" />
                {productSelect.sabores.map(({nome, img, preco, color}, index) => 
                    
                    <div key={index} className="background"> 

                        
                        <div className='setas'>
                            {index == 0 && <div className='nada'></div>}
                            {index !== 0 && <img  className='setaEsquerda'  onClick={() => {document.querySelector('.scroll').scroll({top: 0, left: ((window.screen.availWidth) / (index - 1)), behavior: 'smooth'})}} src={seta}/>}
                            {index !== tamanho - 1 && <img className='setaDireita'  onClick={() => {document.querySelector('.scroll').scroll({top: 0, left: ((index + 1) * (window.screen.availWidth)), behavior: 'smooth'})}} src={seta}/>}
                            {index == tamanho - 1 && <div className='nada'></div>}
                        </div>

                        {/* {(() => {
                            if(index == 0) {return (<div className='setaDireita'>D</div>)}
                        })()} */}
                    
                        <img className='imagem' src={img} alt="" />
                        <div className="textBox">
                            <span className="price">{preco}</span>
                            <span className="name">{productSelect.nome}</span>
                            <span style={{color: color}} className="sabor">{nome}</span>
                        </div>
                    </div> 
                )}
                
            </div>
            
        </>
    )
}