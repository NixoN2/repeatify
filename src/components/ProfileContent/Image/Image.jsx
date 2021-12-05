import Animal from "react-animals";
const Image = ({color,animal}) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div>
                <Animal size="200px" circle name={animal} color={color}/>
            </div>
        </div>
    )
}

export default Image;