import React from "react";
import { useNavigate } from "react-router-dom";

const Cancel = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="container  px-5 mx-auto bg-white rounded overflow-hidden">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-red-500">Payment Cancelled</div>
                    <p className="text-gray-700 text-base">
                        Your payment has been cancelled. If you have any questions, please
                        contact our support team or please email us
                        at  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=harmitsinghrajput9@gmail.com" target='_blank' rel="noreferrer" className="text-black hover:text-blue-500">
                            Customer Care
                        </a>.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate("/")}>
                        Go to Home page
                    </button>
                </div>
            </div>
        </>
    );
}

export default Cancel; 