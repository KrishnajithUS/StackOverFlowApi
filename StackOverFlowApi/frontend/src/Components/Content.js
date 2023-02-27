import React from 'react'
import {Link} from 'react-router-dom'


const Content = ({ data }) => {
    console.log(data, "in data")
    return (
        <div>
            {
                data.length >= 1 ? data.map((item) => {
                    return (
                        <div key={item.owner.user_id} className='mt-2 min-w-screen bg-white'>
                            <div className='shadow-lg flex flex-wrap m-2  rounded-lg p-2 bg-slate-100  flex-col m-4'>
                                <div className='pb-2 hover:cursor-pointer'>
                                    <Link to={item.link}><h1 className='text-blue-900'>{item.title} </h1></Link>

                                </div>

                                <div className='flex pb-2'>
                                    {item.tags.map((ele) => (
                                        <div className='pl-2'>
                                            <span className='bg-slate-200 text-sm p-2 border border-black rounded-lg pr-2'>{ele}</span>
                                        </div>

                                    ))}
                                </div>


                            </div>



                        </div>
                    )
                }) : 'Something Went Wrong'
            }
        </div>
    )

}

export default Content