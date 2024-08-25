import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ExperiencePage(){
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
                <button onClick={clickButton} className="transition ease-in-out duration-300 hover:scale-110 mt-16 bg-fuchsia-600 text-gray-200 text-2xl p-4 rounded shadow-2xl shadow-fuchsia-600/60 my-4 
                                                        hover:bg-gray-200 hover:text-fuchsia-600 hover:shadow-gray-200/0">Go Back</button>
            </>
        );
    }

    return (
    <>
    <div className="flex flex-col items-center text-center justify-center min-h-screen">
        <ButtonToHomePage />
        <div className="bg-gray-700 text-gray-200 p-8 rounded shadow-2xl shadow-fuchsia-600/90 w-11/12 mt-16 mb-16">
            <h1 className="underline text-5xl decoration-4 underline-offset-8 font-medium decoration-fuchsia-600 my-8 mb-12">- Work Experience -</h1>
            <p className="text-2xl my-4 mx-64">While I don't have industry level experience in software development, here are a couple jobs I've worked:</p>
            <h2 className="underline text-3xl decoration-4 underline-offset-8 font-medium decoration-fuchsia-600 my-8 mt-16">Valet Attendant @ 425 Fitness</h2>
            <p className="text-2xl my-4">May 2023 to August 2023</p>
            <p className="text-2xl my-4">Redmond, WA</p>
            <ul>
                <li className="text-2xl my-4"><span className="text-3xl text-fuchsia-600">~</span> Provided complimentary valet service to club members</li>
                <li className="text-2xl my-4"><span className="text-3xl text-fuchsia-600">~</span> Maintained equipment and facilities on daily basis</li>
                <li className="text-2xl my-4"><span className="text-3xl text-fuchsia-600">~</span> Coordinated distribution of responsibilities among valet staff</li>
                <li className="text-2xl my-4"><span className="text-3xl text-fuchsia-600">~</span> Setup and took down valet station six days per week</li>
            </ul>
            <h2 className="underline text-3xl decoration-4 underline-offset-8 font-medium decoration-fuchsia-600 my-8 mt-16">Head Youth Ref and Instructor @ i9 Sports</h2>
            <p className="text-2xl my-4">September 2018 to March 2020</p>
            <p className="text-2xl my-4">Redmond, WA</p>
            <ul>
                <li className="text-2xl my-4"><span className="text-3xl text-fuchsia-600">~</span> Led up to six referees to provide quality experience for customers</li>
                <li className="text-2xl my-4"><span className="text-3xl text-fuchsia-600">~</span> Trained new refs for a variety of sports’ rules and instructing skills</li>
                <li className="text-2xl my-4"><span className="text-3xl text-fuchsia-600">~</span> Led summer camp groups of up to thirty kids in size</li>
            </ul>
            <h1 className="underline text-5xl decoration-4 underline-offset-8 font-medium decoration-fuchsia-600 my-8 mt-16 mb-12">- University Courses -</h1>
            <p className="text-2xl my-4">Here are the BU provided descriptions of the relevant coursework I've completed in rough chronological order:</p>

            <h2 className="underline text-2xl decoration-4 underline-offset-8 font-medium decoration-fuchsia-600 my-8">CS440 - Intro to AI</h2>
            <p className="text-2xl my-4 mx-64">Introduction to computer systems that exhibit intelligent behavior, in particular, perceptual and robotic systems. Topics include human computer interfaces, computer vision, robotics, game playing, pattern recognition, knowledge representation, planning.</p>
            <p className="text-2xl my-4 mx-64">Grade received: <span className="text-fuchsia-600">A</span></p>

            <h2 className="underline text-2xl decoration-4 underline-offset-8 font-medium decoration-fuchsia-600 my-8">CS320 - Concepts of Prog. Langs.</h2>
            <p className="text-2xl my-4 mx-64">Concepts involved in the design of programming languages. Bindings, argument transmission, and control structures. Environments: compile-time, load-time, and run-time. Interpreters.</p>
            <p className="text-2xl my-4 mx-64">Grade received: <span className="text-fuchsia-600">B+</span></p>

            <h2 className="underline text-2xl decoration-4 underline-offset-8 font-medium decoration-fuchsia-600 my-8">CS210 - Computer Systems</h2>
            <p className="text-2xl my-4 mx-64">Fundamental concepts of computer systems and systems programming. Hardware fundamentals including digital logic, memory systems, processor design, buses, I/O subsystems, data representations, computer arithmetic, and instruction- set architecture. Software concepts including assembly language programming, operating systems, assemblers, linkers, and systems programming in C.</p>
            <p className="text-2xl my-4 mx-64">Grade received: <span className="text-fuchsia-600">A-</span></p>

            <h2 className="underline text-2xl decoration-4 underline-offset-8 font-medium decoration-fuchsia-600 my-8">CS237 - Probability in Computing</h2>
            <p className="text-2xl my-4 mx-64">Introduction to basic probabilistic concepts and methods used in computer science. Develops an understanding of the crucial role played by randomness in computing, both as a powerful tool and as a challenge to confront and analyze. Emphasis on rigorous reasoning, analysis, and algorithmic thinking.</p>
            <p className="text-2xl my-4 mx-64">Grade received: <span className="text-fuchsia-600">A-</span></p>

            <h2 className="underline text-2xl decoration-4 underline-offset-8 font-medium decoration-fuchsia-600 my-8">CS132 - Linear Algebra</h2>
            <p className="text-2xl my-4 mx-64">Basic concepts, data structures, and algorithms for geometric objects. Examples of topics: Cartesian geometry, transformations and their representation, queries and sampling, triangulations. Emphasis on rigorous reasoning and analysis, advancing algorithmic maturity and expertise in its application.</p>
            <p className="text-2xl my-4 mx-64">Grade received: <span className="text-fuchsia-600">B+</span></p>

            <h2 className="underline text-2xl decoration-4 underline-offset-8 font-medium decoration-fuchsia-600 my-8">CS112 - Intro to CS II (Intro to DSA)</h2>
            <p className="text-2xl my-4 mx-64">Covers advanced programming techniques and data structures. Topics include recursion, algorithm analysis, linked lists, stacks, queues, trees, graphs, tables, searching, and sorting.</p>
            <p className="text-2xl my-4 mx-64">Grade received: <span className="text-fuchsia-600">B+</span></p>

            <h2 className="underline text-2xl decoration-4 underline-offset-8 font-medium decoration-fuchsia-600 my-8">CS111 - Intro to CS I</h2>
            <p className="text-2xl my-4 mx-64">The first course for computer science majors and anyone seeking a rigorous introduction. Develops computational problem-solving skills by programming in the Python language, and exposes students to variety of other topics from computer science and its applications.</p>
            <p className="text-2xl my-4 mx-64">Grade received: <span className="text-fuchsia-600">B+</span></p>

            <h2 className="underline text-2xl decoration-4 underline-offset-8 font-medium decoration-fuchsia-600 my-8">CS131 - Combinatoric Structures (~Discrete Math)</h2>
            <p className="text-2xl my-4 mx-64">Representation, analysis, techniques, and principles for manipulation of basic combinatoric structures used in computer science. Rigorous reasoning is emphasized.</p>
            <p className="text-2xl my-4 mx-64">Grade received: <span className="text-fuchsia-600">B-</span></p>
        </div>
    </div>
    </>
    );
}

export default ExperiencePage;