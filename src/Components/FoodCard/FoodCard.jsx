/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth"
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { user } = useAuth();
    const { image, name, price, recipe, _id } = item
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();
    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem = {
                menuId : _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} Added to the cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      refetch();
                }
            })
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Before you login!",
                footer: '<a href="#">Why do I have this issue?</a>'
                
            });
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 bg-slate-900 text-white mr-4 mt-4 px-4 rounded-3xl py-1">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button
                        onClick={handleAddToCart}
                        className='uppercase text-[#BB8506] bg-slate-100 border-orange-400 my-4 btn btn-outline border-0 border-b-2'>
                        Add to card
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard
