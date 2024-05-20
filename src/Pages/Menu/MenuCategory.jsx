import { Link } from "react-router-dom"
import MenuItem from "../Shared/MenuItem"
import { useState } from "react"
import Cover from "../Shared/Cover"

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="pt-8">
            {title && <Cover img={img} title={title}></Cover>}
            <div className='grid grid-cols-2 gap-8'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }

            </div>
            <div className="flex justify-center">
                <Link to={`/order/${title}`}>
                    <button className='uppercase text-black my-4 btn btn-outline border-0 border-b-2'>order your favorite food</button>
                </Link>
            </div>
        </div>
    )
}

export default MenuCategory
