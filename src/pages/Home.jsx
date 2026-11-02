
import CustomSwiper from '@/components/ui/CustomSwiper'

import Img_1 from "@/images/image.png"
import Img_2 from "@/images/image copy 2.png"
import Img_3 from "@/images/image copy 3.png"
import Img_4 from "@/images/image copy 4.png"
import Img_5 from "@/images/image copy 5.png"
import Img_6 from "@/images/image copy 6.png"
import Img_8 from "@/images/image copy 7.png"
import Img_9 from "@/images/image copy 8.png"
import Img_10 from "@/images/image copy 9.png"
import Img_11 from "@/images/image copy 10.png"
import Img_7 from "@/images/Super Sale Banner.png"

import { useTranslation } from 'react-i18next'
import axios from 'axios'
import { api } from '@/api/Auth'
import { useEffect, useState } from 'react'
import Footer from './Footer'
import { Link } from 'react-router'

export const productImages = [
  { id: 1, image: Img_2 },
  { id: 2, image: Img_4 },
  { id: 3, image: Img_5 },
  { id: 4, image: Img_1 },
  { id: 5, image: Img_6 },
]

const Home = () => {

  const { t, i18n } = useTranslation();

  const [catalogs, setCatalogs] = useState([])
  const [products, setProducts] = useState([])
  const [minPrice, setMinPrice] = useState(30)
  const [maxPrice, setMaxPrice] = useState(7000)
  const [search, setSearch] = useState("")
  const [selectedCatalog, setSelectedCatalog] = useState(() => {
    const settings = JSON.parse(localStorage.getItem("settings") || "{}")
    return settings.selectedCatalog || "1"
  })

  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites") || "[]")
  })

  /// FAVORITE FUNCTION

  const toggleFavorite = (product) => {

    const exists = favorites.some((item) => item.id == product.id)

    let updatedFavorites = []

    if (exists) {
      updatedFavorites = favorites.filter((item) => item.id != product.id)
    } else {
      const image = productImages.find((item) => item.id == product.id)?.image

      updatedFavorites = [...favorites, { ...product, image },]
    }

    setFavorites(updatedFavorites)
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
  }

  // GET CATALOGS

  async function getDataCatalog() {
    try {
      const { data } = await axios.get(api + "/catalogs")
      setCatalogs(data)
    } catch (error) {
      console.error(error)
    }
  }

  // GET PRODUCTS
  async function getProducts(catalogId) {
    try {
      const token = localStorage.getItem("token")

      const { data } = await axios.get(api + "/products", {
        params: {
          catalogId: catalogId,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      setProducts(data.data)
    } catch (error) {
      console.error(error)
    }
  }


  useEffect(() => {
    getDataCatalog()

    const settings = JSON.parse(localStorage.getItem("settings") || "{}")

    const catalogId = settings.selectedCatalog || "1"

    setSelectedCatalog(catalogId)
    getProducts(catalogId)
  }, [])



  useEffect(() => {
    const savedSettings = JSON.parse(localStorage.getItem("settings") || "{}");

    if (savedSettings.language) { i18n.changeLanguage(savedSettings.language); }
  }, [i18n]);



  // FUNCTION SEARCH AND RANGE

  const filteredProducts = products.filter((product) => {

    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase())

    const matchesPrice = product.price >= minPrice && product.price <= maxPrice

    return matchesSearch && matchesPrice
  })

  return (
    <div className="container mx-auto px-3 sm:px-4 py-4">

      <CustomSwiper>
        <div className="relative flex items-center justify-between overflow-hidden bg-[#FBFBFB] dark:bg-[#111827] rounded-2xl w-full min-h-[190px] sm:min-h-[260px] md:min-h-[350px] px-5 py-6 sm:px-10 md:px-16 transition-colors duration-300">
          <div className="relative z-10 max-w-[560px]">
            <p className="text-[#3D3D3D] dark:text-gray-400 font-medium text-[10px] sm:text-sm tracking-widest mb-2 sm:mb-5"> {t("welcome")} </p>
            <h1 className="text-[#3D3D3D] dark:text-gray-100 font-black w-60 md:w-150 text-2xl md:text-5xl mb-2 sm:mb-4"> {t(`title_1`)}
              <span className="text-[#46A358]"> {t(`title1`)} </span>
            </h1>
            <p className="text-[#727272] dark:text-gray-400 text-[11px] md:text-base w-55 md:w-150">{t(`description_1`)}</p>
            <br />
            <button className="bg-[#46A358] text-white font-bold text-[10px] sm:text-sm px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-lg hover:bg-[#3b8b4a] transition-all">
              {t("shopNow")} →
            </button>
          </div>
          <div className="absolute right-0 bottom-0 w-[43%] sm:w-[40%] md:w-[42%] h-full flex items-center justify-center">
            <img
              src={Img_1}
              alt="Plant"
              className="w-80 object-contain drop-shadow-xl rounded-2xl"
            />
          </div>
        </div>
        <div className="relative flex items-center justify-between overflow-hidden bg-[#FBFBFB] dark:bg-[#111827] rounded-2xl w-full min-h-[190px] sm:min-h-[260px] md:min-h-[350px] px-5 py-6 sm:px-10 md:px-16 transition-colors duration-300">
          <div className="relative z-10 max-w-[560px]">
            <p className="text-[#3D3D3D] dark:text-gray-400 font-medium text-[10px] sm:text-sm tracking-widest mb-2 sm:mb-5"> {t("welcome")} </p>
            <h1 className="text-[#3D3D3D] dark:text-gray-100 font-black w-60 md:w-150 text-2xl md:text-5xl mb-2 sm:mb-4"> {t(`title_2`)}
              <span className="text-[#46A358]"> {t(`title2`)} </span>
            </h1>
            <p className="text-[#727272] dark:text-gray-400 text-[11px] md:text-base w-55 md:w-150">{t(`description_2`)}</p>
            <br />
            <button className="bg-[#46A358] text-white font-bold text-[10px] sm:text-sm px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-lg hover:bg-[#3b8b4a] transition-all">
              {t("shopNow")} →
            </button>
          </div>
          <div className="absolute right-0 bottom-0 w-[43%] sm:w-[40%] md:w-[42%] h-full flex items-center justify-center">
            <img
              src={Img_2}
              alt="Plant"
              className="w-80 object-contain drop-shadow-xl rounded-2xl"
            />
          </div>
        </div>
        <div className="relative flex items-center justify-between overflow-hidden bg-[#FBFBFB] dark:bg-[#111827] rounded-2xl w-full min-h-[190px] sm:min-h-[260px] md:min-h-[350px] px-5 py-6 sm:px-10 md:px-16 transition-colors duration-300">
          <div className="relative z-10 max-w-[560px]">
            <p className="text-[#3D3D3D] dark:text-gray-400 font-medium text-[10px] sm:text-sm tracking-widest mb-2 sm:mb-5"> {t("welcome")} </p>
            <h1 className="text-[#3D3D3D] dark:text-gray-100 font-black w-60 md:w-150 text-2xl md:text-5xl mb-2 sm:mb-4"> {t(`title_3`)}
              <span className="text-[#46A358]"> {t(`title3`)} </span>
            </h1>
            <p className="text-[#727272] dark:text-gray-400 text-[11px] md:text-base w-55 md:w-150">{t(`description_3`)}</p>
            <br />
            <button className="bg-[#46A358] text-white font-bold text-[10px] sm:text-sm px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-lg hover:bg-[#3b8b4a] transition-all">
              {t("shopNow")} →
            </button>
          </div>

          <div className="absolute right-0 bottom-0 w-[43%] sm:w-[40%] md:w-[42%] h-full flex items-center justify-center">
            <img
              src={Img_3}
              alt="Plant"
              className="w-80 object-contain drop-shadow-xl rounded-2xl"
            />
          </div>
        </div>
      </CustomSwiper>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6 sm:mt-10">
        <aside className="hidden md:block md:col-span-1 bg-gray-50 dark:bg-gray-800 p-4 rounded-xl h-fit">

          <h2 className="text-xl font-bold mb-4 dark:text-white">
            {t("categories")}
          </h2>

          <div className="flex flex-col gap-2">
            {catalogs.map((el) => (
              <button
                key={el.id}
                onClick={() => {
                  const settings = JSON.parse(localStorage.getItem("settings") || "{}")
                  setSelectedCatalog(el.id)
                  localStorage.setItem("settings", JSON.stringify({ ...settings, selectedCatalog: el.id, }))
                  getProducts(el.id)
                }}

                className={`w-full flex items-center justify-between px-4 py-2 rounded-xl text-sm font-medium transition-all
                  ${selectedCatalog == el.id ? "text-[#46A358]" : "text-gray-500 dark:text-gray-300"}`}>
                <span>{el.name}</span>
                <span>›</span>
              </button>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t
            border-gray-200 dark:border-gray-700">

            <h3 className="font-bold mb-5 dark:text-white">
              {t("priceRange")}
            </h3>

            <div className="flex flex-col gap-4">
              <div>
                <label className="text-sm text-gray-500">
                  {t("minimumPrice")}: {minPrice}
                </label>
                <input
                  type="range"
                  min="30"
                  max="7000"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="w-full accent-[#46A358]"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">
                  {t("maximumPrice")}: {maxPrice}
                </label>
                <input
                  type="range"
                  min="30"
                  max="7000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full accent-[#46A358]"
                />
              </div>

              <p className="text-sm font-bold text-[#46A358]">
                {minPrice} - {maxPrice}
              </p>
            </div>
          </div>

          <img
            src={Img_7}
            alt="Sale"
            className="w-full mt-8 rounded-xl"
          />
        </aside>

        <section className="md:col-span-3 min-w-0">

          <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl mb-5 sm:mb-7 focus-within:border-[#46A358]">
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-400 shrink-0"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>

            <input
              type="text"
              placeholder={t("searchProducts")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full min-w-0 bg-transparent outline-none text-sm text-gray-800 dark:text-white placeholder:text-gray-400"
            />

            <button className="text-[#46A358] font-semibold text-sm">
              {t("search")}
            </button>

          </div>

          <div className="flex md:hidden gap-5 overflow-x-auto pb-3 mb-5 whitespace-nowrap scrollbar-hide">

            {catalogs.map((el) => (
              <button
                key={el.id}
                onClick={() => {
                  const settings = JSON.parse(localStorage.getItem("settings") || "{}")
                  setSelectedCatalog(el.id)
                  localStorage.setItem("settings", JSON.stringify({ ...settings, selectedCatalog: el.id, }))
                  getProducts(el.id)
                }}
                className={`text-sm font-semibold pb-2 border-b-2  ${selectedCatalog == el.id
                  ? "text-[#46A358] border-[#46A358]"
                  : "text-gray-500 border-transparent"
                  }`}
              >
                {el.name}
              </button>
            ))}
          </div>

          <div className="md:hidden flex items-center gap-3 mb-5">
            <span className="text-xs text-gray-500 shrink-0">
              Price:
            </span>

            <input
              type="range"
              min="30"
              max="7000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full accent-[#46A358]"
            />

            <span className="text-xs font-semibold text-[#46A358] shrink-0">
              {maxPrice}
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3
            gap-x-3 gap-y-6 sm:gap-x-5 sm:gap-y-8">

            {filteredProducts.map((el) => {
              const productImage = productImages.find((item) => item.id == el.id)?.image

              const isFavorite = favorites.some((item) => item.id == el.id)

              return (
                <div
                  key={el.id}
                  className="min-w-0 group">

                  <div className="relative bg-[#F5F7F5] dark:bg-gray-800 rounded-2xl overflow-hidden aspect-square flex items-center justify-center">

                    <Link
                      to={`/product/${el.id}`}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <img
                        src={productImage || Img_2}
                        alt={el.name}
                        className="w-full h-full object-contain p-3 sm:p-5 transition-transform duration-500 group-hover:scale-105"
                      />
                    </Link>

                    
                    <button
                      type="button"
                      onClick={() => toggleFavorite(el)}
                      className="absolute top-2 right-2 w-8 h-8 sm:w-9 sm:h-9 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-sm transition-transform hover:scale-110"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                        fill={isFavorite ? "#EF4444" : "none"}
                        stroke={isFavorite ? "#EF4444" : "#374151"}
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
                      </svg>
                    </button>

                    <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center gap-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">

                      <Link
                        to={`/product/${el.id}`}
                        className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-gray-700"
                      >
                        <svg
                          width="19"
                          height="19"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <circle cx="11" cy="11" r="7" />
                          <path d="m20 20-4-4" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  <Link to={`/product/${el.id}`}>
                    <h3 className="font-medium text-xs sm:text-base mt-3 line-clamp-2 text-gray-800 dark:text-white min-h-[34px] sm:min-h-0">
                      {el.name}
                    </h3>
                  </Link>

                  <p className="text-[#46A358] font-bold text-sm sm:text-base mt-1">
                    {el.price} {el.currency}
                  </p>
                </div>
              )
            })}

          </div>
        </section>
      </div>

      <section className="py-10 sm:py-16">

        <div className="text-center mb-8 sm:mb-9">
          <h2 className="text-gray-800 dark:text-white
            font-bold text-2xl sm:text-3xl mb-3">
            {t("ourBlogPosts")}
          </h2>

          <p className="text-[#727272] text-xs sm:text-sm max-w-[460px] mx-auto">
            We are an online plant shop offering a wide
            range of cheap and trendy plants.
          </p>
        </div>

        <div className="grid grid-cols-2
          lg:grid-cols-4 gap-3 sm:gap-6">

          {[
            {
              image: Img_8,
              date: "September 12",
              read: "6 minutes",
              title: "cactusCare",
              description: "Cacti are succulents are easy care plants for any home or patio.",
            },
            {
              image: Img_9,
              date: "September 13",
              read: "2 minutes",
              title: "topSucculents",
              description: "Best in hanging baskets. Prefers medium to high light.",
            },
            {
              image: Img_10,
              date: "September 15",
              read: "3 minutes",
              title: "succulentCare",
              description: "Cacti and succulents thrive in containers.",
            },
            {
              image: Img_11,
              date: "September 15",
              read: "2 minutes",
              title: "bestHouseplants",
              description: "The benefits of houseplants are endless.",
            },
          ].map((blog, index) => (
            <div
              key={index}
              className="bg-[#FBFBFB] dark:bg-gray-800 rounded-xl overflow-hidden group"
            >
              <div className="overflow-hidden bg-[#F5F5F5] h-[130px] sm:h-[250px]">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-3 sm:p-4">
                <p className="text-[#46A358] font-medium text-[9px] sm:text-xs mb-2">
                  {blog.date} | Read in {blog.read}
                </p>

                <h3 className="text-gray-800 dark:text-white font-bold text-sm sm:text-lg leading-5 sm:leading-6 mb-2 line-clamp-2">
                  {t(blog.title)}
                </h3>

                <p className="text-[#727272] text-[10px] sm:text-sm leading-relaxed mb-3 line-clamp-3">
                  {blog.description}
                </p>

                <div className="text-gray-800 dark:text-gray-200 group-hover:text-[#46A358] font-bold text-xs sm:text-sm flex items-center gap-1">
                  {t("readMore")} →
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
                       