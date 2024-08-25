import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []
    );

    const navigate = useNavigate();
    function ButtonToAbout(){
        const clickButton = () =>{
            navigate('/about');
        };
        return (
            <>
                <button onClick={clickButton} className="transition ease-in-out duration-300 hover:scale-110 bg-gray-200 text-teal-500 text-2xl p-4 rounded shadow-2xl shadow-teal-500/60 my-4 
                                                        hover:bg-teal-500 hover:text-gray-200 hover:shadow-teal-500/0">Learn More</button>
            </>
        );
    }
    function ButtonToExperience(){
        const clickButton = () =>{
            navigate('/experience');
        };
        return (
            <>
                <button onClick={clickButton} className="transition ease-in-out duration-300 hover:scale-110 bg-gray-200 text-fuchsia-600 text-2xl p-4 rounded shadow-2xl shadow-fuchsia-600/60 my-4 
                                                        hover:bg-fuchsia-600 hover:text-gray-200 hover:shadow-fuchsia-600/0">Learn More</button>
            </>    
        );
    }    
    function ButtonToProjectCompiler(){
        const clickButton = () =>{
            navigate('/project-compiler');
        };
        return (
            <>
                <button onClick={clickButton} className="transition ease-in-out duration-300 hover:scale-110 bg-gray-200 text-orange-600 text-lg p-4 rounded shadow-lg shadow-orange-600/60 my-4 
                                                        hover:bg-orange-600 hover:text-gray-200 hover:shadow-orange-600/0">About Compiler</button>
            </>
        );
    }    
    function ButtonToProjectKeyRacer(){
        const clickButton = () =>{
            navigate('/project-keyracer');
        };
        return (
            <>
                <button onClick={clickButton} className="transition ease-in-out duration-300 hover:scale-110 bg-gray-200 text-lime-600 text-lg p-4 rounded shadow-lg shadow-lime-600/60 my-4 
                                                        hover:bg-lime-600 hover:text-gray-200 hover:shadow-lime-600/0">About Key Racer</button>
            </>
        );
    }
    function ButtonToProjectPortfolio(){
        return (
            <>
                <button className="transition ease-in-out duration-300 hover:scale-110 bg-gray-200 text-red-600 text-lg p-4 rounded shadow-lg shadow-red-600/60 my-4 
                                    hover:bg-red-600 hover:text-gray-200 hover:shadow-red-600/0">Coming soon...</button>
            </>
        );        
    }
    function ButtonToProjectTetris(){
        const clickButton = () =>{
            navigate('/project-tetris');
        };
        return (
            <>
                <button onClick={clickButton} className="transition ease-in-out duration-300 hover:scale-110 bg-gray-200 text-cyan-500 text-lg p-4 rounded shadow-lg shadow-cyan-500/60 my-4 
                                                        hover:bg-cyan-500 hover:text-gray-200 hover:shadow-cyan-500/0">About Tetris</button>
            </>
        );
    }

    return ( 
    <>
        <div className="flex flex-col items-center justify-center min-h-screen">
            <p className="text-gray-700 text-sm underline decoration-gray-700">this website is not intended for mobile devices</p>

            {/* header of homepage */}
            <h2 className="text-center text-white mt-72 mb-16 text-5xl italic">hello<span className="text-teal-500">!</span> my name is</h2>
            <h1 className="text-center text-white my-4 text-8xl"><span className="text-teal-500">&gt;</span> Joey Flanigen <span className="text-teal-500">&lt;</span></h1>
            <h3 className="text-center text-white mt-24 text-5xl italic">and welcome to my website<span className="text-teal-500">.</span></h3>

            {/* content for About Me subsection */}
            <div className="bg-gray-700 text-black p-8 rounded shadow-2xl shadow-teal-500/90 w-11/12 mt-64 mb-16">
                <div className="flex flex-row space-x-32 my-8 justify-center">
                    <a className="https://github.com/jflanigen" href="https://github.com/jflanigen" target="_blank" rel="noopener noreferrer">
                        <i className="transition ease-in-out duration-300 hover:scale-110 fab fa-github text-white text-8xl"></i>
                    </a>
                    <div className="flex flex-col my-2 text-center text-gray-200">
                        <i className="fas fa-envelope text-white text-8xl"></i>
                        <p className="text-lg">joeyflan@bu.edu</p>
                    </div>
                    <a className="https://www.linkedin.com/in/joseph-flanigen-91b595236/" href="https://www.linkedin.com/in/joseph-flanigen-91b595236/" target="_blank" rel="noopener noreferrer">
                        <i className="transition ease-in-out duration-300 hover:scale-110 fab fa-linkedin text-white text-8xl"></i>
                    </a>
                </div>

                <h1 className="text-center text-gray-200 underline text-6xl decoration-4 underline-offset-8 font-medium decoration-teal-500 my-8">- About Me -</h1>
                <p className="text-center text-gray-200 text-2xl mt-12">Below are some quick facts about me</p>
                <div className="flex justify-center">
                    <ul className="text-gray-200 text-xl">
                        <li className="mt-4 mb-1"><span className="text-2xl text-teal-500">~ </span>Based out of <span className="text-teal-500">Boston</span>, <span className="text-teal-500">MA</span> and <span className="text-teal-500">Redmond</span>, <span className="text-teal-500">WA</span></li>
                        <li className="mt-1 mb-1"><span className="text-2xl text-teal-500">~ </span>Junior at Boston University</li>
                        <li className="mt-1 mb-1"><span className="text-2xl text-teal-500">~ </span>Major in <span className="text-teal-500">Computer Science</span> (<span className="text-teal-500">3.59</span> GPA, <span className="text-teal-500">3x</span> Semester Dean's List)</li>
                        <li className="mt-1 mb-1"><span className="text-2xl text-teal-500">~ </span>Minor in <span className="text-teal-500">Mathematics</span></li>
                        <li className="mt-1 mb-1"><span className="text-2xl text-teal-500">~ </span>Currently living in Boston for my studies</li>
                        <li className="mt-1 mb-1"><span className="text-2xl text-teal-500">~ </span>Interested in software development, machine learning, finance, and their intersections</li>
                        <li className="mt-1 mb-1"><span className="text-2xl text-teal-500">~ </span>Most capable of programming in <span className="text-teal-500">Java</span>, <span className="text-teal-500">Python</span>, <span className="text-teal-500">JavaScript</span>, and more</li>
                        <li className="mt-1 mb-1"><span className="text-2xl text-teal-500">~ </span>Familiar with technologies like <span className="text-teal-500">React</span>, <span className="text-teal-500">Git</span>, <span className="text-teal-500">Django</span>, <span className="text-teal-500">TailwindCSS</span>, <span className="text-teal-500">NumPy</span>, <span className="text-teal-500">Node.js</span>, and more</li>

                    </ul>
                </div>
                <p className="text-center text-gray-200 text-xl mt-12 mb-6">Your time is valuable, so I've kept things short above - if you would like to learn more about me, just click the button below.</p>
                <div className="flex justify-center"><ButtonToAbout /></div>
            </div>
            {/* end of content for About Me */}

            {/* content for Projects subsection */}
            <div className="bg-gray-700 text-black p-8 rounded shadow-2xl shadow-red-600/90 w-11/12 my-16">
                <h1 className="text-center text-gray-200 underline text-6xl decoration-4 underline-offset-8 font-medium decoration-red-600 my-8">- Projects -</h1>
                <p className="text-center text-gray-200 text-2xl mt-12">Here are some of my most substantial personal and class projects.</p>
                <div className="flex flex-col justify-center">
                    <h2 className="text-center text-gray-200 underline text-3xl decoration-4 underline-offset-8 font-medium decoration-cyan-500 mt-8">Tetris Neural Network</h2>
                    <ul className="mx-auto text-gray-200 text-xl">
                        <li className="mt-4 mb-1"><span className="text-2xl text-cyan-500">~ </span>Implemented and trained a neural network to play Tetris</li>
                        <li className="mt-1 mb-1"><span className="text-2xl text-cyan-500">~ </span>Scored up to 84 points in a single session</li>
                        <li className="mt-1 mb-1"><span className="text-2xl text-cyan-500">~ </span>Strategically designed parameters of input vector and reward function</li>
                        <li className="mt-1 mb-1"><span className="text-2xl text-cyan-500">~ </span>Project demo on the dedicated Tetris page</li>
                    </ul>
                    <div className="flex justify-center"><ButtonToProjectTetris /></div>
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="text-center text-gray-200 underline text-3xl decoration-4 underline-offset-8 font-medium decoration-orange-600 mt-8">Functional Programming Language Compiler</h2>
                    <ul className="mx-auto text-gray-200 text-xl">
                        <li className="mt-4 mb-1"><span className="text-2xl text-orange-600">~ </span>Desugared high-level program into low-level expressions</li>
                        <li className="mt-1 mb-1"><span className="text-2xl text-orange-600">~ </span>Translated low-level expressions into base stack-oriented code</li>
                        <li className="mt-1 mb-1"><span className="text-2xl text-orange-600">~ </span>Serialized stack-oriented code into string</li>
                    </ul>
                    <div className="flex justify-center"><ButtonToProjectCompiler /></div>
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="text-center text-gray-200 underline text-3xl decoration-4 underline-offset-8 font-medium decoration-lime-600 mt-8">Key Racer Application</h2>
                    <ul className="mx-auto text-gray-200 text-xl">
                        <li className="mt-4 mb-1"><span className="text-2xl text-lime-600">~ </span>Created type racing game to help improve typing speed</li>
                        <li className="mt-1 mb-1"><span className="text-2xl text-lime-600">~ </span>Developed in Node.js runtime to handle asynchronous API requests</li>
                        <li className="mt-1 mb-1"><span className="text-2xl text-lime-600">~ </span>My first personal project; simple, vanilla JavaScript and custom CSS</li>
                    </ul>
                    <div className="flex justify-center"><ButtonToProjectKeyRacer /></div>
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="text-center text-gray-200 underline text-3xl decoration-4 underline-offset-8 font-medium decoration-red-600 mt-8">Full-Stack Portfolio Tracker</h2>
                    <ul className="mx-auto text-gray-200 text-xl">
                        <li className="mt-4 mb-1"><span className="text-2xl text-red-600">~ </span>Currently developing app to track US stock market and portfolio performance</li>
                        <li className="mt-1 mb-1"><span className="text-2xl text-red-600">~ </span>React app with a Python (Django) backend, semi-functional currently</li>
                        <li className="mt-1 mb-1"><span className="text-2xl text-red-600">~ </span>Backend can fetch and return stock info via ticker/API call</li>
                    </ul>
                    <div className="flex justify-center"><ButtonToProjectPortfolio /></div>
                </div>
            </div>            
            {/* end of content for Projects */}

            {/* content for Experience subsection */}
            <div className="bg-gray-700 text-black p-8 rounded shadow-2xl shadow-fuchsia-600/90 w-11/12 my-16">
                <h1 className="text-center text-gray-200 underline text-6xl decoration-4 underline-offset-8 font-medium decoration-fuchsia-600 my-8">- Experience -</h1>
                <p className="text-center text-gray-200 text-2xl mt-12">Here are relevant courses I've completed at Boston University</p>
                
                <div className="flex flex-col justify-center">
                <h2 className="text-center text-gray-200 underline text-3xl decoration-4 underline-offset-8 font-medium decoration-fuchsia-600 mt-8">Summer 2024</h2>
                    <ul className="mx-auto text-gray-200 text-xl">
                        <li className="mt-3 mb-1"><span className="text-2xl text-fuchsia-600">~ </span>MA225 - Calculus III (B+)</li>
                    </ul>
                </div>

                <div className="flex flex-col justify-center">
                <h2 className="text-center text-gray-200 underline text-3xl decoration-4 underline-offset-8 font-medium decoration-fuchsia-600 mt-8">Spring 2024</h2>
                    <ul className="mx-auto text-gray-200 text-xl">
                        <li className="mt-4 mb-1"><span className="text-2xl text-fuchsia-600">~ </span>CS440 - Intro to Artificial Intelligence (A)</li>
                        <li className="mt-1 mb-1"><span className="text-2xl text-fuchsia-600">~ </span>CS320 - Concepts of Programming Langs (B+)</li>
                        <li className="mt-1 mb-1"><span className="text-2xl text-fuchsia-600">~ </span>MA124 - Calculus II (A-)</li>
                    </ul>
                </div>

                <div className="flex flex-col justify-center">
                <h2 className="text-center text-gray-200 underline text-3xl decoration-4 underline-offset-8 font-medium decoration-fuchsia-600 mt-8">Fall 2023</h2>
                    <ul className="mx-auto text-gray-200 text-xl">
                        <li className="mt-4 mb-1"><span className="text-2xl text-fuchsia-600">~ </span>CS210 - Computer Systems (A-)</li>
                        <li className="mt-1 mb-1"><span className="text-2xl text-fuchsia-600">~ </span>CS237 - Probability in Computing (A-)</li>
                    </ul>
                </div>

                <div className="flex flex-col justify-center">
                <h2 className="text-center text-gray-200 underline text-3xl decoration-4 underline-offset-8 font-medium decoration-fuchsia-600 mt-8">Spring 2023</h2>
                    <ul className="mx-auto text-gray-200 text-xl">
                        <li className="mt-4 mb-1"><span className="text-2xl text-fuchsia-600">~ </span>CS112 - Intro to CS II (B+)</li>
                        <li className="mt-1 mb-1"><span className="text-2xl text-fuchsia-600">~ </span>CS132 - Linear Algebra (B+)</li>
                    </ul>
                </div>

                <div className="flex flex-col justify-center">
                <h2 className="text-center text-gray-200 underline text-3xl decoration-4 underline-offset-8 font-medium decoration-fuchsia-600 mt-8">Fall 2023</h2>
                    <ul className="mx-auto text-gray-200 text-xl">
                        <li className="mt-4 mb-1"><span className="text-2xl text-fuchsia-600">~ </span>CS111 - Intro to CS I (B+)</li>
                        <li className="mt-1 mb-1"><span className="text-2xl text-fuchsia-600">~ </span>CS131 - Combinatoric Structures (B-)</li>
                    </ul>
                </div>

                <p className="text-center text-gray-200 text-xl mt-12 mb-6 mx-64">If you would like to learn more specifically about what I learned, the technologies I used in these classes, or about my work experience then press the button below.</p>
                <div className="flex justify-center"><ButtonToExperience /></div>
            </div> 
            {/* end of content for Experience */}

        </div>
    </>
    )
}

export default HomePage;