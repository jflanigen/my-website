import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AboutPage(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []
    );

    const navigate = useNavigate();
    function ButtonToHomePage(){
        const clickButton = () =>{
            navigate('/');
        };
        return (
            <>
                <button onClick={clickButton} className="mt-16 bg-teal-500 text-gray-200 text-2xl p-4 rounded shadow-2xl shadow-teal-500/60 my-4 
                                                        hover:bg-gray-200 hover:text-teal-500 hover:shadow-gray-200/0">Go Back</button>
            </>
        );
    }

    return (
    <>
        <div className="flex flex-col items-center justify-center min-h-screen">
            <ButtonToHomePage />
            <div className="bg-gray-700 text-black p-8 rounded shadow-2xl shadow-teal-500/90 w-11/12 mt-16 mb-16">
                
            </div>
        </div>
    </>
    );
}

export default AboutPage;