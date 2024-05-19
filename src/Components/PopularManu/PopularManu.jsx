import SectionTitle from '../SectionTitle/SectionTitle'
import MenuItem from '../../Pages/Shared/MenuItem'
import useMenu from '../../hooks/useMenu'

const PopularManu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')
    return (
        <section>
            <SectionTitle
                subHeading={'Popular Items'}
                heading={'From Our Menu'}
            ></SectionTitle>

            <div className='grid grid-cols-2 gap-8'>
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className='flex justify-center text-center mt-14 mb-20'>
                <h3 className='uppercase text-[#1F2937] text-xl font-medium underline cursor-pointer'>View Full  Menu</h3>
            </div>

            <div className='h-64 bg-black flex justify-center items-center'>
                <h3 className='text-white text-5xl'>Call Us: +88 01997899140</h3>
            </div>
        </section>
    )
}

export default PopularManu
