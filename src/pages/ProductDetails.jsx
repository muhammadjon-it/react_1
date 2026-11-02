import { useParams, useNavigate, Navigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { api } from "@/api/Auth";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { productImages } from "./Home";
import CustomSwiper from "@/components/ui/CustomSwiper";
import { useTranslation } from "react-i18next";

const ProductDetails = () => {

    const { productId } = useParams();

    const [product, setProduct] = useState(null);
    const [notFound, setNotFound] = useState(false);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const { t } = useTranslation();

    /// GET PRODUCT

    const getProduct = async () => {
        try {
            setNotFound(false);

            const token = localStorage.getItem("token");
            const settings = JSON.parse(localStorage.getItem("settings") || "{}");
            const catalogId = settings.selectedCatalog || "1";

            const { data } = await axios.get(api + "/products", {
                params: { catalogId },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const products = data.data || [];
            const foundProduct = products.find(
                (item) => item.id == productId
            );

            if (!foundProduct) {
                setNotFound(true);
                return;
            }

            setProduct(foundProduct);
            setRelatedProducts(
                products.filter((item) => item.id != productId
                )
            );
        } catch (error) {
            console.log(error);
        }
    };

    const currentImage = productImages.find((item) => item.id == productId)?.image;

    const getProductImage = (id) => {
        const foundImage = productImages.find((item) => item.id === id);
        return foundImage?.image;
    };

    const addToCart = () => {
        const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");

        const existingProduct = savedCart.find((item) => item.id == product.id);

        let updatedCart = [];

        if (existingProduct) {
            updatedCart = savedCart.map((item) => item.id == product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item);
        }
        else {
            updatedCart = [...savedCart, {
                id: product.id,
                name: product.name,
                price: product.price,
                currency: product.currency,
                image: getProductImage(product.id),
                quantity: quantity,
            },
            ];
        }

        localStorage.setItem("cart", JSON.stringify(updatedCart));

        navigate("/shop");
    };

    useEffect(() => {
        if (!/^\d+$/.test(productId || "")) {
            setNotFound(true);
            return;
        }

        getProduct();
    }, [productId]);




    if (notFound) {
        return <Navigate to="/not-found" replace />;
    }



    return (
        <div className="bg-white dark:bg-[#111827] min-h-screen">
            <div className="container mx-auto px-4 py-8">

                <div className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                    {t("home")} <span className="mx-2">/</span>
                    {t("shop")} <span className="mx-2">/</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    <div className="flex flex-col-reverse sm:flex-row gap-4">

                        <div className="flex sm:flex-col gap-3">
                            {[1, 2, 3, 4].map((item) => (
                                <div
                                    key={item}
                                    className="w-16 h-16 border border-gray-200 dark:border-[#1E2636] rounded-lg p-2 cursor-pointer hover:border-green-500"
                                >
                                    <img
                                        src={currentImage}
                                        alt={product?.name}
                                        className="w-50 h-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className=" bg-gray-50 dark:bg-[#0B0F19] rounded-xl p-5 w-90 h-90 ">
                            <img
                                src={currentImage}
                                alt={product?.name}
                                className=" w-90 object-contain"
                            />
                        </div>

                    </div>

                    <div className="flex flex-col">

                        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                            {product?.name}
                        </h1>
                        <div className="flex justify-between items-center">

                            <div className="text-3xl font-semibold text-green-600 mb-6">
                                {product?.price} {product?.currency}
                            </div>

                            <div className="flex items-center gap-3 mb-5">
                                <div className="text-yellow-400 text-lg">
                                    ★★★★★
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    ({t("customerReviews")})
                                </span>
                            </div>

                        </div>

                        <div className="border-t border-gray-200 dark:border-[#1E2636] py-5">
                            <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                {t("shortDescription")}
                            </h3>

                            <p className="text-gray-500 dark:text-gray-400 leading-7">
                                The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.
                            </p>
                        </div>
                        <div className="flex gap-5">

                            <div className="flex items-center gap-4 mb-6">
                                <span className="font-medium text-gray-700 dark:text-gray-300">
                                </span>

                                <div className="flex items-center">
                                    <button
                                        onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                                        className="px-3 text-white text-4xl rounded-full bg-green-600 hover:bg-green-700">
                                        -
                                    </button>

                                    <span className="px-4 py-2 text-gray-800 dark:text-gray-100">
                                        {quantity}
                                    </span>

                                    <button
                                        onClick={() => setQuantity((prev) => prev + 1)}
                                        className="px-2 text-white text-4xl rounded-full bg-green-600 hover:bg-green-700">
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3 mb-6">

                                <button
                                    onClick={addToCart}
                                    className="border border-green-600 hover:bg-green-50 dark:hover:bg-[#1E2636] text-green-600 px-8 py-3 rounded-lg font-semibold transition">
                                    {t("addToCart")}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-gray-200 dark:border-[#1E2636] pt-8">

                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                        {t("relatedProducts")}
                    </h2>
                    <div>
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
                                        <a href={`/product/${item.id}`}>

                                            <div className="bg-gray-50 dark:bg-[#0B0F19] rounded-xl p-4 h-48 flex items-center justify-center">
                                                <img
                                                    src={getProductImage(item.id)}
                                                    alt={item.name}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>

                                            <h3 className="text-sm font-medium text-gray-800 dark:text-gray-100 mt-3 line-clamp-2">
                                                {item.name}
                                            </h3>

                                            <p className="text-green-600 font-bold mt-2">
                                                {item.price} {item.currency}
                                            </p>
                                        </a>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="flex md:hidden">
                            <CustomSwiper>
                                {relatedProducts.map((item) => (
                                    <div key={item.id}>
                                        <a href={`/product/${item.id}`}>

                                            <div className="bg-gray-50 dark:bg-[#0B0F19] rounded-xl p-4 h-48 flex items-center justify-center">
                                                <img
                                                    src={getProductImage(item.id)}
                                                    alt={item.name}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>

                                            <h3 className="text-sm font-medium text-gray-800 dark:text-gray-100 mt-3 line-clamp-2">
                                                {item.name}
                                            </h3>

                                            <p className="text-green-600 font-bold mt-2">
                                                {item.price} {item.currency}
                                            </p>
                                        </a>
                                    </div>
                                ))}
                            </CustomSwiper>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default ProductDetails;
