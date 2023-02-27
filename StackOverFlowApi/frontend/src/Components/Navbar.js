import React, { useState } from 'react'

const Navbar = ({ q, setQ, handleChange, inputElement }) => {
    const handleChangeN = (e)=>{
        setQ(e.target.value)
    }
    return (
        <div className='bg-white shadow-xl border-b border-orange-500 px-2 sm:px-4 py-2.5 rounded'>
            <div className='container flex flex-col items-center justify-center  mx-auto'>
                <div className='text-center text-2xl font-bold text-orange-500'>
                    <h3 >
                        StackOverFlowApi
                    </h3>
                </div>
                <div className='mt-4'>

                    <form onSubmit={handleChange}>
                        <div className='inline-flex w-full'>
                            <div className='w-full '>
                                <input  onChange={handleChangeN} ref={inputElement} type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-orange-500 rounded-lg bg-gray-50  " placeholder="Search..." />
                            </div>
                            <button type='submit' className='bg-orange-600 text-sm rounded-lg p-2 ml-2' >Search</button>
                        </div>

                    </form>
                </div>
            </div >
        </div >
    )
}

export default Navbar