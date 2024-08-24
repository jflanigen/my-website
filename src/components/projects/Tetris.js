import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function TetrisPage(){
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
                <button onClick={clickButton} className="mt-16 bg-cyan-500 text-gray-200 text-2xl p-4 rounded shadow-2xl shadow-cyan-500/60 my-4 
                                                        hover:bg-gray-200 hover:text-cyan-500 hover:shadow-gray-200/0">Go Back</button>
            </>
        );
    }    

    return (
    <>  
        <div className="flex flex-col items-center justify-center min-h-screen">
            <ButtonToHomePage />
            <div className="bg-gray-700 text-gray-200 p-8 rounded shadow-2xl shadow-cyan-500/90 w-11/12 mt-16 mb-16">
                <div className="flex flex-col justify-center text-center">
                    <h1 className="underline text-5xl decoration-4 underline-offset-8 font-medium decoration-cyan-500 my-8">- Tetris Neural Network -</h1>
                    <p className="text-xl my-2">Class project with source code available on request.</p>
                    <h2 className="underline text-3xl decoration-4 underline-offset-8 font-medium decoration-cyan-500 mt-8 my-4">Tech Stack</h2>
                    <ul>
                        <li className="text-xl"><span className="text-2xl text-cyan-500">~</span> Java</li>
                    </ul>
                    <h2 className="underline text-3xl decoration-4 underline-offset-8 font-medium decoration-cyan-500 mt-8 my-4">Description</h2>
                    <div className="text-xl mx-64">
                        <p className="my-4">This project was a lot of fun and is my favorite of the ones I have listed on this website. The project served as the final for my Introduction to Artificial Intelligence course (CS440). For what it’s worth, I received an A in the class, an A on the project, and significant extra credit on this assignment for averaging a significant score in the final evaluation games after submitting the model I trained. </p>
                        <p className="my-4">The model was trained on custom training parameters (learning rate, discount factor, batch size, # of training steps, replay buffer size, etc.) that I saw befitting to optimize the training process.</p>
                        <p className="my-4">Since it was a class project, I was bound to the custom Java framework provided to us by our professor (not that it wasn’t a great tool in itself, but I couldn’t use the industry standard PyTorch/TensorFlow packages) but I believe, conceptually, the content is much of the same to its Python counterparts. Ultimately, I was responsible for implementing various methods that were going to assist in training the model:</p>
                        <h2 className="underline text-3xl decoration-4 underline-offset-8 font-medium decoration-cyan-500 my-4 mb-8">Methods</h2>
                        <ul>
                            <li className="my-4"><span className="text-cyan-500">1. getQFunctionInput: </span>Describing the current state of the game to the model through a row-vector which would be used as input to the neural network. I was provided information of the state through a “GameView” object and “Mino” object with documentation about how to extract relevant information from both objects. My row-vector ended up being dependent on five different factors of the state: 
                                <ul className="text-left ml-32 mx-auto">
                                    <li className="my-4"><span className="text-2xl text-cyan-500">~ </span>Number of holes (gaps below topmost placed square in a given column)</li>
                                    <li className="my-4"><span className="text-2xl text-cyan-500">~ </span>Difference between tallest and shortest towers</li>
                                    <li className="my-4"><span className="text-2xl text-cyan-500">~ </span>Bumpiness (standard deviation of the heights)</li>
                                    <li className="my-4"><span className="text-2xl text-cyan-500">~ </span>Lowest y-coordinate of all towers' peaks, ie. the lowest realized block</li>
                                    <li className="my-4"><span className="text-2xl text-cyan-500">~ </span>The number of holes in the “fill zone." I wanted the model to leave a column empty by all means necessary, so that upon receiving a 4x1 mino, the agent could score a “Tetris." Initially, that was the only way to score points by the grading criteria - the professor changed that due to the class struggling, though I still would have received full credit.</li>
                                </ul>
                            </li>
                            <li className="my-4"><span className="text-cyan-500">2. getReward: </span>Implemented the reward function that the model would use to calculate the reward for being in that state of the game. A higher reward implied the model was in a “good” position, while a lower reward implied, you guessed it, a “bad” position. My reward function relied on many of the same components as the aforementioned function in addition to if the model had scored points or lost on that turn. The model favored scoring points, hated to lose (it’s just like me fr), and mitigated the frequency at which holes or uneven towers were created.</li>
                            <li className="my-4"><span className="text-cyan-500">3. initQFunction: </span>This was responsible for the initialization of my neural network object. I had to decide how many layers/hidden layers I wanted to use, the size of the hidden layers, and their activation functions. I ended up with a feedforward (sequential) network with one hidden layer that contained ten neurons and utilized ReLU activation.</li>
                            <li className="my-4"><span className="text-cyan-500">4. shouldExplore: </span>Returned a Boolean dependent on a probability that scaled to the number of training phases that had eclipsed during training. I did this so it would stick to its guns as more time had passed. This method was responsible for the model’s deciding to go against the move it believes it should make during training as to expose it to unfamiliar states. You can’t expect a chef who’s only ever practiced cooking steak to make a good risotto.</li>
                            <li className="my-4"><span className="text-cyan-500">5. getExplorationMove: </span>When the model decides it wants to try something new, it needs to be prompted to make a move that it is unfamiliar with; in a perfect world, the model tries entirely new moves when it decides to go against what it thinks is best. I wanted my model to learn to fill the “fill zone” that I described earlier, so I urged it to do that more often than not. If there was an opportunity to score a Tetris, I influenced the model to do that at a certain rate, and if it decided not to do that, I had it select a new random move from a set of possible moves it could make. I wanted my chef to make a killer steak, but I also wanted him to be able to make a good version of dishes that were unfamiliar to him, especially if the utensils he had at his disposal were unfamiliar. </li>
                        </ul>
                        <p className="mt-12 my-4">This project was genuinely a lot of fun and my model was quite good at what it was supposed to do. I would love to continue into machine learning, but breaking into the industry has proven to be quite tough; if you’re in a position to give me a chance, I won’t let you down. ;)</p>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default TetrisPage;