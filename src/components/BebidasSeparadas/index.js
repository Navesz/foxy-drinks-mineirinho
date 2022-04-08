import image from '../../images/image.jpg'
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
                        {(() => {
                            if(index !== tamanho - 1) {return (<div className='setaDireita'>D</div>)}
                        })()}

                        {index !== 0 && <div className='setaEsquerda'>E</div>}
                   
                    
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