import styles from './card.module.scss'

type Props = {
    img: string;
}

const Card = ({img} : Props) => {
     return (
        <div className={styles.card}> 
            <img src={img} alt="imagens de dicas" />
        </div>
     )
}

export default Card;