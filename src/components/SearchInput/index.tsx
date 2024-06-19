import { IoSearchOutline } from "react-icons/io5";

export const SearchInput = () => {

    return (
        <div className='relative w-full my-2'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <IoSearchOutline size={23} className='text-gray-400' />
            </div>
            <input
                className='w-full pl-10 px-3 py-2 rounded-md border border-gray-300'
                type="text"
                placeholder='Search menu items'
            />
        </div>
    )
}