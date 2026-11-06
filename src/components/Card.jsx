import Button from "./Button"
import ButtonEdit from "./ButtonEdit"
import ButtonTeleg from "./ButtonTeleg"

const Card = (props) => {
    const { name, branch, student, week, status } = props
    return (
        <div className="bg-white  shadow-2xl rounded-lg border-grey-300 m-1 w-73 p-3 m-5 px-5" >
            <div className="w-2 h-2 bg-green-400 rounded-full ml-[-10px]">

            </div>
            <p className="text-start text-[#000000] font-bold text-lg">{name}</p>
            <br />
            <div className="flex items-center justify-between">
                <p className="text-[16px] bg-indigo-200 px-2 border-indigo-700 border-1 rounded-[4px] text-indigo-700 font-[500]">{branch}</p>
                <p className="text-start bg-green-400 text-white px-3  rounded-2xl ">{student}</p>
            </div>
            <br />
            <hr className="h-[2px] bg-gray-400" />
            <br />
            <div className="flex items-center justify-between">
                <p className="text-start bg-red-400 text-white px-3  rounded-2xl ">{student}</p>
                <p className="font-[600] text-[#000000] ">{week}</p>
            </div>
            <br />
            <div className="flex items-center justify-between">
                <Button text="Journal" />
                <div className="flex gap-3">
                    <ButtonTeleg text="telegram" />
                    <ButtonEdit text="edit" />
                </div>
            </div>
        </div>
    )
}

export default Card