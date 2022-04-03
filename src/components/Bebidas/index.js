import './styles.css'
import img from '../../images/19.png'
import seta from '../../images/seta.svg'
import { listaBebidas } from '../../data/listaBebidas'
import { useNavigate } from 'react-router-dom'

export default function Bebidas() {
    const navigation = useNavigate()
    console.log(listaBebidas)
    return (
        <>
            {listaBebidas.map((bebida, index) => (
                <div onClick={() => navigation(`/bebidas/${bebida.id}`)} key={index} className="bebidas">
                    <div className="imgContente">
                        <img src={bebida.img} />
                    </div>
                    <div className="text">
                        <span>{bebida.nome}</span>
                        <span>{bebida.preco}</span>
                    </div>
                    <div className="buttonDetail">
                        <img src={seta} alt="" />
                    </div>
                </div>
            ))}

        </>
    )
}