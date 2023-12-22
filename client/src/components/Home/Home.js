import React, { useEffect, useState } from 'react'
import { product } from '../Json/data'
import { Link, useNavigate } from 'react-router-dom'
import Rating from '../Common/Rating'

const Home = () => {
    const [state, setState] = useState({
        model: false
    })
    const navigate = useNavigate()
    let evenIndexElements = product && product.filter((element, index) => index % 2 === 0);

    useEffect(() => {

        setTimeout(() => {
            setState((prev) => ({ ...prev, model: true }))
        }, 3000);
    }, [])

    console.log("state", state)
    return (
        <>
            <section className="text-gray-600 body-font text-left">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">All Products</h1>
                            <div className="h-1 w-40 bg-indigo-500 rounded"></div>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Upgrade your wardrobe with our trendy Cardigan – a perfect blend of comfort and style. Whether you're strolling through Brooklyn or exploring the urban landscape, this asymmetrical piece is the epitome of modern fashion. The hexagon pattern adds a touch of sophistication, making it a must-have for fashion-forward individuals.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {evenIndexElements && evenIndexElements?.map((data) => (
                            <div className="xl:w-1/4 md:w-1/2 p-4 hover:scale-110 transition duration-500 object-cover" onClick={() => navigate(`/products/detail/${data?.id}`)} key={data?.id}>
                                <div className="bg-gray-100 p-6 rounded-lg " >
                                    <img className="h-40 rounded w-full object-cover object-center mb-6" src={data?.src} alt="content" />
                                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font text-left">{`${data?.subtitle.split(" ").splice(0, 4).join(" ")}`}</h3>
                                    <Rating rating={data?.rating} />
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{data?.name}</h2>
                                    <p className="leading-relaxed text-base">{`${data?.description.split(" ").splice(0, 3).join(" ")}  ... Read More`}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Home