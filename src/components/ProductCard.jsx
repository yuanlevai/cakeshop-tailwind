import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';
const ProductCard = (props) => {
    const item = props.item;
    const priceAfterDiscount = 
        item.originalPrice - ((item.originalPrice * item.discountPercent) / 100);
    return (
        <div className="p-3 border-2 border-gray-300 rounded-lg shadow-md ">
            {item.discountPercent > 0 && (
                <span className="z-10 absolute text-xs font-semibold text-lime-700 bg-emerald-100 rounded-2xl py-1 px-3 m-2">- {item.discountPercent} %</span>
            )}
            <img src="https://picsum.photos/236/180" className="object-fill relative rounded-md justify-center" alt="" />
            <div className="pt-5 mb-4">
            <Link to={item.name}>
                <h1 className="font-bold">{item.name}</h1>
            </Link>
                <span className="text-sm text-gray-500">{item.description}</span>
            </div>
            <div className="flex justify-between ">
                <div>
                    <h1 className="font-bold">
                        <NumberFormat thousandSeparator={"."} decimalSeparator={","} prefix={'Rp '} value={priceAfterDiscount} displayType='text' className="font-bold"/>
                    </h1>
                    {item.discountPercent > 0 && (
                        <h2 className="text-sm text-gray-400 font-semibold line-through">
                             <NumberFormat thousandSeparator={"."} decimalSeparator={","} prefix={'Rp '} value={item.originalPrice} displayType='text' />                            
                        </h2>
                    )}
                </div>
                <div>
                    <button className="w-full bg-lime-600 hover:bg-lime-500 outline outline-lime-700 hover:outline hover:outline-lime-600 rounded-xl py-2 px-2 text-white  font-semibold mr-10 ">Buy now</button>
                </div>
            </div>
        </div>)
}
export default ProductCard;