
import style from "./ProductCard.module.css";

export default function Card(props) {
    const { id, img, title } = props;
    return (

        <div className={style.col} key={id}>
            <img src={img} alt={title} />
            <p className="color-white">
                {title}
            </p>
        </div>


    )

}