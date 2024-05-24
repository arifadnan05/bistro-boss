import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart"
import { FaRegTrashAlt } from "react-icons/fa";


const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const axiosSecure = useAxiosSecure();
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="flex justify-evenly items-center">
                <h2 className="text-4xl font-bold">Total orders: {cart.length}</h2>
                <h2 className="text-4xl font-bold">Total Price: ${totalPrice}</h2>
                <button className="btn bg-[#D1A054] text-white">Pay</button>

            </div>

            <div className="overflow-x-auto px-10 mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            cart.map(item => <tr key={item._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item?.image} />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {item?.name}
                                </td>
                                <td>${item?.price}</td>
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn bg-red-900 text-white"><FaRegTrashAlt /></button>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Cart
