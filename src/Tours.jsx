import Tour from "./Tour"

const Tours = ({data, onClick}) => {
    return (
        <ul className="tours">
            {data.map((place) => {
                const {id, name, info, price, image} = place
                return (
                    <li className="single-tour" key={id}>
                        <Tour
                            name={name}
                            id={id}
                            info={info}
                            price={price}
                            image={image}
                            onClick={onClick}
                        />
                    </li>
                )
            })}
        </ul>
    )
}
export default Tours
