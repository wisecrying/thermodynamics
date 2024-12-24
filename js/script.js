function checkAnswers() {
    let score = 0;


    const radioQuestions = [
        { name: "q1", correct: "1" },
        { name: "q2", correct: "1" },
        { name: "q3", correct: "1" },
        { name: "q5", correct: "1" },
        { name: "q7", correct: "1" },
        { name: "q8", correct: "1" },
        { name: "q9", correct: "1" }
    ];


    for (let question of radioQuestions) {
        const selectedOption = document.querySelector(`input[name="${question.name}"]:checked`);
        if (!selectedOption) {
            alert("Вы ответили не на все вопросы");
            return;
        }
        if (selectedOption.value === question.correct) {
            score++;
        }
    }


    const textQuestions = [
        { id: "q4", correct: ["температура"], type: "text", question: 4 },
        { id: "q6", correct: ["8.3", "8,3"], type: "number", question: 6 },
        { id: "q10", correct: ["изолированная"], type: "text", question: 10 }
    ];

    for (let question of textQuestions) {
        const input = document.getElementById(question.id);
        let value = input.value.trim().toLowerCase();


        if (!value) {
            alert("Вы ответили не на все вопросы");
            return;
        }


        if (question.type === "number") {
            value = value.replace(",", ".");
        }


        if (question.type === "text" && !/^[а-яёa-z ]+$/i.test(value)) {
            alert(`В вопросе ${question.question} допустим только текст.`);
            return;
        }
        if (question.type === "number" && !/^[0-9.]+$/.test(value)) {
            alert(`В вопросе ${question.question} допустимы только цифры.`);
            return;
        }


        if (question.correct.includes(value)) {
            score++;
        }
    }


    const resultContainer = document.getElementById("result");
    const totalQuestions = radioQuestions.length + textQuestions.length;
    
    if (score > 7) {
        resultContainer.textContent = `Вы правильно ответили на ${score} из ${totalQuestions} вопросов. Отличный результат!`;
        resultContainer.classList.add("text-success");
    } else if (score > 5 && score <= 7)  {
        resultContainer.textContent = `Вы правильно ответили на ${score} из ${totalQuestions} вопросов. Неплохо, но можно лучше.`;
        resultContainer.classList.add("text-warning");
    } else {
        resultContainer.textContent = `Вы правильно ответили на ${score} из ${totalQuestions} вопросов. Попробуйте еще раз.`;
        resultContainer.classList.add("text-danger");
    }
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}