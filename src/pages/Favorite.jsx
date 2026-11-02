
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import Footer from "./Footer";

const Favorite = () => {

  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    setFavorites(savedFavorites);
  }, []);

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter(
      (item) => item.id != id
    );

    setFavorites(updatedFavorites);

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const addToCart = (item) => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingProduct = savedCart.find(
      (product) => product.id == item.id
    );

    let updatedCart = [];

    if (existingProduct) {
      updatedCart = savedCart.map((product) =>
        product.id == item.id ? { ...product, quantity: product.quantity + 1, } : product);
    } else {
      updatedCart = [...savedCart, {
        id: item.id,
        name: item.name,
        price: item.price,
        currency: item.currency,
        image: item.image,
        quantity: 1,
      },
      ];
    }



    localStorage.setItem("cart", JSON.stringify(updatedCart));

    navigate("/shop");
  };

  return (
    <>
      <div className="container mx-auto px-5 py-10 min-h-[50vh]">

        <h1 className="text-3xl font-bold mb-8">
          My Favorites
        </h1>

        {favorites.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg mb-5">
              Your favorite list is empty.
            </p>

            <Link
              to="/"
              className="bg-green-600 text-white px-6 py-3 rounded-lg"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {favorites.map((item) => (
              <div
                key={item.id}
                className="border-2 border-gray-200 rounded-xl px-2 py-4 hover:shadow-md transition w-90"
              >
                <Link to={`/product/${item.id}`}>
                  <div className="bg-gray-50 rounded-lg h-56 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <h2 className="font-semibold mt-4">
                    {item.name}
                  </h2>
                </Link>

                <p className="text-green-600 font-bold mt-2">
                  {item.price} {item.currency}
                </p>

                <div className="flex gap-3 mt-5">

                  <button
                    onClick={() => addToCart(item)}
                    className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                  >
                    Add to Cart
                  </button>

                  <button
                    onClick={() => removeFavorite(item.id)}
                    title="Remove from favorites"
                    className="border rounded-lg px-3 border-red-400 hover:bg-red-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill={"#EF4444"}
                      stroke={"#EF4444"}
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
                    </svg>
                  </button>

                </div>
              </div>
            ))}

          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Favorite;
