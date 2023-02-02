import React from 'react';
import {questions} from '../computer/questions';
import { useState } from 'react';
import '../computer/styles/Quiz1.css'
export default function Quiz1() {
    const[currentQuestion, setCurrentQuestion] = React.useState(0);
    const[score,setScore] = React.useState(0);
    const[showScore,setShowScore] = React.useState(false);

    const handleClick=(isCorrect)=>{
        if(isCorrect){
            setScore(score + 1);
        }


        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions.length){
           setCurrentQuestion(nextQuestion);
           

        }else{
            setShowScore(true);

        }
    }




    return(
    
        <div className='app'>
            {
                showScore?(
                    <section className='showScore-section'>
                      Your Score is (score) out of{questions.lenght}
                    </section>
                ):(
                    <>
                    <section className='question-section'>
                        <h1>Question{currentQuestion + 1}/{questions.lenght}</h1>
                        <p>{questions[currentQuestion].questionText}</p>
                    </section>
                

                <section className='answer-section'>
                    {questions[currentQuestion].answerOptions.map((item)=>(
                        <button className='buttonquiz' onClick={()=>
                            handleClick(item.isCorrect)}>
                                {item.answerText}
                                {item.showScore}
                    

                        </button>
                    ))}

                </section>
        </>
                )}
               
        </div>

    );

    
}





