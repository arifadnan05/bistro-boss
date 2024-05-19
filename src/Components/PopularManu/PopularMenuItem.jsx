
const PopularMenuItem = ({img, title, price, description}) => {
    return (
        <div>
            <div className='flex items-center mt-10 p-2'>
                <div className='w-[118px] mr-8'>
                    <img className='border-radius' src={img} />
                </div>
                <div className='space-y-2'>
                    <h2 className="text-[#151515] text-xl">{title}------------------</h2>
                    <p className="text-[#737373] text-base">{description}</p>
                </div>
                <div>
                    <p className="text-[#BB8506] text-xl leading-7">${price}</p>
                </div>
            </div>
        </div>
    )
}

export default PopularMenuItem
