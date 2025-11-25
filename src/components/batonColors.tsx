import { useState } from 'react'
import base from '../assets/base.jpg'
import red from '../assets/vermelho.jpg'
import blue from '../assets/azul.jpg'
import brown from '../assets/marrom.jpg'
import starIcon from '../assets/five-stars-rating-icon-png 1.svg'
import styles from './batonColors.module.scss'


const BatonColors = () => {
    const [color, setColor] = useState<string>(base)

    return (
        <div className={styles.colorsContainer}>
            <img src={color} alt="cor selecionada" />
            <div className={styles.colorsContent}>
                <img src={starIcon} alt="" className={styles.starIcon}/>
                <h3>Matte Premium</h3>
                <p>Cores disponivel</p>
                <div className={styles.containerbutton}>
                    <button onClick={() => setColor(base)} className={styles.pink}></button>
                    <button onClick={() => setColor(red)} className={styles.red}></button>
                    <button onClick={() => setColor(blue)}  className={styles.blue}></button>
                    <button onClick={() => setColor(brown)}  className={styles.brown}></button>
                </div>
                <div className={styles.description}>
                <h3>Descrição</h3>
                    <p>
                        O Batom Matte possui uma fórmula inovadora desenvolvida para entregar o máximo de cor na primeira aplicação com um deslize suave e macio. 
                        Tem acabamento matte aveludado e manteiga de manga que ajuda a hidratar e a proteger os lábios contra ressecamento. 
                        Ajuda na hidratação dos lábios, textura fina e macia que não pesa nos lábios.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BatonColors;