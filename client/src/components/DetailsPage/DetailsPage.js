import React, { useEffect, useState } from 'react'
import { product } from '../Json/data'
import { useParams } from 'react-router-dom'
import Rating from '../Common/Rating'
import { loadStripe } from "@stripe/stripe-js";
import { scrollToTop } from '../JS/commonFunction';

const DetailsPage = () => {
    const [state, setState] = useState({
        id: '',
        name: '',
        price: '',
        productOwner: '',
        description: '',
        quantity: '',
        src: '',
        subtitle: '',
        category: '',
        rating: '',
    })

    const { name, price, productOwner, description, quantity, src, rating } = state
    const { id } = useParams()
    const STRIPE_PUBLISHABLE_KEY = process.env.STRIPE_PUBLISHABLE_KEY
    const makePayment = async (productId) => {
        const stripe = await loadStripe(STRIPE_PUBLISHABLE_KEY);

        const name = state?.name
        const price = state?.price
        const quantity = state?.quantity

        const headers = {
            "Content-Type": "application/json",
        };

        const response = await fetch(
            "http://localhost:8080/api/Stripepayment/create-checkout-session",
            {
                method: "POST",
                headers: headers,
                body: JSON.stringify({ name, price, quantity }),
            }
        );

        const session = await response.json();

        const result = stripe.redirectToCheckout({
            sessionId: session.id,
        });

        if (result.error) {
            console.log(result.error);
        }
    };
    const incrementQuantity = () => {
        if (quantity < 5) {
            setState((prev) => ({ ...prev, quantity: quantity + 1 }))
        }
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            // setQuantity(quantity - 1);
            setState((prev) => ({ ...prev, quantity: quantity - 1 }))

        }
    };

    useEffect(() => {
        const filteredProduct = product?.filter((data) => data?.id === Number(id));

        if (filteredProduct.length > 0) {
            const data = filteredProduct[0];
            setState((prev) => ({
                ...prev,
                id: data?.id,
                name: data?.name,
                price: data?.price,
                productOwner: data?.productOwner,
                description: data?.description,
                quantity: data?.quantity,
                src: data?.src,
                subtitle: data?.subtitle,
                category: data?.category,
                rating: data?.rating
            }));
        }

        scrollToTop()
    }, [id]);

    return (
        <section className="text-gray-600 body-font overflow-hidden text-left" key={id}>
            <div className="container px-5 py-5 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="lg:w-1/4 w-full lg:h-auto h-64 object-cover object-center rounded" src={(src)} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest text-left">{productOwner}</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 text-left " >{name}</h1>
                        <Rating rating={rating} />
                        <p className="leading-relaxed">{description}</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5" />

                        <div className="flex items-center mt-2">
                            <button
                                className="bg-gray-300 px-4 py-2 rounded-l"
                                onClick={decrementQuantity}
                            >
                                -
                            </button>
                            <span className="px-4">{quantity}</span>
                            <button
                                className={`${quantity >= 5 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-300 hover:bg-gray-400'
                                    } px-4 py-2 rounded-r`}
                                onClick={incrementQuantity}
                            >
                                +
                            </button>
                        </div>

                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5" />
                        <div className="flex items-center">
                            <div>

                                <span className="title-font font-medium text-2xl text-gray-900">${parseFloat((price * quantity).toFixed(3))}</span>
                                <div className="ProductSummaryDescription ProductSummaryDescription--singleItem text-xs text-gray-500 font-medium">Qty {quantity}, <span>
                                    ₹{price}
                                </span> each</div>
                            </div>
                            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded "
                                onClick={() => makePayment(id)}
                            >Buy Now</button>
                            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailsPage