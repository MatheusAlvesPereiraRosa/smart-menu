import { OptionItem } from "../OptionItem"


export const OptionList = () => {

    return (
        <div className="flex flex-col mt-2 gap-3">
            <OptionItem text="1 Meat" value={33.00} />
            <OptionItem text="1 Meat" value={33.00} />
        </div>
    )
}