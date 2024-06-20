import { useState } from 'react'
import { Header } from '../../components/Header'

import hamburguer from "../../assets/logo.png"
import burguer_badge from "../../assets/burguer-badge.png"
import dessert_badge from "../../assets/dessert-badge.png"
import drink_badge from "../../assets/drink-badge.png"
import litle_prev from "../../assets/litle-prev.png"

import { IoIosArrowUp } from "react-icons/io";
import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";

import { Modal } from '../../components/Modal'
import { SearchInput } from '../../components/SearchInput'
import { FoodFilter } from '../../components/FoodFilter'

export const Menu = () => {

    const [isShow, setIsShow] = useState<boolean>(false)

    const showModal = () => {
        setIsShow(true)
    }

    const closeModal = () => {
        setIsShow(false)
    }

    const cart = true

    return (
        <>
            <Header />
            <Modal isShow={isShow} closeModal={closeModal} />
            <main className='w-full flex flex-col items-center'>
                <div className='relative w-full max-h-[10rem] overflow-hidden'>
                    <img
                        className='w-full h-full object-cover object-center'
                        src={hamburguer}
                    />
                </div>

                <section className='flex flex-col justify-center px-4 lg:min-w-[950px] min-w-full'>

                    <SearchInput />

                    <div className='w-full p-6 bg-gray-100 grid grid-cols-1 md:grid-cols-5 items-start gap-5'>
                        <div className='p-5 bg-white custom-shadow col-span-3'>

                            <div className='flex gap-8 mb-3'>
                                <FoodFilter badge={burguer_badge} food_type='Burguer' />
                                <FoodFilter badge={dessert_badge} food_type='Drink' />
                                <FoodFilter badge={drink_badge} food_type='Dessert' />
                            </div>

                            <div className='mt-6'>
                                <div className='flex justify-between mb-4'>
                                    <h1 className='text-xl font-bold'>Burguer</h1>

                                    <IoIosArrowUp size={24} />
                                </div>

                                <div className='flex'>
                                    <div className='flex flex-col'>
                                        <div onClick={showModal}>
                                            <h1>Smashed Croked</h1>
                                            <p className='text-gray-500'>180g angus beef burger, plus ribs, gruyere cheese...</p>
                                            <p className='text-gray-700'>R$33.00</p>
                                        </div>
                                    </div>

                                    <div className="ms-6 max-w-[8rem] min-w=[6rem] aspect-auto">
                                        <img className="w-full object-fill" src={litle_prev} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-6'>
                                <div className='flex justify-between mb-4'>
                                    <h1 className='text-xl font-bold'>Drink</h1>

                                    <IoIosArrowUp size={24} />
                                </div>

                                <div className='flex flex-col'>
                                    <div onClick={showModal}>
                                        <h1>Smashed Croked</h1>
                                        <p className='text-gray-500'>180g angus beef burger, plus ribs, gruyere cheese...</p>
                                        <p className='text-gray-700'>R$33.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full bg-white custom-shadow col-span-2'>
                            <div className='p-4 bg-gray-cart'>
                                <h1 className='text-lg font-bold'>Carrinho</h1>
                            </div>
                            {cart === false
                                ?
                                <div className='p-4'>
                                    Seu carrinho está vazio
                                </div>
                                :
                                <>
                                    <div className='flex flex-col gap-3'>
                                        <div className='p-3'>
                                            <div className='flex justify-between'>
                                                <div className="flex flex-col">
                                                    <h2>Hamburguer</h2>
                                                    <span className='text-gray-700'>2 carnes</span>
                                                </div>

                                                <p>R$20.00</p>
                                            </div>

                                            <div className='flex items-center gap-3 mt-2 ms-4'>
                                                <button className='bg-brown rounded-full'>
                                                    <TiMinus size={20} className='text-white' />
                                                </button>

                                                2

                                                <button className='bg-brown rounded-full'>
                                                    <TiPlus size={20} className='text-white' />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-between p-4 bg-gray-cart border-y border-gray-300'>
                                        <p className='text-md'>Subtotal:</p>
                                        <p className='font-bold'>24.80</p>
                                    </div>
                                    <div className='flex justify-between p-4 bg-gray-cart'>
                                        <p className='text-lg'>Total: </p>
                                        <p className='text-lg font-bold'>R$58.00</p>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
