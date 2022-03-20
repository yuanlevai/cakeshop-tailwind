import MainMenu from './MainMenu';
// import ProductCard from './ProductCard';
// import products from '../services/data/product';

const Layout = (props) => {
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
          <img src="images/search-icon.png" className="w-4 h-4 self-center -ml-8" alt="search" />
        </div>
        <div className="flex gap-8">
          {/* <img src="/images/user-icon.png" className="w-7 h-7 self-center" />
          <div className="relative w-9 h-9 ">
            <img src="/images/cart-icon.png" className="w-full h-full self-center" />
            <div className="absolute -bottom-2 -left-1 text-xs bg-red-500 rounded-full w-4 h-4 text-center text-white">1</div>
          </div> */}
          <ul className="flex w-max gap-8 self-center">
            <li><img src="/images/user-icon.png" alt="" /></li>
            <li><img src="/images/cart-icon.png" alt="" /></li>
          </ul>
        </div>
      </div>

      {/* Menu */}
      <div className="flex flex-wrap bg-gray-100 justify-center border-slate-300 py-4 mb-14">
        <ul className="flex gap-9 font-poppins ">
          <MainMenu title="Bakery" icon={true} />
          <MainMenu title="Fruit & vegetables" icon={true} />
          <MainMenu title="Meat & Fish" icon={true} />
          <MainMenu title="Drinks" icon={true} />
          <MainMenu title="Kitchen" icon={true} />
          <MainMenu title="Special nutrition" icon={false} />
          <MainMenu title="Baby" icon={false} />
        </ul>
      </div>

      {/* content */}
      {props.children}

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
      </div>

      {/* copyright */}
      <div className="w-full mb-10">
        <div className="flex items-center justify-center font-poppins">
          <p>Copyright © 2022 LeumangCake.com</p>
        </div>
      </div>
    </div>
  )
}

export default Layout;