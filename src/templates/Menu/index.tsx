import { useState } from 'react'
import { Header } from '../../components/Header'

import hamburguer from "../../assets/logo.png"
import burguer_badge from "../../assets/burguer-badge.png"
import desserts_badge from "../../assets/dessert-badge.png"
import drink_badge from "../../assets/drink-badge.png"

import { SearchInput } from '../../components/SearchInput'
import { FoodFilter } from '../../components/FoodFilter'

export const Menu = () => {

    return (
        <>
            <Header />
            <main className='w-full flex flex-col items-center'>
                <div className='relative w-full max-h-[10rem] overflow-hidden'>
                    <img
                        className='w-full h-full object-cover object-center'
                        src={hamburguer}
                    />
                </div>

                <section className='flex flex-col justify-center mx-2 md:min-w-[700px]'>

                    <SearchInput />

                    <div className='w-full bg-gray-100'>
                        <div className='p-3 bg-white shadow-md'>
                            <div className='flex gap-8 mb-3 px-3'>
                                <FoodFilter badge={burguer_badge} food_type='Burguer' />
                                <FoodFilter badge={burguer_badge} food_type='Drink' />
                                <FoodFilter badge={burguer_badge} food_type='Dessert' />
                            </div>
                        </div>
                    </div>

                    
                </section>
            </main>
        </>
    )
}
