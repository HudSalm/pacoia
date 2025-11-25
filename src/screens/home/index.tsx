import Header from "../../components/header"
import Footer from '../../components/footer'
import Banner from "../../components/banner";
import Card from "../../components/card";
import ImgBanner from '../../assets/ImgBanner.jpg'
import ImgBanner2 from '../../assets/ImgBanner2.jpg'
import CardLips from "../../assets/CardLips.jpg";
import CardEyes from "../../assets/CardEyes.jpg";
import CardFace from "../../assets/CardFace.jpg";
import CardTendecy from "../../assets/CardTendency.jpg";
import styles from './index.module.scss'
import BatonColors from "../../components/batonColors";


const Home = () => {
    return (
        <body>
            <Header/>
            <main>
                <section>
                    <Banner 
                        Img={ImgBanner}
                    />
                </section>
                <article className={styles.looks}>
                    <h1>LOOKS E DICAS DE MAQUIAGEM</h1>
                    <div className={styles.cards}>
                        <Card 
                            img={CardLips}
                        />
                        <Card 
                            img={CardEyes}
                        />
                        <Card 
                            img={CardFace}
                        />
                        <Card 
                            img={CardTendecy}
                        />
                    </div>
                </article>
                <article className={styles.colors}>
                    <h2>APROVEITE OS LANÇAMENTOS</h2>
                    <BatonColors/>
                </article>
                <article className={styles.news}>
                    <h2>NOVIDADADES PARA VOCÊ</h2>
                    <Banner
                        Img={ImgBanner2}
                    />
                </article>

            </main>
            <Footer/>
        </body>
    )
}

export default Home;