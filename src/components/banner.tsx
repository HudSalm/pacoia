type Props = {
    Img: string;
}

const Banner = ({ Img } : Props) => {
    return (
        <div>
            <img src={Img} alt="" />
        </div>
    )
}

export default Banner;