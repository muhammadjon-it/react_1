
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Footer from "./Footer";
import Img_15 from "@/images/image copy 15.png"

const delivery = 20;

const Checkout = () => {
    const navigate = useNavigate();

    const [cart, setCart] = useState([]);
    const [paymentMethod, setPaymentMethod] = useState("");
    const [showReceipt, setShowReceipt] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(null);
    const [customer, setCustomer] = useState({});



    const subtotal = cart.reduce(
        (sum, item) => sum + item.price * item.quantity, 0);

    const total = subtotal + delivery;

/// FUNCTION ORDER

    const handleSubmit = (e) => {
        e.preventDefault();

        const order = {
            orderNumber: Date.now(),
            customer,
            products: cart,
            subtotal,
            delivery,
            total,
            paymentMethod,
            orderDate: new Date().toLocaleDateString(),
        };

        localStorage.setItem("currentOrder", JSON.stringify(order));
        localStorage.removeItem("cart");

        setCurrentOrder(order);
        setShowReceipt(true);
    };


    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(savedCart);
    }, []);

    if (cart.length === 0) {
        return (
            <div className="container mx-auto px-5 py-20 text-center">
                <h2 className="text-2xl font-bold mb-4">
                    Your cart is empty
                </h2>

                <button
                    onClick={() => navigate("/shop")}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg"
                >
                    Go to Shop
                </button>
            </div>
        );
    }



    const closeReceipt = () => {localStorage.removeItem("currentOrder"); navigate("/");};



    return (
        <>
            <div className="container mx-auto px-5 py-10">

                <p className="text-sm text-gray-500 mb-8">
                    Home / Shop / <span className="text-green-600">Checkout</span>
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-10"
                >

                    <div className="lg:col-span-2">
                        <h1 className="text-2xl font-bold mb-7">
                            Billing Address
                        </h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    First Name *
                                </label>
                                <input
                                    name="firstName"
                                    type="text"
                                    required
                                    className="w-full border border-gray-200 rounded-md px-3 py-3 outline-none focus:border-green-500 transition"
                                    placeholder="First Name"
                                    value={customer?.firstName}
                                    onChange={(e) => setCustomer({ ...customer, firstName: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Last Name *
                                </label>
                                <input
                                    name="lastName"
                                    type="text"
                                    required
                                    className="w-full border border-gray-200 rounded-md px-3 py-3 outline-none focus:border-green-500 transition"
                                    placeholder="Last Name"
                                    value={customer?.lastName}
                                    onChange={(e) => setCustomer({ ...customer, lastName: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Country / Region *
                                </label>
                                <select
                                    name="country"
                                    required
                                    className="w-full border border-gray-200 rounded-md px-3 py-3 outline-none focus:border-green-500 transition"
                                    value={customer?.country}
                                    onChange={(e) => setCustomer({ ...customer, country: e.target.value })}
                                >
                                    <option value="" disabled>
                                        Select a country
                                    </option>
                                    <option value="Tajikistan">Tajikistan</option>
                                    <option value="Uzbekistan">Uzbekistan</option>
                                    <option value="Russia">Russia</option>
                                    <option value="China">China</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Town / City *
                                </label>
                                <input
                                    name="city"
                                    type="text"
                                    required
                                    className="w-full border border-gray-200 rounded-md px-3 py-3 outline-none focus:border-green-500 transition"
                                    placeholder="Your city"
                                    value={customer?.city}
                                    onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Street Address *
                                </label>
                                <input
                                    name="street"
                                    type="text"
                                    required
                                    className="w-full border border-gray-200 rounded-md px-3 py-3 outline-none focus:border-green-500 transition"
                                    placeholder="House number and street name"
                                    value={customer?.street}
                                    onChange={(e) => setCustomer({ ...customer, street: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Apartment / Suite
                                </label>
                                <input
                                    name="apartment"
                                    type="text"
                                    className="w-full border border-gray-200 rounded-md px-3 py-3 outline-none focus:border-green-500 transition"
                                    placeholder="Apartment, suite, etc."
                                    value={customer?.apartment}
                                    onChange={(e) => setCustomer({ ...customer, apartment: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    State / Province *
                                </label>
                                <input
                                    name="state"
                                    type="text"
                                    required
                                    className="w-full border border-gray-200 rounded-md px-3 py-3 outline-none focus:border-green-500 transition"
                                    placeholder="Your state"
                                    value={customer?.state}
                                    onChange={(e) => setCustomer({ ...customer, state: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    ZIP / Postal Code *
                                </label>
                                <input
                                    name="zip"
                                    type="text"
                                    required
                                    className="w-full border border-gray-200 rounded-md px-3 py-3 outline-none focus:border-green-500 transition"
                                    placeholder="Postal code"
                                    value={customer?.zip}
                                    onChange={(e) => setCustomer({ ...customer, zip: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    className="w-full border border-gray-200 rounded-md px-3 py-3 outline-none focus:border-green-500 transition"
                                    placeholder="example@gmail.com"
                                    value={customer?.email}
                                    onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number *
                                </label>
                                <input
                                    name="phone"
                                    type="tel"
                                    required
                                    className="w-full border border-gray-200 rounded-md px-3 py-3 outline-none focus:border-green-500 transition"
                                    placeholder="+992 000 00 00"
                                    value={customer?.phone}
                                    onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                                />
                            </div>

                        </div>

                        <div className="mt-7">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Order Notes (Optional)
                            </label>

                            <textarea
                                name="orderNotes"
                                className="w-full border border-gray-200 rounded-md px-3 py-3 outline-none focus:border-green-500 transition"
                                placeholder="Notes about your order..."
                                value={customer?.orderNotes}
                                onChange={(e) => setCustomer({ ...customer, orderNotes: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-5 h-fit">
                        <h2 className="text-xl font-bold mb-5">
                            Your Order
                        </h2>

                        <div className="flex justify-between text-sm font-medium border-b pb-3">
                            <span>Products</span>
                            <span>Subtotal</span>
                        </div>

                        <div className="divide-y">
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center gap-3 py-1"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-12 h-12 object-contain"
                                    />

                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-800">
                                            {item.name}
                                        </p>

                                        <p className="text-xs text-gray-400">
                                            ( x {item.quantity} )
                                        </p>
                                    </div>

                                    <span className="text-sm font-semibold text-green-600">
                                        ${(item.price * item.quantity)}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-between border-t py-4 text-sm">
                            <span>Subtotal</span>
                            <span>${subtotal}</span>
                        </div>

                        <div className="flex justify-between border-t py-4 text-sm">
                            <span>Shipping</span>
                            <span>${delivery.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between border-t py-4 font-bold">
                            <span>Total</span>
                            <span className="text-green-600 text-lg">
                                ${total.toFixed(2)}
                            </span>
                        </div>

                        <h3 className="font-semibold mt-4 mb-3">
                            Payment Method
                        </h3>

                        <div className="space-y-3">

                            <label className="flex items-center gap-3 border rounded-lg px-3 py-1 cursor-pointer">
                                <input
                                    type="radio"
                                    required
                                    name="payment"
                                    checked={paymentMethod === "paypal"}
                                    onChange={() => setPaymentMethod("paypal")}
                                    className="accent-green-600"
                                />
                                <span className="text-sm">
                                    <img src={Img_15} alt="" />
                                </span>
                            </label>

                            <label className="flex items-center gap-3 border rounded-lg p-3 cursor-pointer">
                                <input
                                    type="radio"
                                    name="payment"
                                    checked={paymentMethod === "bank"}
                                    onChange={() => setPaymentMethod("bank")}
                                    className="accent-green-600"
                                />
                                <span className="text-sm">
                                    Direct bank transfer
                                </span>
                            </label>

                            <label className="flex items-center gap-3 border rounded-lg p-3 cursor-pointer">
                                <input
                                    type="radio"
                                    name="payment"
                                    checked={paymentMethod === "cash"}
                                    onChange={() => setPaymentMethod("cash")}
                                    className="accent-green-600"
                                />
                                <span className="text-sm">
                                    Cash on delivery
                                </span>
                            </label>

                        </div>

                        <button
                            type="submit"
                            className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                        >
                            Place Order
                        </button>

                    </div>
                </form>
            </div>

            {showReceipt && currentOrder && (
                <div className="fixed inset-0 z-[100] bg-black/40 flex items-center justify-center p-1">

                    <div className="relative bg-white w-base rounded-sm shadow-2xl overflow-hidden">

                        <button
                            onClick={closeReceipt}
                            className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xl"
                        >
                            ✕
                        </button>

                        <div className="px-10 py-2">

                            <div className="bg-green-50 mx-[-40px] my-[-8px] py-2">

                                <div className="flex justify-center">
                                    <svg width="70" height="70" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M36.698 25.9317C37.302 26.1624 37.9797 25.8588 38.2101 25.2536L38.6031 24.2217H41.3756L41.7637 25.2503C41.9408 25.7195 42.3867 26.0088 42.8603 26.0088C42.9978 26.0088 43.1376 25.9844 43.2739 25.933C43.8793 25.7045 44.185 25.0284 43.9564 24.4228L41.2489 17.2483C41.245 17.2378 41.2408 17.227 41.2365 17.2167C41.0297 16.7133 40.5443 16.3881 40.0001 16.3881C39.9998 16.3881 39.9995 16.3881 39.9992 16.3881C39.4545 16.3884 38.9692 16.7144 38.7629 17.2183C38.7594 17.2273 38.7556 17.2361 38.7523 17.2453L36.02 24.4195C35.7895 25.0242 36.0931 25.7013 36.698 25.9317V25.9317ZM40.4911 21.8781H39.4958L39.9956 20.5656L40.4911 21.8781Z" fill="#46A358" />
                                        <path d="M46.3301 26.0085C46.9774 26.0085 47.502 25.4839 47.502 24.8366V21.3327L50.2768 25.3508C50.6105 25.8333 51.1716 26.0377 51.7063 25.8708C52.2499 25.7013 52.601 25.1989 52.601 24.58L52.533 17.5486C52.5268 16.9053 52.0034 16.388 51.3615 16.388C51.3576 16.388 51.3537 16.388 51.3499 16.388C50.7026 16.3943 50.183 16.9241 50.1893 17.5711L50.224 21.1497L47.2945 16.9075C47.003 16.4855 46.4715 16.3024 45.9813 16.4547C45.4918 16.6074 45.1582 17.0607 45.1582 17.5735V24.8364C45.1582 25.4839 45.6827 26.0085 46.3301 26.0085Z" fill="#46A358" />
                                        <path d="M55.2482 26.0084C55.8956 26.0084 56.4201 25.4839 56.4201 24.8366V23.5698L58.6073 25.68C58.8346 25.8994 59.1279 26.0086 59.4207 26.0086C59.7278 26.0086 60.0343 25.8886 60.2642 25.6503C60.7135 25.1847 60.7003 24.4427 60.2345 23.9934L57.1904 21.0564L59.9556 18.5145C60.4321 18.0766 60.4634 17.3352 60.0253 16.8587C59.5874 16.3822 58.8459 16.3511 58.3695 16.7891L56.4199 18.5809V17.56C56.4199 16.9127 55.8954 16.3881 55.2481 16.3881C54.6007 16.3881 54.0762 16.9127 54.0762 17.56V24.8366C54.0763 25.4839 54.6009 26.0084 55.2482 26.0084V26.0084Z" fill="#46A358" />
                                        <path d="M28.4082 26.0084C29.0555 26.0084 29.5801 25.4839 29.5801 24.8366V22.2453H32.272V24.8366C32.272 25.4839 32.7965 26.0084 33.4438 26.0084C34.0912 26.0084 34.6157 25.4839 34.6157 24.8366V17.56C34.6157 16.9127 34.0912 16.3881 33.4438 16.3881C32.7965 16.3881 32.272 16.9127 32.272 17.56V19.9016H29.5801V17.56C29.5801 16.9127 29.0555 16.3881 28.4082 16.3881C27.7609 16.3881 27.2363 16.9127 27.2363 17.56V24.8366C27.2363 25.4839 27.7609 26.0084 28.4082 26.0084Z" fill="#46A358" />
                                        <path d="M25.6513 31.64L27.7842 34.9061L27.7759 38.273C27.7743 38.9203 28.2978 39.4463 28.9448 39.4478H28.9478C29.5937 39.4478 30.1181 38.925 30.1196 38.2789L30.1279 34.908L32.244 31.657C32.5971 31.1145 32.4437 30.3886 31.9014 30.0356C31.359 29.6822 30.6329 29.8359 30.2799 30.3783L28.9553 32.4131L27.6135 30.3586C27.2596 29.8166 26.5338 29.6645 25.9917 30.0181C25.4499 30.372 25.2973 31.0981 25.6513 31.64V31.64Z" fill="#46A358" />
                                        <path d="M43.7277 36.0064C43.7277 37.1997 44.2938 38.1662 45.4104 38.8798C45.9988 39.2556 46.6618 39.4467 47.381 39.4478H47.3864C48.0038 39.4478 48.5843 39.3133 49.1118 39.0475C50.4118 38.3928 51.1277 37.3109 51.1277 36.0011V30.9992C51.1277 30.3519 50.6032 29.8273 49.9558 29.8273C49.3085 29.8273 48.7839 30.3519 48.7839 30.9992V36.0011C48.7839 36.3061 48.696 36.6326 48.0575 36.9542C47.8574 37.0551 47.6379 37.104 47.3866 37.104C47.3858 37.104 47.3849 37.104 47.3841 37.104C47.1143 37.1037 46.8813 37.0384 46.6721 36.9048C46.1172 36.5503 46.0713 36.2776 46.0713 36.0065V30.9994C46.0713 30.352 45.5468 29.8275 44.8994 29.8275C44.2521 29.8275 43.7275 30.352 43.7275 30.9994V36.0064H43.7277Z" fill="#46A358" />
                                        <path d="M20.7627 18.7319H21.5921V24.8366C21.5921 25.4839 22.1166 26.0084 22.764 26.0084C23.4113 26.0084 23.9358 25.4839 23.9358 24.8366V18.7319H24.7813C25.4286 18.7319 25.9532 18.2073 25.9532 17.56C25.9532 16.9127 25.4286 16.3881 24.7813 16.3881H20.7627C20.1154 16.3881 19.5908 16.9127 19.5908 17.56C19.5908 18.2073 20.1154 18.7319 20.7627 18.7319V18.7319Z" fill="#46A358" />
                                        <path d="M37.6305 29.8275C34.9781 29.8275 32.8203 31.9855 32.8203 34.6376C32.8203 37.2898 34.9783 39.4478 37.6305 39.4478C40.283 39.4478 42.4408 37.2898 42.4408 34.6376C42.4408 31.9855 40.2828 29.8275 37.6305 29.8275ZM37.6305 37.104C36.2705 37.104 35.1641 35.9976 35.1641 34.6376C35.1641 33.2776 36.2705 32.1712 37.6305 32.1712C38.9905 32.1712 40.097 33.2776 40.097 34.6376C40.097 35.9976 38.9905 37.104 37.6305 37.104Z" fill="#46A358" />
                                        <path d="M70.7969 28.0734L67.347 24.4797V9.46422C67.347 7.37484 65.6472 5.67484 63.5577 5.67484H49.2933C49.2897 5.67109 49.2867 5.66687 49.2831 5.66313L46.5102 2.77469C44.7923 0.985469 42.4803 0 40 0C37.5197 0 35.2077 0.985469 33.49 2.77469L30.7056 5.675H16.4423C14.3528 5.675 12.653 7.375 12.653 9.46437V24.48L9.20313 28.0734C8.05203 29.2725 7.41797 30.8483 7.41797 32.5103V76.2106C7.41797 78.3002 9.11797 80 11.2073 80H68.7925C70.8819 80 72.5819 78.3002 72.5819 76.2106V32.5103C72.5819 30.8483 71.948 29.2725 70.7969 28.0734V28.0734ZM69.1061 29.6967C69.8361 30.457 70.2381 31.4564 70.2381 32.5105V35.168L67.3469 38.1797V27.8641L69.1061 29.6967ZM35.1806 4.39781C36.4523 3.07328 38.1637 2.34375 40 2.34375C41.8363 2.34375 43.5477 3.07328 44.8194 4.39781L46.0453 5.67484H33.9547L35.1806 4.39781ZM16.4423 8.01859H63.5575C64.3547 8.01859 65.0031 8.66703 65.0031 9.46422V40.6209L52.5639 53.5784L46.5098 47.2722C44.7922 45.483 42.4802 44.4975 39.9998 44.4975C37.5195 44.4975 35.2075 45.483 33.4898 47.2722L27.4358 53.5784L14.9966 40.6209V9.46422C14.9967 8.66719 15.6453 8.01859 16.4423 8.01859V8.01859ZM25.8116 55.2706L9.76188 71.9891V38.5522L25.8116 55.2706ZM9.76188 32.5103C9.76188 31.4562 10.1639 30.4569 10.8939 29.6966L12.6531 27.8641V38.1794L9.76188 35.1677V32.5103ZM68.7925 77.6562H11.2075C10.4103 77.6562 9.76188 77.0078 9.76188 76.2106V75.3733L35.1808 48.8953C36.4525 47.5706 38.1639 46.8412 40.0002 46.8412C41.8364 46.8412 43.5478 47.5708 44.8195 48.8953L54.2317 58.6997C54.68 59.1667 55.4217 59.1814 55.8886 58.7334C56.3553 58.2853 56.3706 57.5434 55.9223 57.0766L54.1886 55.2706L70.2383 38.5522V71.9891L59.6914 61.0028C59.2431 60.5359 58.5014 60.5209 58.0345 60.9691C57.5678 61.4172 57.5525 62.1591 58.0008 62.6259L70.2383 75.3733V76.2105C70.2381 77.0078 69.5897 77.6562 68.7925 77.6562V77.6562Z" fill="#46A358" />
                                    </svg>
                                </div>

                                <h2 className="text-center text-xl font-semibold mt-4">
                                    Thank You!
                                </h2>

                                <p className="text-center text-sm text-gray-500 mt-2">
                                    Your order has been received
                                </p>

                            </div>
                            <div className="grid grid-cols-4 gap-2 border-y border-gray-200 py-4 mt-5 text-xs">

                                <div>
                                    <p className="text-gray-400">Order Number</p>
                                    <p className="font-semibold mt-1">
                                        {currentOrder.orderNumber}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-gray-400">Date</p>
                                    <p className="font-semibold mt-1">
                                        {currentOrder.orderDate}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-gray-400">Total</p>
                                    <p className="font-semibold mt-1 text-green-600">
                                        ${currentOrder.total}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-gray-400">Payment Method</p>
                                    <p className="font-semibold mt-1">
                                        {currentOrder.paymentMethod === "cash"? "Cash on delivery": currentOrder.paymentMethod === "bank"? "Bank transfer": "PayPal / Card"}
                                    </p>
                                </div>

                            </div>

                            <h3 className="font-semibold mt-5 mb-3">
                                Order Details
                            </h3>

                            <div className="flex justify-between text-sm border-b pb-2">
                                <span>Products</span>
                                <span>Qty</span>
                                <span>Subtotal</span>
                            </div>

                            <div className="max-h-52 overflow-y-auto">
                                {currentOrder.products.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center justify-between gap-2  border-b border-gray-100"
                                    >
                                        <div className="flex items-center gap-2 flex-1 min-w-0">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-12 h-12 object-contain"
                                            />

                                            <span className="text-xs font-medium">
                                                {item.name}
                                            </span>
                                        </div>

                                        <span className="text-xs text-gray-500">
                                            ( x {item.quantity} )
                                        </span>

                                        <span className="text-xs font-semibold text-green-600">
                                            ${(item.price * item.quantity)}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-2 text-sm mt-4">

                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span>${currentOrder.delivery}</span>
                                </div>

                                <div className="flex justify-between font-bold border-t pt-3">
                                    <span>Total</span>
                                    <span className="text-green-600">
                                        ${currentOrder.total}
                                    </span>
                                </div>

                            </div>

                            <p className="text-center text-xs text-gray-400 mt-5">
                                Your order is currently being processed.
                                Thank you for choosing GreenShop!
                            </p>

                            <button
                                onClick={closeReceipt}
                                className="block mx-auto mt-5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-7 py-3 rounded-md transition"
                            >
                                Back to Home
                            </button>

                        </div>
                        <div className="h-1.5 bg-green-600"></div>

                    </div>
                </div>
            )}

            <Footer />

        </>
    );
};

export default Checkout;
