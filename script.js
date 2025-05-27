const qaContainer = document.getElementById('qa-container');
const qaForm = document.getElementById('qaForm');

const qaList = [
  {
    question: "What is a copyright strike?",
    answer: "A copyright strike is issued when your video uses content owned by someone else without permission."
  },
  {
    question: "Can I use short clips under 'fair use'?",
    answer: "Fair use depends on context and isn't guaranteed by just using short clips."
  }
];

function displayQAs() {
  qaContainer.innerHTML = '';
  qaList.forEach((item, index) => {
    const qaDiv = document.createElement('div');
    qaDiv.innerHTML = `
      <strong>Q${index + 1}:</strong> ${item.question}<br>
      <strong>A:</strong> ${item.answer}<br>
      <button onclick="deleteQA(${index})">Delete</button>
    `;
    qaContainer.appendChild(qaDiv);
  });
}

function deleteQA(index) {
  if (confirm("Are you sure you want to delete this question?")) {
    qaList.splice(index, 1); // remove from array
    displayQAs(); // refresh the list
  }
}

qaForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const question = document.getElementById('question').value.trim();
  const answer = document.getElementById('answer').value.trim();

  if (question && answer) {
    qaList.push({ question, answer });
    displayQAs();
    qaForm.reset();
  }
});

displayQAs();
