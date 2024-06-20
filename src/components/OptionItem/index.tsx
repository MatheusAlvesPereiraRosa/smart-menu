

interface Props {
    text: string
    value: number
}

export const OptionItem = ({text, value}: Props) => {

    return (
        <div className="flex justify-between">
            <div>
                <p>{text}</p>
                <p className="text-gray-600">R${value}</p>
            </div>

            <input type="radio" name="fav_language" value="HTML" />
        </div>
    )
}