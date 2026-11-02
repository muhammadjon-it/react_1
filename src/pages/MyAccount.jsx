
import { api } from "@/api/Auth";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Account = () => {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();


    // FUNCTION GET DATA

    async function getUser() {
        try {
            const token = localStorage.getItem("token");

            const { data } = await axios.get(api + "/auth/me", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setUser(data);
        } catch (error) {
            console.log("Error:", error);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login", { replace: true });
    };


    return (
        <div className="min-h-[75vh] bg-gray-50 dark:bg-[#111827] px-4 py-12 transition-colors">
            <div className="max-w-5xl mx-auto">

                <div className="mb-8">
                    <p className="text-sm text-green-600 font-semibold uppercase tracking-wider">
                        GreenShop / Profile
                    </p>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">
                        My Account
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                        Manage your personal information and account settings.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-white dark:bg-[#1f2937] rounded-2xl p-7 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center">

                        <div className="w-24 h-24 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center text-4xl font-bold text-green-600">
                            {user?.name?.charAt(0).toUpperCase()}
                        </div>

                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-4">
                            {user?.name}
                        </h2>

                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {user?.email}
                        </p>

                        <span className="mt-4 px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 text-sm font-semibold">
                            {user?.role}
                        </span>

                        <div className="w-full border-t border-gray-100 dark:border-gray-700 my-7" />

                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center justify-center gap-2 bg-red-50 hover:bg-red-500 text-red-600 hover:text-white border border-red-100 hover:border-red-500 py-3 rounded-xl font-semibold transition-all duration-300"
                        >
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                    <polyline points="16 17 21 12 16 7" />
                                    <line x1="21" y1="12" x2="9" y2="12" />
                                </svg>
                            </span>
                            Logout
                        </button>
                    </div>

                    <div className="md:col-span-2 bg-white dark:bg-[#1f2937] rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-gray-700">

                        <div className="flex items-center justify-between mb-7">
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                                    Personal Information
                                </h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    Your account details
                                </p>
                            </div>

                            <div className="w-11 h-11 rounded-xl bg-green-50 dark:bg-green-900/30 flex items-center justify-center text-green-600 text-xl">
                                ✦
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                            <div className="p-5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                    User ID
                                </p>
                                <p className="text-lg font-bold text-gray-900 dark:text-white">
                                    {user?.id}
                                </p>
                            </div>

                            <div className="p-5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                    Full Name
                                </p>
                                <p className="text-lg font-bold text-gray-900 dark:text-white">
                                    {user?.name}
                                </p>
                            </div>

                            <div className="p-5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                    Email Address
                                </p>
                                <p className="text-base font-semibold text-gray-900 dark:text-white break-all">
                                    {user?.email}
                                </p>
                            </div>

                            <div className="p-5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                    City
                                </p>
                                <p className="text-lg font-bold text-gray-900 dark:text-white">
                                    {user?.city}
                                </p>
                            </div>

                        </div>

                        <div className="mt-6 p-5 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-900/40">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <p className="text-sm font-semibold text-green-700 dark:text-green-400">
                                    Your account is active
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );

};

export default Account;
