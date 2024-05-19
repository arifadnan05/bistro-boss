import MenuItem from "../Shared/MenuItem"

const MenuCategory = ({ items }) => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-8'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    )
}

export default MenuCategory
