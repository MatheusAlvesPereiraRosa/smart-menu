

interface Props {
    badge: string
    food_type: string
}

export const FoodFilter = ({ badge, food_type }: Props) => {

    console.log()

    return (
        <div className='pb-3 border-b-2 border-black cursor-pointer'>
            <img src={badge} alt="" />

            <p className='text-center mt-6'>{food_type}</p>

        </div>
    )
}