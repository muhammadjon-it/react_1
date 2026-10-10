const Modal = ({ open, setOpen, title, children }) => {
    return (

        open ? (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                <div className="bg-white w-100 h-120 m-auto mt-5 border border-gray-300 rounded-2xl py-5">
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: "15px", fontSize: "30px" }}>
                        <p className="text-2xl font-bold text-black">{title} User</p>
                        <button onClick={() => setOpen((prev) => !prev)} className="  px-2 text-black cursor-pointer rounded-[2px]  hover:text-white hover:bg-red-500 ">×</button>
                    </div>
                    {children}
                    <button onClick={() => setOpen((prev) => !prev)} className="border w-[80%] mt-3 py-2 border-gray-500 cursor-pointer font-[500] hover:text-red-500 hover:border-red-500 hover:bg-red-50 rounded-lg">Cansel</button>
                </div>
            </div>)
            : null

    )
}

export default Modal