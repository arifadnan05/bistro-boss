
const FoodCard = ({item}) => {
    const {image, name, price, recipe} = item
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 bg-slate-900 text-white mr-4 mt-4 px-4 rounded-3xl py-1">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                <button className='uppercase text-[#BB8506] bg-slate-100 border-orange-400 my-4 btn btn-outline border-0 border-b-2'>Add to card</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard
