// script.js
import { quizData } from './data.js';


    const quizForm = document.getElementById('quiz-form');
    const submitButton = document.getElementById('submit-btn');
    const resultDiv = document.createElement('div');
    resultDiv.id = 'result';
    document.body.appendChild(resultDiv);

    if (!quizForm || !submitButton) {
        console.error('Required elements not found');
        
    }

    console.log('Form and submit button found');

    
    quizForm.addEventListener('submit',(e)=>{
        console.log('Form submit event triggered');
        e.preventDefault();
            
            try {
                let score = 0;
                quizData.forEach((item, index) => {
                    const selectedAnswer = document.querySelector(`input[name="q${index}"]:checked`);
                    console.log(`Question ${index + 1} selected answer:`, selectedAnswer ? selectedAnswer.value : 'none');
                    if (selectedAnswer && selectedAnswer.value === item.correct) {
                        score++;
                    }
                    
                });
                console.log(`Score calculated: ${score}`);
                const resultMessage = `Your score: ${score} out of ${quizData.length}`;
                alert(resultMessage);
                resultDiv.textContent = resultMessage; // Display result on the page as well
            } catch (error) {
                console.error('Error in submit handler:', error);
            }
       })

    quizData.forEach((item, index) => {
        const questionContainer = document.createElement('div');
        questionContainer.classList.add('question');
        questionContainer.innerHTML = `
            <p>${index + 1}. ${item.question}</p>
            <label>
                <input type="radio" name="q${index}" value="a"> A) ${item.a}
            </label>
            <label>
                <input type="radio" name="q${index}" value="b"> B) ${item.b}
            </label>
            <label>
                <input type="radio" name="q${index}" value="c"> C) ${item.c}
            </label>
            <label>
                <input type="radio" name="q${index}" value="d"> D) ${item.d}
            </label>
        `;
        quizForm.appendChild(questionContainer);
    });

    console.log('Questions added to the form');


    console.log('Submit event listener added');
