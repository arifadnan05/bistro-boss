import PopularMenuItem from '../../Components/PopularManu/PopularMenuItem'
import './menuItem.css'
const MenuItem = ({ item }) => {
    return (
        <>
            <PopularMenuItem
                img={item.image}
                title={item.name}
                price={item.price}
                description={item.recipe}
            ></PopularMenuItem>
        </>
    )
}

export default MenuItem
