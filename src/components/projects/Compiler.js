import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CompilerPage(){
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
                <button onClick={clickButton} className="transition ease-in-out duration-300 hover:scale-110 mt-16 bg-orange-600 text-gray-200 text-2xl p-4 rounded shadow-2xl shadow-orange-600/60 my-4 
                                                        hover:bg-gray-200 hover:text-orange-600 hover:shadow-gray-200/0">Go Back</button>
            </>
        );
    }

    return (
    <>  
        <div className="flex flex-col items-center justify-center min-h-screen">
            <ButtonToHomePage />
            <div className="bg-gray-700 text-gray-200 p-8 rounded shadow-2xl shadow-orange-600/90 w-11/12 mt-16 mb-16">
                <div className="flex flex-col justify-center text-center">
                    <h1 className="underline text-3xl decoration-4 underline-offset-8 font-medium decoration-orange-600 my-8">- Compiler for Functional Programming Language -</h1>
                    <p className="text-xl my-2">Class project with source code available on request.</p>
                    <h2 className="underline text-3xl decoration-4 underline-offset-8 font-medium decoration-orange-600 mt-8 my-4">Tech Stack</h2>
                    <ul>
                        <li className="text-xl"><span className="text-2xl text-orange-600">~</span> OCaml</li>
                    </ul>
                    <h2 className="underline text-3xl decoration-4 underline-offset-8 font-medium decoration-orange-600 mt-8 my-4">Description</h2>
                    <div className="text-xl mx-24">
                        <p className="my-4">The final project in a series of class projects that set me up to be able to implement my own compiler for my Concepts of Programming Languages course (CS320). I was provided a few different grammar sets that were specific to each step of the compilation process that was performed upon being provided a source program in a custom, high-level, stack-oriented, functional programming language (like OCaml). Here is the process outlined for you:</p>
                        <h2 className="underline text-3xl decoration-4 underline-offset-8 font-medium decoration-orange-600 my-4 mb-8">Compilation Process</h2>
                        <ul>
                            <li className="my-4"><span className="text-orange-600">1. Desugaring </span>(High-Level Expressions to Low-Level Expressions): The first step of the compilation process was to desugar the initial high-level expressions into semantically equivalent low-level syntax that would be easier to work with.</li>
                            <li className="my-4"><span className="text-orange-600">2. Translation </span>(Low-Level Expressions to Base Stack-Oriented Program): The next step was to translate the low-level syntax into another semantically equivalent set of basic stack-oriented code that is processable using pre-defined types that were provided within the boilerplate OCaml code.</li>
                            <li className="my-4"><span className="text-orange-600">3. Serialization </span>(Base Stack-Oriented Program to String): The final step was to serialize the stack-oriented code into a string that can be parsed by the interpreter. In this project, the parser was provided to the class, though we had earlier projects in which we had to implement a parser (which proved to be quite difficult due to some nuances)</li>                        
                        </ul>
                        <p className="mt-8 my-4">Ultimately, this project gave me a better insight into the nuances of programming languages, especially regarding functional programming languages like OCaml. Concepts like lexical and syntactical analysis, precedence, operational semantics, parameter passing, variable mutability and more were reinforced through this project and a series of smaller projects that preceded it.</p>
                        </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default CompilerPage;