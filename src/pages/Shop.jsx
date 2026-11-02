import { useEffect, useState } from "react";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Link } from "react-router";
import axios from "axios";

import "swiper/css";
import "swiper/css/pagination";
import { productImages } from "./Home";
import { api } from "@/api/Auth";
import CustomSwiper from "@/components/ui/CustomSwiper";
const Shop = () => {

  const [cart, setCart] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);

  async function getProduct() {
    try {
      const token = localStorage.getItem("token");
      const settings = JSON.parse(localStorage.getItem("settings") || "{}");

      const catalogId = settings.selectedCatalog || "1";

      const { data } = await axios.get(api + "/products", {
        params: { catalogId },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");

      const related = data.data.filter((item) =>!savedCart.some((cartItem) => cartItem.id == item.id));

      setRelatedProducts(related);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductImage = (id) => {
    return productImages.find((item) => item.id == id)?.image;
  };

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");

    setCart(savedCart);
    getProduct();
  }, []);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQuan = (id) => {const updatedCart = cart.map((item) => item.id == id
        ? { ...item, quantity: item.quantity + 1 }
        : item);

    updateCart(updatedCart);
  };

  const decreaseQuan = (id) => {
    const updatedCart = cart.map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item ).filter((item) => item.quantity > 0);
    updateCart(updatedCart);
  };

  const removeProduct = (id) => {
    const updatedCart = cart.filter((item) => item.id != id);

    updateCart(updatedCart);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-5 py-10">
      <h1 className="text-3xl font-bold mb-8">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-lg">
          Your cart is empty.
        </p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 w-full overflow-x-auto">
            <table className="w-87 md:w-full border-collapse  ">
              <thead>
                <tr className="border-b border-gray-200 text-left text-gray-700">
                  <th className="py-4 px-3 font-medium">Products</th>
                  <th className="py-4 px-3 font-medium">Price</th>
                  <th className="py-4 px-3 font-medium hidden md:block">Quantity</th>
                  <th className="py-4 px-3 font-medium">Total</th>
                  <th className="py-4 px-3"></th>
                </tr>
              </thead>

              <tbody className="">
                {cart.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-100 bg-gray-50 hover:bg-gray-100 transition"
                  >
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-contain"
                        />
                        <div>
                          <h3 className="font-medium text-gray-800 text-[10px] md:text-base">
                            {item.name}
                          </h3>
                          <p className="text-xs text-gray-400 mt-1 text-[10px] md:text-base hidden md:block">
                            SKU: {item.id}
                          </p>
                          <p className="block md:hidden text-green-600 font-bold text-[11px]">
                            {(item.price * item.quantity)} {item.currency}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="py-3 px-3 text-gray-600 whitespace-nowrap text-[10px] md:text-base">
                      {item.price} {item.currency}
                    </td>

                    <td className="py-3 px-3">
                      <div className="flex items-center md:gap-2">
                        <button
                          onClick={() => decreaseQuan(item.id)}
                          className="w-4 md:w-7 h-4 md:h-7 rounded-full bg-green-600 text-white hover:bg-green-700 text-[10px] md:text-base"
                        >
                          -
                        </button>

                        <span className="min-w-4 text-center text-[10px] md:text-base">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuan(item.id)}
                          className="w-4 md:w-7 h-4 md:h-7 rounded-full bg-green-600 text-white hover:bg-green-700 text-[10px] md:text-base"
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td className="py-3 px-3 text-green-600 font-bold whitespace-nowrap text-[10px] md:text-base hidden md:block mt-6">
                      {(item.price * item.quantity)} {item.currency}
                    </td>

                    <td className="py-3 px-3 text-center">
                      <button
                        onClick={() => removeProduct(item.id)}
                        className="text-gray-500 hover:text-red-500 text-[10px] md:text-base"
                        title="Remove"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-3 md:w-7 h-3 md:h-7"
                        >
                          <path d="M3 6h18" />
                          <path d="M8 6V4h8v2" />
                          <path d="m19 6-1 14H6L5 6" />
                          <path d="M10 11v5M14 11v5" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>



          <div className="border-2 border-gray-200 rounded-xl p-6 h-fit">
            <h2 className="text-xl font-bold mb-5">
              Cart Totals
            </h2>

            <div className="flex justify-between border-b pb-4">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">
                ${total}
              </span>
            </div>

            <div className="flex justify-between border-b py-4">
              <span className="text-gray-600">Shiping</span>
              <span className="font-semibold">
                $20.00
              </span>
            </div>

            <div className="flex justify-between py-4">
              <span className="font-semibold">Total</span>
              <span className="text-green-600 font-bold text-xl">
                ${(total + 20)}
              </span>
            </div>

            <Link
              to="/checkout"
              className="block w-full text-center bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              Proceed to Checkout
            </Link>
            <div className=" text-center">
              <Link to={"/"} className="text-green-600">Continue Shopping</Link>
            </div>
          </div>


        </div>
      )}

      <div className="mt-16 border-t border-gray-200 pt-8">

        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Related Products
        </h2>
        <div className="hidden md:block">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={2}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            className="relatedSwiper pb-12"
          >

            {relatedProducts.map((item) => (
              <SwiperSlide key={item.id}>
                <Link to={`/product/${item.id}`}>

                  <div className="bg-gray-50 rounded-xl p-4 h-48 flex items-center justify-center">
                    <img
                      src={getProductImage(item.id)}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <h3 className="text-sm font-medium text-gray-800 mt-3 line-clamp-2">
                    {item.name}
                  </h3>

                  <p className="text-green-600 font-bold mt-2">
                    {item.price} {item.currency}
                  </p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className=" block md:hidden">
          <CustomSwiper>
            {relatedProducts.map((item) => (
              <Link to={`/product/${item.id}`}>

                <div className="bg-gray-50 rounded-xl p-4 h-48 flex items-center justify-center">
                  <img
                    src={getProductImage(item.id)}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="text-sm font-medium text-gray-800 mt-3 line-clamp-2">
                  {item.name}
                </h3>

                <p className="text-green-600 font-bold mt-2">
                  {item.price} {item.currency}
                </p>
              </Link>
            ))}
          </CustomSwiper>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
