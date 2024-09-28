import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function KeyRacerPage(){
    // brings user to the top of the page upon rendering
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
                <button onClick={clickButton} className="transition ease-in-out duration-300 hover:scale-110 mt-16 bg-lime-600 text-gray-200 text-2xl p-4 rounded shadow-2xl shadow-lime-600/60 my-4 
                                                        hover:bg-gray-200 hover:text-lime-600 hover:shadow-gray-200/0">Go Back</button>
            </>
        );
    }    

    return (
    <>  
        <div className="flex flex-col items-center justify-center min-h-screen">
            <ButtonToHomePage />
            <div className="bg-gray-700 text-gray-200 p-8 rounded shadow-2xl shadow-lime-600/90 w-11/12 mt-16 mb-16">
                <div className="flex flex-col justify-center text-center">
                    <h1 className="underline text-3xl decoration-4 underline-offset-8 font-medium decoration-lime-600 my-8">- KeyRacer Web Application -</h1>
                    <p className="text-xl my-2">Personal project on GitHub.</p>
                    <a className="text-lg text-cyan-500 mt-4" href="https://keyracer-project.onrender.com/" target="_blank" rel="noopener noreferrer">Link to game</a>
                    <p className="text-md text-gray-200">May take about 30 seconds to load</p>
                    <h2 className="underline text-3xl decoration-4 underline-offset-8 font-medium decoration-lime-600 mt-8 my-4">Tech Stack</h2>
                    <ul>
                        <li className="text-xl"><span className="text-2xl text-lime-600">~</span> JavaScript</li>
                        <li className="text-xl"><span className="text-2xl text-lime-600">~</span> CSS</li>
                        <li className="text-xl"><span className="text-2xl text-lime-600">~</span> HTML</li>
                    </ul>
                    <h2 className="underline text-3xl decoration-4 underline-offset-8 font-medium decoration-lime-600 mt-8 my-4">Description</h2>
                    <p className="text-xl my-2 mx-24">Key Racer is the name of my first web application, fully developed as a front end application and in the Node.js runtime. This was the first web application I designed and I was left to fully learn the concepts and tools individually. As a result, it is not exactly a complex application and neither is the code anything to marvel over, but I had fun building the application and it served a decent purpose in helping practice typing speed and accuracy. </p>
                    <p className="text-xl my-2 mx-24">The application pulls a user-specified number of words from a random word generator API and then sequentially prompts the user to retype the word that is currently being displayed. Taking advantage of the Node.js environment, the application handles asynchronous API requests and waits until the json response is fully retrieved before allowing the user to play a game. At the end, the user can watch as the application prints the expected spelling of the word and what was submitted by the user. </p>
                    <p className="text-xl my-2 mx-24">The JavaScript and CSS involved isn’t the finest, but that is a result of my means of learning by doing. In retrospect, it might have been beneficial to redesign the app using React and TailwindCSS like this website does; regardless, I think that this was an important step in my journey of learning JavaScript, CSS, and HTML.</p>
                    <p className="text-xl my-2 mx-24">I sought out to do this project as I’ve always been a fan of typing games like Nitro Type, for example. Since middle school I’ve been playing games like these to help master my typing speeds. Nowadays, I probably sit a little above 100 WPM… I’m not sure how that stacks up to the general population or if it even matters, but it’s pretty cool to have quick fingers.</p>
                </div>
            </div>
        </div>
    </>
    );
}

export default KeyRacerPage;