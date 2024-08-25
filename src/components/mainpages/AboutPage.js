import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import chessStats_Img from '../../assets/chessStats.png';
import fitrec_Img from '../../assets/BU_Fitrec.jpg';
import back_Img from '../../assets/pointingHike.jpg';
import stockChart_Img from '../../assets/stockChart.png';
import youngFootball_Img from '../../assets/youngFootball.PNG';
import oldFootball_Img from '../../assets/oldFootball.jpg';
import hike1_Img from '../../assets/hike1.jpg';
import hike2_Img from '../../assets/hike2.jpg';
import hike3_Img from '../../assets/hike3.jpg';
import hikeIso_Img from '../../assets/hikeIso.jpg';

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
            <div className="text-center bg-gray-700 text-gray-200 p-8 rounded shadow-2xl shadow-teal-500/90 w-11/12 mt-16 mb-16">
                <h1 className="underline text-6xl decoration-4 underline-offset-8 font-medium decoration-teal-500 my-8 mb-12">- My Interests -</h1>
                <p className="text-3xl my-8">Here are some of my interests, hobbies, and pastimes:</p>
                
                <h2 className="underline text-5xl decoration-4 underline-offset-8 font-medium decoration-teal-500 my-8 mt-12">Chess</h2>
                <p className="text-xl my-8 mx-64">Chess is a huge pastime for me; I started playing in January of 2023 and haven’t stopped since then. While I’m not anything special on the board, I know my way around a few openings and some interesting tactics – enough to propel me to a Rapid 1386 ELO (1413 all-time high) on Chess.com as of August 2024, placing me just shy of the top 5% of players on the site. </p>
                <img src={chessStats_Img} alt="Chess Stats" className="w-1/2 mx-auto shadow-xl shadow-teal-500/40 my-12" />
                <p className="text-xl my-8 mt-12 mx-64">Having played north of 2,000 games in the Rapid time setting and another 2,000 in Blitz, I can’t see myself stopping anytime soon – hopefully with my rating continuing to increase. No matter what, chess is an integral part of enjoying my free time in a way that is intellectually stimulating while being incredibly fun at the same time. </p>
            
                <h2 className="underline text-5xl decoration-4 underline-offset-8 font-medium decoration-teal-500 my-8 mt-12">Weightlifting</h2>
                <p className="text-xl my-8 mx-64">I grew up quite a skinny kid, and after being diagnosed with pectus carinatum at 15 (more commonly known by people as “pigeon’s chest”), my self-esteem wasn't great. After my last football season came to an end, I figured I needed to stay active, so I went ahead and got a gym membership. At the time, I didn’t think much of it, but it really ended up being one of the best decisions I’ve ever made for myself. I started to get consistent in the gym, and after some bumps in the road here and there, I go almost every day that I don’t need to rest as my schedule demands.</p>
                <img src={back_Img} alt="Me on a rock" className="w-1/2 mx-auto shadow-xl shadow-teal-500/40 my-12" />
                <p className="text-xl my-8 mx-64">I went from around six feet tall and 135 pounds as a second semester senior in high school to the 165 pounds I weigh today as a Junior in college. While that may not seem like a big deal or number to some, I’m very proud of the progress that I’ve made. You probably wouldn’t even be able to tell I have pectus carinatum anymore unless I told you. I’m a happier person as a result of the work I’ve put in and I’ve developed a strong sense of discipline as a result of the effort, too.</p>
                <img src={fitrec_Img} alt="BU FitRec" className="w-1/2 mx-auto shadow-xl shadow-teal-500/40 my-12" />
                <p className="text-xl my-8 mx-64">For anyone who may be thinking of getting into lifting, I promise you it is the best decision you can make for yourself regarding physical AND mental health. For anyone who may be a bit intimidated to get involved, I also promise you that nobody is judging you; in fact, most people do quite the opposite by appreciating seeing new faces and feeling the presence of those who are just starting to get into it. Typically the biggest, most intimidating people you'll meet in the gym are some of the nicest, so there really is nothing to worry about.</p>
                
                <h2 className="underline text-5xl decoration-4 underline-offset-8 font-medium decoration-teal-500 my-8 mt-12">Investing</h2>
                <p className="text-xl my-8 mx-64">While I’m not exactly the largest asset manager you’ve ever seen (quite frankly I’m a very small fish who’s relatively new to this large pond), I’ve found investing to be a very large positive in my life. It’s an incredibly wise financial decision for those who are in a position to contribute funds to an account. I’ve contributed as much as I can to my Roth IRA this year and have started to contribute to an Individual Brokerage Account with Schwab, as well. </p>
                <p className="text-xl my-8 mx-64">Making your money work for you instead of letting it sit idly by in a basic, low-yield savings account is huge; people don’t often realize the power of compounding interest in the market, and somebody who contributes as much as they can into the market (while making wise investment decisions and mitigating their overall risk via diversification) will see huge profits as their account matures. I am by no means a financial advisor and any investment decisions you make should be under the discretion of your own research, but I’ve already found solid success diving into a variety of diversified ETFs (healthcare, semiconductors, large market cap index funds, etc).</p>
                <p className="text-lg"><span className="text-green-500">+10.17%</span> as of 8/25/24</p>
                <img src={stockChart_Img} alt="Stock performance" className="w-1/2 mx-auto shadow-xl shadow-teal-500/40 my-12 mt-0" />
                <p className="text-xl my-8 mx-64">Not only has this become a big part of my life due to the financial benefits, it has actually opened the door to a more personal benefit; my grandfather, who loves the stock market (and his grandkids), was a huge help in the beginning of my time in the market. From the very start, I reached out to him for some help getting going, primarily to better understand the concepts that I was yet to learn. Now, after nearly half a year since I opened my accounts, we’re much closer and I could not be more thankful for that. We talk very frequently now, often about our positions and the state of the market, on the phone and through email. It’s always great to hear from him and about how things in his life are going, and hopefully he doesn’t mind having to listen about what’s going on in my world, too.</p>
                <p className="text-xl my-8 mx-64">Ultimately, the financial and familial benefits that my time in the market have provided me have fostered a passion for finance alongside my love for technology and engineering. I think it’s because that while these things are great at making people money, they have the potential to do more than that – even if it might not seem obvious at times, they can help bring people closer together in ways you wouldn’t expect. I’ve certainly experienced it.</p>

                <h2 className="underline text-5xl decoration-4 underline-offset-8 font-medium decoration-teal-500 my-8 mt-12">Sports</h2>
                <p className="text-xl my-8 mx-64">Sports have been a huge part of my life for as long as I can really remember. I started playing flag football in elementary school and continued into a more competitive environment in middle and high school by joining the Redmond football program. I played wide receiver and cornerback for the entire duration of my playing career and got pretty decent. I learned to leverage the skills I had to compensate for what I might’ve lacked in - a skill that I am glad I developed as I believe it extends deeper than sports. I am grateful for that and all the other applicable lessons I learned through athletics.</p>
                <img src={youngFootball_Img} alt="My first football picture" className="w-1/3 mx-auto shadow-xl shadow-teal-500/40 my-12" />
                <p className="text-xl my-8 mx-64">Nowadays, after my playing time has long since come and gone, I can’t exactly play the same game I used to; however, as cliché as it may sound, the memories I made, friendships I formed, and lessons I learned have stuck with me to this day! I wouldn’t be the same person I am if I never started tossing around a football.</p>
                <img src={oldFootball_Img} alt="Senior football picture" className="w-1/2 mx-auto shadow-xl shadow-teal-500/40 my-12" />
                <p className="text-xl my-8 mx-64">For fun, I like to play recreational basketball when I go to my campus gym with my buddies. I’m not that great, but I can jump high, run fast, and defend pretty well (as the pipeline from washed high school football defender to rec basketball player usually goes, lol). It’s a lot of fun and I’m starting to get alright at that, too. Need to fix up my busted jump shot and dribbling abilities, but having room to get better and doing just that is rewarding.</p>
                <p className="text-xl my-8 mx-64">Another big pastime for me is fantasy football, when it is around. I’ve been in a league with my hometown friends for a very long time, and if I’m not mistaken, I’ve eclipsed a decade of playing the game. Nowadays, our league can get competitive, and the trash talk can get intense, but at the end of the day, there’s nothing more fun than watching NFL RedZone on Sunday and getting excited whenever I see a player I have make a big play. The bragging rights that come with this league are priceless, and after finishing second place out of ten players three of the past four seasons, I’m looking to finally break my curse once and for all in this 2024 season.</p>
            
                <h2 className="underline text-5xl decoration-4 underline-offset-8 font-medium decoration-teal-500 my-8 mt-12">Hiking and Nature</h2>
                <p className="text-xl my-8 mx-64">Well, I am from Washington state after all. While as a little kid I didn’t really capitalize on the natural beauty of the state, as I’ve gotten older, I’ve learned to really appreciate what is all around where I grew up. There’s nothing more rewarding than going on a nice, long hike with your friends and family, sharing laughs and appreciating the beauty of what’s around you all the way until you’ve made it back to the car. I’m studying abroad in Australia for the fall of my Junior year right now, and quite literally as I type this, I’m on the way home from a weekend trip to the Blue Mountains, a couple hours outside of Sydney. Just yesterday I went on a nice long hike with the friends I’ve met since getting here and it was absolutely incredible, some of the most beautiful views of the mountains, waterfalls crashing around us, beautiful trees and plants and awesome animals I didn’t even know existed.</p>
                <div className="flex flex-row">
                    <img src={hike1_Img} alt="Hiking picture 1" className="w-1/4 mx-auto shadow-xl shadow-teal-500/40 my-12" />
                    <img src={hike2_Img} alt="Hiking picture 2" className="w-1/4 mx-auto shadow-xl shadow-teal-500/40 my-12" />
                    <img src={hike3_Img} alt="Hiking picture 3" className="w-1/4 mx-auto shadow-xl shadow-teal-500/40 my-12" />
                </div>
                <p className="text-xl my-8 mx-64">As the world and people continue to become more and more technologically oriented, I believe it’s really important to keep a grip on what is real. Going out and exploring, seeing new, beautiful sights can be incredibly enriching in one’s life.  We live on a truly unbelievable rock with a sadly limited amount of time to enjoy everything that is at our fingertips in this world. So please, we’re so lucky to even be here in the first place - go out and around and go touch some grass, really take in what is around you. You won’t regret it, I promise.</p>
                <img src={hikeIso_Img} alt="Me on a hike" className="w-1/2 mx-auto shadow-xl shadow-teal-500/40 my-12 mb-24" />
            </div>
        </div>
    </>
    );
}

export default AboutPage;