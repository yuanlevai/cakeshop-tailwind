import ProductCard from './ProductCard';
import products from '../services/data/product';
import Layout from './Layout';

const Home = () => {
    return (
        <Layout>
            {/* main */}
            <div className="flex w-full mb-5 ">
                <div className="w-1/5 mr-5 px3 font-poppins">
                    <div className="w-full mb-10">
                        <h1 className="font-semibold  mb-2">Categories</h1>
                        <div className="mb-2">
                            <a href="/#" className=" flex justify-between">
                                <span>Bolu</span>
                                <span className="text-lime-700 font-semibold bg-emerald-100 rounded-lg py-1 px-2">320</span>
                            </a>
                        </div>
                        <div className="mb-2">
                            <a href="/#" className=" flex justify-between">
                                <span>Mie</span>
                                <span className="text-lime-700 font-semibold bg-emerald-100 rounded-lg py-1 px-2" >112</span>
                            </a>
                        </div>
                        <div className="mb-2">
                            <a href="/#" className=" flex justify-between">
                                <span>Pizza</span>
                                <span className="text-lime-700 font-semibold bg-emerald-100 rounded-lg py-1 px-2">32</span>
                            </a>
                        </div>
                        <div className="mb-2">
                            <a href="/#" className=" flex justify-between">
                                <span>Dessert</span>
                                <span className="text-lime-700 font-semibold bg-emerald-100 rounded-lg py-1 px-2">48</span>
                            </a>
                        </div>
                    </div>
                    <div className="w-full mb-10">
                        <h1 className="font-semibold  mb-2">Order by</h1>
                        <div className="items-center">
                            <label className="inline-flex items-center mt-3">
                                <input type="checkbox" className="h-5 w-5 accent-lime-600" />
                                <span className="ml-2 text-gray-900">Termurah</span>
                            </label>
                        </div>
                        <div classNameName="items-center">
                            <label className="inline-flex items-center mt-3">
                                <input type="checkbox" className="h-5 w-5 accent-lime-600" />
                                <span className="ml-2 text-gray-900">Terlaris</span>
                            </label>
                        </div>
                        <div classNameName="items-center">
                            <label className="inline-flex items-center mt-3">
                                <input type="checkbox" className="h-5 w-5 accent-lime-600" />
                                <span className="ml-2 text-gray-900">Termahal</span>
                            </label>
                        </div>
                    </div>
                    <div className="w-full mb-10">
                        <h1 className="font-semibold  mb-2">Rating</h1>
                        <div className="items-center">
                            <label className="inline-flex items-center mt-3">
                                <input type="checkbox" className="h-5 w-5 accent-lime-600 mr-1" />
                                <img src="images/star-color.png" className="ml-1" alt="" />
                                <img src="images/star-color.png" className="ml-1" alt="" />
                                <img src="images/star-color.png" className="ml-1" alt="" />
                                <img src="images/star-color.png" className="ml-1" alt="" />
                                <img src="images/star-color.png" className="ml-1" alt="" />
                            </label>
                        </div>
                        <div className="items-center">
                            <label className="inline-flex items-center mt-3">
                                <input type="checkbox" className="h-5 w-5 accent-lime-600 mr-1" />
                                <img src="images/star-color.png" className="ml-1" alt="" />
                                <img src="images/star-color.png" className="ml-1" alt="" />
                                <img src="images/star-color.png" className="ml-1" alt="" />
                                <img src="images/star-color.png" className="ml-1" alt="" />
                                <img src="images/star-blank.png" className="ml-1" alt="" />
                            </label>
                        </div>
                        <div className="items-center">
                            <label className="inline-flex items-center mt-3">
                                <input type="checkbox" className="h-5 w-5 accent-lime-600 mr-1" />
                                <img src="images/star-color.png" className="ml-1" alt="" />
                                <img src="images/star-color.png" className="ml-1" alt="" />
                                <img src="images/star-color.png" className="ml-1" alt="" />
                                <img src="images/star-blank.png" className="ml-1" alt="" />
                                <img src="images/star-blank.png" className="ml-1" alt="" />
                            </label>
                        </div>
                        <div className="items-center">
                            <label className="inline-flex items-center mt-3">
                                <input type="checkbox" className="h-5 w-5 accent-lime-600 mr-1" />
                                <img src="images/star-color.png" className="ml-1" alt="" />
                                <img src="images/star-color.png" className="ml-1" alt="" />
                                <img src="images/star-blank.png" className="ml-1" alt="" />
                                <img src="images/star-blank.png" className="ml-1" alt="" />
                                <img src="images/star-blank.png" className="ml-1" alt="" />
                            </label>
                        </div>
                        <div className="items-center">
                            <label className="inline-flex items-center mt-3">
                                <input type="checkbox" className="h-5 w-5 accent-lime-600 mr-1" />
                                <img src="images/star-color.png" className="ml-1" alt="" />
                                <img src="images/star-blank.png" className="ml-1" alt="" />
                                <img src="images/star-blank.png" className="ml-1" alt="" />
                                <img src="images/star-blank.png" className="ml-1" alt="" />
                                <img src="images/star-blank.png" className="ml-1" alt="" />
                            </label>
                        </div>
                    </div>
                    <div className="w-full mb-10">
                        <h1 className="font-semibold  mb-2">Rating</h1>
                        <input type="range" className="w-full accent-lime-600 " />
                    </div>
                    <div className="w-full mb-10">
                        <div className="inline-flex">
                            <div className="w-1/2">
                                <h1 className="font-semibold mb-2">Min</h1>
                                <input type="text" placeholder="0" className="bg-gray-300 p-4 w-full rounded-md outline-none" />
                            </div>
                            <div className="px-6 pt-10">
                                <span className="text-gray-400">-</span>
                            </div>
                            <div className="w-1/2">
                                <h1 className="font-semibold mb-2">Max</h1>
                                <input type="text" placeholder="0" className="bg-gray-300 p-4 w-full rounded-md outline-none" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-10">
                        <div className="inline-flex gap-10">
                            <div className="w-1/2">
                                <button className="w-full bg-lime-600 hover:bg-lime-500 outline outline-lime-700 hover:outline hover:outline-lime-600 rounded-lg py-2 px-2 text-white font-bold mr-10 ">Apply</button>
                            </div>
                            <div className="w-1/2">
                                <button className="w-full hover:bg-lime-200 outline outline-gray-300 hover:outline hover:outline-lime-600 rounded-lg py-2 px-2 text-gray-500 font-bold mr-10 ">Reset</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* card */}
                <div className="w-4/5">
                    <div className=' flex flex-wrap mb-4 justify-center'>
                        <div className="flex flex-wrap justify-center gap-6">
                            {products.map((item, index) => {
                                return <ProductCard item={item} key={index} />
                            })}
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <a href="/#" className="flex bg-lime-600 hover:bg-lime-500 outline outline-lime-700 hover:outline hover:outline-lime-600 rounded-xl py-2 px-2 text-white mt-12 font-bold"> Show More Products <img alt="" src="/images/chevron-white.png" className="ml-1 object-contain" /></a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default Home;