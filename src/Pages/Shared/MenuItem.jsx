import PopularMenuItem from '../../Components/PopularManu/PopularMenuItem'
import './menuItem.css'
const MenuItem = ({ item }) => {
    const {image, name, price, recipe} = item
    return (
        <>
            <PopularMenuItem
                img={image}
                title={name}
                price={price}
                description={recipe}
            ></PopularMenuItem>
            
        </>
    )
}

export default MenuItem
