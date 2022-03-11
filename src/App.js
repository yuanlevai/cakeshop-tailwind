import './App.css';

function App() {
  return (
    <div className="container mx-auto">
      {/* container start */}
      <div className="header flex justify-between border-b border-slate-300 py-3 text-sm">
        <div className="flex gap-8">
          <a className="text-lime-700 font-semibold" href="/#" >Chat with us</a>
          <p>+62 812 7817 3815</p>
          <p>info@leumangshop.com</p>
        </div>
        <div className="flex">
          <ul className="flex gap-8 text-lime-700 font-semibold">
            <li>Blog</li>
            <li>About Us</li>
            <li>Career</li>
          </ul>
        </div>
      </div>
      {/* siteinfo start */}
      <div className="siteInfo flex justify-between py-16">
        <h1 className=" font-bold text-2xl ">LeumangShop</h1>
        <div className="flex w-full justify-center">
          <input type="text" className="bg-gray-100 h-10 w-2/4 pr-8 pl-5 rounded-2xl focus:shadow focus:outline-none" placeholder="Search Products, categories ..." />
          <img src="images/search-icon.png" className="w-4 h-4 self-center -ml-8" alt="search"/>
        </div>
        <div className="flex gap-8">
          {/* <img src="/images/user-icon.png" className="w-7 h-7 self-center" />
          <div className="relative w-9 h-9 ">
            <img src="/images/cart-icon.png" className="w-full h-full self-center" />
            <div className="absolute -bottom-2 -left-1 text-xs bg-red-500 rounded-full w-4 h-4 text-center text-white">1</div>
          </div> */}
          <ul className="flex w-max gap-8 self-center">
            <li><img src="/images/user-icon.png" alt="" /></li>
            <li><img src="/images/cart-icon.png" alt=""/></li>
          </ul>
        </div>
      </div>

      {/* Menu */}
      <div className="flex bg-gray-100 justify-center border-slate-300 py-4 mb-14">
        <ul className="flex gap-9 font-poppins">
          <li><a href="/#" className="flex">Bakery<img alt="" src="/images/chevron.png" className="ml-1 object-contain" /></a></li>
          <li><a href="/#" className="flex">Fruit and vegetables<img alt="" src="/images/chevron.png" className="ml-1 object-contain" /></a></li>
          <li><a href="/#" className="flex">Meat and Fish<img alt="" src="/images/chevron.png" className="ml-1 object-contain" /></a></li>
          <li><a href="/#" className="flex">Drinks<img alt="" src="/images/chevron.png" className="ml-1 object-contain" /></a></li>
          <li><a href="/#" className="flex">Kitchen<img alt="" src="/images/chevron.png" className="ml-1 object-contain" /></a></li>
          <li><a href="/#" className="flex">Special nutrition<img alt="" src="/images/chevron.png" className="ml-1 object-contain" /></a></li>
          <li><a href="/#" className="flex">Baby<img alt="" src="/images/chevron.png" className="ml-1 object-contain" /></a></li>
          <li><a href="/#" className="flex">Pharmacy<img alt="" src="/images/chevron.png" className="ml-1 object-contain" /></a></li>
        </ul>
      </div>
      {/* pilihan */}
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

        {/* konten */}
        <div className="w-4/5">
          <div className='w-full h-3/4 flex flex-wrap mb-4'>
            <div className="w-1/4 px-4 mb-10">
              <div className="p-3 border-2 border-gray-300 rounded-lg shadow-md ">
                <span className="z-10 absolute text-xs font-semibold text-lime-700 bg-emerald-100 rounded-2xl py-1 px-3 m-2">- 26%</span>
                <img src="https://picsum.photos/236/180" className="object-fill relative rounded-md justify-center" alt="" />
                <div className="pt-5 mb-4">
                  <h1 className="font-bold">Lorem</h1>
                  <span className="text-sm text-gray-500">Lorem ipsum</span>
                </div>
                <div className="flex justify-between ">
                  <div>
                    <h1 className=" font-bold">20.000</h1>
                    <h2 className="text-sm text-gray-400 font-semibold line-through">30.000</h2>
                  </div>
                  <div>
                    <button className="w-full bg-lime-600 hover:bg-lime-500 outline outline-lime-700 hover:outline hover:outline-lime-600 rounded-xl py-2 px-2 text-white  font-semibold mr-10 ">Buy now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/4 px-4 mb-10">
              <div className="p-3 border-2 border-gray-300 rounded-lg shadow-md ">
                <span className="z-10 absolute text-xs font-semibold text-lime-700 bg-emerald-100 rounded-2xl py-1 px-3 m-2">- 26%</span>
                <img alt="" src="https://picsum.photos/236/180" className="object-fill relative rounded-md justify-center" />
                <div className="pt-5 mb-4">
                  <h1 className="font-bold">Lorem</h1>
                  <span className="text-sm text-gray-500">Lorem ipsum</span>
                </div>
                <div className="flex justify-between ">
                  <div>
                    <h1 className=" font-bold">20.000</h1>
                    <h2 className="text-sm text-gray-400 font-semibold line-through">30.000</h2>
                  </div>
                  <div>
                    <button className="w-full bg-lime-600 hover:bg-lime-500 outline outline-lime-700 hover:outline hover:outline-lime-600 rounded-xl py-2 px-2 text-white  font-semibold mr-10 ">Buy now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/4 px-4 mb-10">
              <div className="p-3 border-2 border-gray-300 rounded-lg shadow-md ">
                <span className="z-10 absolute text-xs font-semibold text-lime-700 bg-emerald-100 rounded-2xl py-1 px-3 m-2">- 26%</span>
                <img alt="" src="https://picsum.photos/236/180" className="object-fill relative rounded-md justify-center" />
                <div className="pt-5 mb-4">
                  <h1 className="font-bold">Lorem</h1>
                  <span className="text-sm text-gray-500">Lorem ipsum</span>
                </div>
                <div className="flex justify-between ">
                  <div>
                    <h1 className=" font-bold">20.000</h1>
                    <h2 className="text-sm text-gray-400 font-semibold line-through">30.000</h2>
                  </div>
                  <div>
                    <button className="w-full bg-lime-600 hover:bg-lime-500 outline outline-lime-700 hover:outline hover:outline-lime-600 rounded-xl py-2 px-2 text-white  font-semibold mr-10 ">Buy now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/4 px-4 mb-10">
              <div className="p-3 border-2 border-gray-300 rounded-lg shadow-md ">
                <span className="z-10 absolute text-xs font-semibold text-lime-700 bg-emerald-100 rounded-2xl py-1 px-3 m-2">- 26%</span>
                <img alt="" src="https://picsum.photos/236/180" className="object-fill relative rounded-md justify-center" />
                <div className="pt-5 mb-4">
                  <h1 className="font-bold">Lorem</h1>
                  <span className="text-sm text-gray-500">Lorem ipsum</span>
                </div>
                <div className="flex justify-between ">
                  <div>
                    <h1 className=" font-bold">20.000</h1>
                    <h2 className="text-sm text-gray-400 font-semibold line-through">30.000</h2>
                  </div>
                  <div>
                    <button className="w-full bg-lime-600 hover:bg-lime-500 outline outline-lime-700 hover:outline hover:outline-lime-600 rounded-xl py-2 px-2 text-white  font-semibold mr-10 ">Buy now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/4 px-4 mb-10">
              <div className="p-3 border-2 border-gray-300 rounded-lg shadow-md ">
                <span className="z-10 absolute text-xs font-semibold text-lime-700 bg-emerald-100 rounded-2xl py-1 px-3 m-2">- 26%</span>
                <img alt="" src="https://picsum.photos/236/180" className="object-fill relative rounded-md justify-center" />
                <div className="pt-5 mb-4">
                  <h1 className="font-bold">Lorem</h1>
                  <span className="text-sm text-gray-500">Lorem ipsum</span>
                </div>
                <div className="flex justify-between ">
                  <div>
                    <h1 className=" font-bold">20.000</h1>
                    <h2 className="text-sm text-gray-400 font-semibold line-through">30.000</h2>
                  </div>
                  <div>
                    <button className="w-full bg-lime-600 hover:bg-lime-500 outline outline-lime-700 hover:outline hover:outline-lime-600 rounded-xl py-2 px-2 text-white  font-semibold mr-10 ">Buy now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/4 px-4 mb-10">
              <div className="p-3 border-2 border-gray-300 rounded-lg shadow-md ">
                <span className="z-10 absolute text-xs font-semibold text-lime-700 bg-emerald-100 rounded-2xl py-1 px-3 m-2">- 26%</span>
                <img alt="" src="https://picsum.photos/236/180" className="object-fill relative rounded-md justify-center" />
                <div className="pt-5 mb-4">
                  <h1 className="font-bold">Lorem</h1>
                  <span className="text-sm text-gray-500">Lorem ipsum</span>
                </div>
                <div className="flex justify-between ">
                  <div>
                    <h1 className=" font-bold">20.000</h1>
                    <h2 className="text-sm text-gray-400 font-semibold line-through">30.000</h2>
                  </div>
                  <div>
                    <button className="w-full bg-lime-600 hover:bg-lime-500 outline outline-lime-700 hover:outline hover:outline-lime-600 rounded-xl py-2 px-2 text-white  font-semibold mr-10 ">Buy now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/4 px-4 mb-10">
              <div className="p-3 border-2 border-gray-300 rounded-lg shadow-md ">
                <span className="z-10 absolute text-xs font-semibold text-lime-700 bg-emerald-100 rounded-2xl py-1 px-3 m-2">- 26%</span>
                <img alt="" src="https://picsum.photos/236/180" className="object-fill relative rounded-md justify-center" />
                <div className="pt-5 mb-4">
                  <h1 className="font-bold">Lorem</h1>
                  <span className="text-sm text-gray-500">Lorem ipsum</span>
                </div>
                <div className="flex justify-between ">
                  <div>
                    <h1 className=" font-bold">20.000</h1>
                    <h2 className="text-sm text-gray-400 font-semibold line-through">30.000</h2>
                  </div>
                  <div>
                    <button className="w-full bg-lime-600 hover:bg-lime-500 outline outline-lime-700 hover:outline hover:outline-lime-600 rounded-xl py-2 px-2 text-white  font-semibold mr-10 ">Buy now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/4 px-4 mb-10">
              <div className="p-3 border-2 border-gray-300 rounded-lg shadow-md ">
                <span className="z-10 absolute text-xs font-semibold text-lime-700 bg-emerald-100 rounded-2xl py-1 px-3 m-2">- 26%</span>
                <img alt="" src="https://picsum.photos/236/180" className="object-fill relative rounded-md justify-center" />
                <div className="pt-5 mb-4">
                  <h1 className="font-bold">Lorem</h1>
                  <span className="text-sm text-gray-500">Lorem ipsum</span>
                </div>
                <div className="flex justify-between ">
                  <div>
                    <h1 className=" font-bold">20.000</h1>
                    <h2 className="text-sm text-gray-400 font-semibold line-through">30.000</h2>
                  </div>
                  <div>
                    <button className="w-full bg-lime-600 hover:bg-lime-500 outline outline-lime-700 hover:outline hover:outline-lime-600 rounded-xl py-2 px-2 text-white  font-semibold mr-10 ">Buy now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <a className="flex bg-lime-600 hover:bg-lime-500 outline outline-lime-700 hover:outline hover:outline-lime-600 rounded-xl py-2 px-2 text-white mt-12 font-bold"> Show More Products <img alt="" src="/images/chevron-white.png" className="ml-1 object-contain" /></a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full mb-10 ">
        <div className="flex justify-between p-10">
          <div>
            <h1 className="font-bold mb-5 text-lg">Get in touch</h1>
            <ul className=" space-y-2 ">
              <li className="text-lime-600 hover:text-lime-800 cursor-pointer">About us</li>
              <li className="text-lime-600 hover:text-lime-800 cursor-pointer">Career</li>
              <li className="text-lime-600 hover:text-lime-800 cursor-pointer">Press Release</li>
              <li className="text-lime-600 hover:text-lime-800 cursor-pointer">Blog</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold mb-5 text-lg">Connections</h1>
            <ul className=" space-y-2 ">
              <li className="text-lime-600 hover:text-lime-800 cursor-pointer">Facebook</li>
              <li className="text-lime-600 hover:text-lime-800 cursor-pointer">Twitter</li>
              <li className="text-lime-600 hover:text-lime-800 cursor-pointer">Youtube</li>
              <li className="text-lime-600 hover:text-lime-800 cursor-pointer">Instagram</li>
              <li className="text-lime-600 hover:text-lime-800 cursor-pointer">Linkedin</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold mb-5 text-lg">Earnings</h1>
            <ul className=" space-y-2 ">
              <li className="text-lime-600 hover:text-lime-800 cursor-pointer">Become an Affinliate</li>
              <li className="text-lime-600 hover:text-lime-800 cursor-pointer">Advertise your product</li>
              <li className="text-lime-600 hover:text-lime-800 cursor-pointer">Sell on market</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold mb-5 text-lg">Account</h1>
            <ul className=" space-y-2 ">
              <li className="text-lime-600 hover:text-lime-800 cursor-pointer">Your Account</li>
              <li className="text-lime-600 hover:text-lime-800 cursor-pointer">Returns Centre</li>
              <li className="text-lime-600 hover:text-lime-800 cursor-pointer">100 % purchase protection</li>
              <li className="text-lime-600 hover:text-lime-800 cursor-pointer">Chat with us</li>
              <li className="text-lime-600 hover:text-lime-800 cursor-pointer">Help</li>
            </ul>
          </div>
        </div>
      {/* copyright */}
        <div className="flex items-center justify-center font-poppins">
            <p>Copyright © 2022 LeumangCake.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;


