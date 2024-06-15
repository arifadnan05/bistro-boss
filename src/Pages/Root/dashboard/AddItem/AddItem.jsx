import { useForm } from "react-hook-form"
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle"
import useAxiosPublic from "../../../../hooks/useAxiosPublic"
import useAxiosSecure from "../../../../hooks/useAxiosSecure"
import Swal from "sweetalert2"

const AddItem = () => {
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOSTING_KEY}`
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure()
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] }
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url
      }
      const menuRes = await axiosSecure.post('/menu', menuItem)
      console.log(menuRes.data)
      if (menuRes.data.insertedId) {
        reset()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Menu Item Added in the database",
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
  }

  return (
    <div>
      <SectionTitle heading='add an item' subHeading="what's new?"></SectionTitle>

      <form className="px-24" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <label className="label">
              <span className="label-text">Recipe name*</span>
            </label>
            <input type="text" placeholder="Type here" className="input mt-2 input-bordered w-full" {...register("name", { required: true })} />
            {errors.name && <span>This field is required</span>}
          </div>
          <div className="flex w-full space-x-4">
            <div className="w-1/2">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select defaultValue="Default" {...register("category")} className="select select-bordered w-full">
                <option disabled value="Default">Category</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="drinks">Drinks</option>
                <option value="salad">Salad</option>
                <option value="dessert">Dessert</option>
              </select>
            </div>
            <div className="w-1/2">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input type="number" placeholder="Price" className="input input-bordered w-full" required {...register("price", { required: true })} />
              {errors.price && <span>This field is required</span>}
            </div>
          </div>
          <div className="w-full">
            <label className="label">
              <span className="label-text">Description*</span>
            </label>

            <textarea placeholder="Write your product details" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" {...register("recipe", { required: true })}></textarea>
            {errors.recipe && <span>This field is required</span>}
          </div>
        </div>
        <div className="my-4">
          <input type="file" className="file-input file-input-bordered w-full max-w-xs" {...register("image", { required: true })} />
          {errors.image && <span>This field is required</span>}
        </div>
        <div>
          <button className="btn">Add Item</button>
        </div>
      </form>
    </div>
  )
}

export default AddItem
