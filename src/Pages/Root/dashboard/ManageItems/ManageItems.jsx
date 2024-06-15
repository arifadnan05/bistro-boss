import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle'
import useMenu from '../../../../hooks/useMenu'
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDelete = item => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then( async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                if(res.data.deletedCount > 0){
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} Has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
                
            }
        });
    }
    return (
        <div>
            <SectionTitle heading="Manage All Item" subHeading="Hurry Up"></SectionTitle>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">

                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, idx) => <tr key={item._id}>
                                    <th>{idx + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-'>
                                        ${item.price}

                                    </td>
                                    <th>
                                        <button className="btn bg-[#D1A054] text-white"><FaEdit /></button>
                                    </th>
                                    <th>
                                        <button onClick={() => handleDelete(item)} className="btn bg-[#B91C1C] text-white"><FaRegTrashAlt /></button>
                                    </th>
                                </tr>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    )
}

export default ManageItems
