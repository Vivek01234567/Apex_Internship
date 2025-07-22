const quizContainer = document.getElementById('quiz-container');
const questions = [
  { question: 'Which planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Jupiter'], answer: 'Mars' },
  { question: 'What type of star is the Sun?', options: ['Red Dwarf', 'Yellow Dwarf', 'Blue Giant'], answer: 'Yellow Dwarf' }
];

let currentIndex = 0;
questions.forEach((q, i) => {
  const div = document.createElement('div');
  div.innerHTML = `<p>${q.question}</p>` +
    q.options.map(opt => `<label><input type="radio" name="q${i}" value="${opt}"> ${opt}</label><br>`).join('');
  quizContainer.appendChild(div);
});

function submitQuiz() {
  let score = 0;
  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && selected.value === q.answer) score++;
  });
  alert(`You scored ${score} out of ${questions.length}`);
}