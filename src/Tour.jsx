import {useState} from "react"

const Tour = (props) => {
    const {id, name, price, image, info, onClick} = props
    const [readMore, setReadMore] = useState(false)
    return (
        <>
            <p className="tour-price">{price}</p>
            <img className="img" src={image} alt={name} />
            <h4 className="tour-info">{name}</h4>
            <p className="tour-info">
                {readMore ? info : info.substring(0, 100)}
            </p>
            <button
                className="btn info-btn"
                type="button"
                onClick={() => setReadMore(!readMore)}>
                Read more
            </button>
            <br />
            <button
                className="btn delete-btn"
                type="button"
                onClick={() => onClick(id)}>
                Remove
            </button>
        </>
    )
}
export default Tour
