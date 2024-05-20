
const Featured = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.postimg.cc/hGpqZmmd/featured.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content flex space-x-10 items-center px-56 text-neutral-content">
                    <div className="space-y-2">
                        <img src="https://i.postimg.cc/hGpqZmmd/featured.jpg" className="block object-cover object-center rounded-md dark:bg-gray-500" />

                    </div>
                    <div className="">
                        <h1 className=" uppercase text-2xl">March 20, 2023</h1>
                        <h3 className="uppercase text-2xl">where can i get some?</h3>
                        <p className="mb-5 leading-[30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <div className='ml-4'>
                            <button className='uppercase text-white btn btn-outline border-0 border-b-2'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
