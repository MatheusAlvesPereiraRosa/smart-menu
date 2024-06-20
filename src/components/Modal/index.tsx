import { GrClose } from "react-icons/gr";

import { motion, AnimatePresence } from "framer-motion";

import { TiMinus } from "react-icons/ti";
import { TiPlus } from "react-icons/ti";

import hamburguer from "../../assets/hamburguer.jpg"
import { OptionList } from "../OptionList";

interface Props {
    isShow: boolean;
    closeModal: () => void;
}

export const Modal = ({ isShow, closeModal }: Props) => {
    return (
        <AnimatePresence>
            {isShow && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 overflow-y-auto z-50"
                    aria-labelledby="modal-title"
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="fixed inset-0 bg-black opacity-80" onClick={closeModal}></div>
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="relative bg-white max-w-[30rem] max-h-[80vh] shadow-card z-20 modal-card"
                        >
                            <div className="absolute top-4 right-4 z-50">
                                <button className="bg-white p-1 rounded-full" onClick={closeModal}>
                                    <GrClose className="text-black" size={20} />
                                </button>
                            </div>

                            <div className="relative w-full max-w-[30rem] aspect-auto">
                                <img className="w-full h-full object-cover" src={hamburguer} alt="" />
                            </div>

                            <div className="mx-5 my-3">
                                <h3 className="text-xl font-bold">Smashed Crooks</h3>

                                <p className="text-gray-600">100g pressed hamburger, mozzarella cheese, pickles, red onion, grilled bacon and traditional Heinz mayonnaise.</p>
                            </div>

                            <div className="mx-8 my-3">
                                <div className="bg-gray-200 mx-[-32px] mt-2 px-8 py-2">
                                    <h4>Choose the size</h4>
                                    <p className="text-gray-600">Select at least 1 option</p>
                                </div>

                                <OptionList />

                                <div className='flex justify-center items-center gap-8 mt-2 ms-4'>
                                    <motion.button
                                        whileTap={{ scale: 0.8 }}
                                        className='bg-gray-300 p-1 rounded-full'
                                    >
                                        <TiMinus size={22} className='text-gray-600' />
                                    </motion.button>

                                    <span className="text-2xl font-bold">2</span>

                                    <motion.button
                                        whileTap={{ scale: 0.8 }}
                                        className='bg-brown p-1 rounded-full'
                                    >
                                        <TiPlus size={22} className='text-white' />
                                    </motion.button>
                                </div>

                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    className="w-full mt-2 px-4 py-2 bg-brown rounded-full text-white"
                                >
                                    Add to order - R$35.00
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
