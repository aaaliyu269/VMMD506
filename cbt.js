
// Configuration - Easily change test parameters here
const testConfig = {
    totalTime: 20 * 60, // 30 minutes in seconds (change this to adjust test duration)
    totalQuestions: 36, // Total number of questions
    passPercentage: 70   // Minimum percentage to pass the test
};


// Test questions and answers
const testQuestions = [
    // Equine Influenza Questions
    {
        question: "What is the primary mode of transmission for Equine Influenza?",
        options: ["Fecal-oral route", "Aerosol inhalation", "Tick vectors", "Contaminated water"],
        answer: 1
    },
    {
        question: "Which animal species are primarily affected by Equine Influenza?",
        options: ["Cattle only", "Horses, donkeys, and mules", "Sheep and goats", "Wild birds"],
        answer: 1
    },
    {
        question: "What is the recommended minimum rest period for a horse recovering from Equine Influenza?",
        options: ["3 days", "1 week", "3 weeks", "6 weeks"],
        answer: 2
    },
    {
        question: "Which clinical sign typically appears FIRST in Equine Influenza cases?",
        options: ["Mucopurulent nasal discharge", "Edema of distal limbs", "Dry hacking cough", "Ocular discharge"],
        answer: 2
    },
    {
        question: "What complication frequently develops in Equine Influenza cases?",
        options: ["Cardiac arrhythmia", "Secondary bacterial pneumonia", "Renal failure", "Hepatic necrosis"],
        answer: 1
    },

    // Nairobi Sheep Disease Questions
    {
        question: "What is the primary vector for Nairobi Sheep Disease?",
        options: ["Culicoides midges", "Rhipicephalus appendiculatus ticks", "Anopheles mosquitoes", "Stomoxys flies"],
        answer: 1
    },
    {
        question: "Which lesion is characteristic of Nairobi Sheep Disease at necropsy?",
        options: ["Pulmonary artery hemorrhages", "Hemorrhagic intestine", "Hepatic lipidosis", "Renal infarcts"],
        answer: 1
    },
    {
        question: "What is the approximate mortality rate of Nairobi Sheep Disease in susceptible flocks?",
        options: ["10-30%", "40-60%", "70-80%", "≥90%"],
        answer: 3
    },
    {
        question: "Which diagnostic method is NOT mentioned for Nairobi Sheep Disease?",
        options: ["Viral isolation", "ELISA", "AGID test", "Histopathology"],
        answer: 2
    },
    {
        question: "What is the reservoir host for Nairobi Sheep Disease?",
        options: ["Cattle", "Wild birds", "Sheep and wildlife", "Rodents"],
        answer: 2
    },

    // Blue Tongue Disease Questions
    {
        question: "Which lesion is considered pathognomonic for Blue Tongue Disease?",
        options: ["Zebra stripes in colon", "Hemorrhages at base of pulmonary artery", "Necrotic stomatitis", "Biliary hyperplasia"],
        answer: 1
    },
    {
        question: "In sheep with Blue Tongue, what does the tongue typically look like?",
        options: ["Frost-covered appearance", "Swollen and cyanotic", "Covered in vesicles", "Dry and cracked"],
        answer: 1
    },
    {
        question: "What is the primary vector for Blue Tongue transmission?",
        options: ["Ixodes ticks", "Culicoides midges", "Tsetse flies", "Musca domestica"],
        answer: 1
    },
    {
        question: "Which clinical sign is seen in CHRONIC Blue Tongue cases in sheep?",
        options: ["Torticollis (twisted neck)", "Hematuria", "Photosensitivity", "Joint swelling"],
        answer: 0
    },
    {
        question: "Which species shows rare clinical manifestations of Blue Tongue?",
        options: ["Cattle", "Goats", "Pigs", "Dogs"],
        answer: 0
    },

    // Enzootic Pneumonia Questions
    {
        question: "What is the primary age group affected by Enzootic Pneumonia of Calves?",
        options: ["<1 week old", "1-3 months old", "3-6 months old", ">6 months old"],
        answer: 2
    },
    {
        question: "Which viral agent contributes to Enzootic Pneumonia?",
        options: ["Bovine Herpesvirus-1", "Foot-and-Mouth Disease virus", "Rinderpest virus", "Blue Tongue virus"],
        answer: 0
    },
    {
        question: "What is the KEY predisposing factor for Enzootic Pneumonia?",
        options: ["High grain diets", "Poor ventilation", "Heavy parasite load", "Vitamin deficiencies"],
        answer: 1
    },
    {
        question: "Which lung change characterizes Enzootic Pneumonia?",
        options: ["Granulomatous lesions", "Bronchopneumonia and consolidation", "Emphysematous bullae", "Pleural adhesions"],
        answer: 1
    },

    // PPR Questions
    {
        question: "What is the characteristic post-mortem finding in PPR cases?",
        options: ["Tiger stripes in colon", "Botryoid lymph nodes", "Hepatic abscesses", "Renal petechiae"],
        answer: 0
    },
    {
        question: "Which species is more severely affected by PPR?",
        options: ["Sheep", "Goats", "Cattle", "Camels"],
        answer: 1
    },
    {
        question: "What is the primary route of PPR transmission?",
        options: ["Aerosol droplets", "Venereal transmission", "Transplacental", "Fomites only"],
        answer: 0
    },
    {
        question: "Which oral lesion is typical in acute PPR?",
        options: ["Vesicles on tongue", "Necrotizing stomatitis", "Hyperkeratosis", "Fibropapillomas"],
        answer: 1
    },

    // MCF Questions
    {
        question: "What ocular sign is characteristic of Malignant Catarrhal Fever?",
        options: ["Cataracts", "Corneal opacity", "Retinal detachment", "Nystagmus"],
        answer: 1
    },
    {
        question: "Which animal is associated with wildebeest-form MCF transmission?",
        options: ["Sheep", "Wildebeest", "Rodents", "Birds"],
        answer: 1
    },
    {
        question: "What is the mortality rate of MCF in affected cattle?",
        options: ["<10%", "20-40%", "50-70%", ">90%"],
        answer: 3
    },

    // Rinderpest Questions
    {
        question: "Which phase of Rinderpest features 'pinpoint necrotic foci' in the mouth?",
        options: ["Prodromal phase", "Mucosal phase", "Diarrheic phase", "Convalescent phase"],
        answer: 1
    },
    {
        question: "What was the primary method for global Rinderpest eradication?",
        options: ["Antibiotic treatment", "Vector control", "Vaccination (TCRV)", "Culling wildlife reservoirs"],
        answer: 2
    },
    {
        question: "Which lesion is characteristic of Rinderpest at necropsy?",
        options: ["Necrosis of Peyer's patches", "Hepatic cirrhosis", "Pulmonary emphysema", "Renal infarcts"],
        answer: 0
    },

    // Equine Encephalitides Questions
    {
        question: "What family do EEE, WEE, and VEE viruses belong to?",
        options: ["Flaviviridae", "Togaviridae", "Paramyxoviridae", "Reoviridae"],
        answer: 1
    },
    {
        question: "Which vector primarily transmits EEE virus?",
        options: ["Ixodes scapularis", "Culiseta melanura", "Boophilus microplus", "Glossina palpalis"],
        answer: 1
    },
    {
        question: "What is the case fatality rate of EEE in horses?",
        options: ["5-15%", "20-30%", "40-80%", "90-100%"],
        answer: 2
    },
    {
        question: "Which neurological sign is common in West Nile Virus infection?",
        options: ["Head pressing", "Ataxia (especially hindlimbs)", "Opisthotonos", "Nystagmus"],
        answer: 1
    },
    {
        question: "How long after infection do neurological signs typically appear in EEE?",
        options: ["12-24 hours", "2-3 days", "5 days", "10-14 days"],
        answer: 2
    },
    {
        question: "What is the primary reservoir for West Nile Virus?",
        options: ["Rodents", "Birds", "Bats", "Reptiles"],
        answer: 1
    },
    {
        question: "Which diagnostic finding is typical in CSF of encephalitic horses?",
        options: ["Increased mononuclear cells", "Decreased glucose", "Eosinophilia", "Xanthochromia"],
        answer: 0
    }
];


// DOM Elements
const timerElement = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');
const questionsContainer = document.getElementById('questions-container');
const resultsContainer = document.getElementById('results-container');
const progressText = document.getElementById('progress-text');
const progressFill = document.getElementById('progress-fill');
const scoreValue = document.getElementById('score-value');
const resultMessage = document.getElementById('result-message');
const correctCount = document.getElementById('correct-count');
const totalQuestions = document.getElementById('total-questions');
const timeTaken = document.getElementById('time-taken');
const reviewSection = document.getElementById('review-section');
const reviewQuestions = document.getElementById('review-questions');
const reviewBtn = document.getElementById('reviewBtn');
const retryBtn = document.getElementById('retryBtn');
const scoreCircle = document.getElementById('score-circle');

// Test state variables
let timeLeft = testConfig.totalTime;
let timerInterval;
let userAnswers = Array(testConfig.totalQuestions).fill(-1);
let testStarted = false;
let testSubmitted = false;
let startTime;

// Initialize the test
function initTest() {
    createQuestions();
    updateProgress();
}

// Create questions in the DOM
function createQuestions() {
    questionsContainer.innerHTML = '';
    
    testQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-container';
        questionDiv.innerHTML = `
            <div class="question-header">
                <div class="question-number">Question ${index + 1}</div>
            </div>
            <div class="question-text">${q.question}</div>
            <div class="options-container">
                ${q.options.map((option, optIndex) => `
                    <div class="option" data-question="${index}" data-option="${optIndex}">
                        <input type="radio" name="question-${index}" id="opt-${index}-${optIndex}">
                        <label class="option-label" for="opt-${index}-${optIndex}">${option}</label>
                    </div>
                `).join('')}
            </div>
        `;
        questionsContainer.appendChild(questionDiv);
    });
    
    // Add event listeners to options
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', function() {
            if (!testStarted || testSubmitted) return;
            
            const questionIndex = parseInt(this.getAttribute('data-question'));
            const optionIndex = parseInt(this.getAttribute('data-option'));
            
            // Deselect all options in this question
            document.querySelectorAll(`.option[data-question="${questionIndex}"]`).forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // Select clicked option
            this.classList.add('selected');
            this.querySelector('input').checked = true;
            
            // Save answer
            userAnswers[questionIndex] = optionIndex;
            updateProgress();
        });
    });
}

// Update progress bar and text
function updateProgress() {
    const answered = userAnswers.filter(answer => answer !== -1).length;
    const progress = (answered / testConfig.totalQuestions) * 100;
    
    progressText.textContent = `${answered}/${testConfig.totalQuestions}`;
    progressFill.style.width = `${progress}%`;
}

// Start the test
function startTest() {
    if (testStarted) return;
    
    testStarted = true;
    startTime = new Date();
    startBtn.disabled = true;
    submitBtn.disabled = false;
    
    // Start timer
    timerInterval = setInterval(updateTimer, 1000);
}

// Update the timer display
function updateTimer() {
    timeLeft--;
    
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        submitTest();
        return;
    }
    
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Add warning when time is low
    if (timeLeft <= 300) { // 5 minutes
        timerElement.classList.add('timer-warning');
    }
}

// Submit the test
function submitTest() {
    if (testSubmitted) return;
    
    testSubmitted = true;
    clearInterval(timerInterval);
    submitBtn.disabled = true;
    
    // Calculate end time
    const endTime = new Date();
    const timeTakenMs = endTime - startTime;
    const timeTakenMin = Math.floor(timeTakenMs / 60000);
    const timeTakenSec = Math.floor((timeTakenMs % 60000) / 1000);
    
    // Calculate score
    let correct = 0;
    testQuestions.forEach((q, index) => {
        if (userAnswers[index] === q.answer) {
            correct++;
        }
    });
    
    const score = Math.round((correct / testConfig.totalQuestions) * 100);
    
    // Show results
    showResults(correct, score, timeTakenMin, timeTakenSec);
}

// Show test results
function showResults(correct, score, min, sec) {
    // Hide questions
    questionsContainer.style.display = 'none';
    
    // Show results
    resultsContainer.style.display = 'block';
    
    // Set score elements
    scoreValue.textContent = `${score}%`;
    correctCount.textContent = correct;
    totalQuestions.textContent = testConfig.totalQuestions;
    timeTaken.textContent = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
    
    // Set score circle
    scoreCircle.style.setProperty('--score-percent', `${score}%`);
    
    // Set result message
    if (score >= testConfig.passPercentage) {
        resultMessage.textContent = "Congratulations! You passed the test!";
        resultMessage.style.color = "var(--success)";
    } else {
        resultMessage.textContent = "Keep studying! You'll do better next time!";
        resultMessage.style.color = "var(--danger)";
    }
}

// Show review of answers
function showReview() {
    reviewSection.style.display = 'block';
    reviewQuestions.innerHTML = '';
    
    testQuestions.forEach((q, index) => {
        const isCorrect = userAnswers[index] === q.answer;
        const userAnswerText = userAnswers[index] !== -1 ? q.options[userAnswers[index]] : "No answer provided";
        const correctAnswerText = q.options[q.answer];
        
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;
        reviewItem.innerHTML = `
            <div class="review-question"><strong>Question ${index + 1}:</strong> ${q.question}</div>
            <div class="review-answer">
                <strong>Your answer:</strong> 
                <span class="${isCorrect ? 'correct-answer' : 'user-answer'}">
                    ${userAnswerText}
                </span>
            </div>
            ${!isCorrect ? `
            <div class="review-answer">
                <strong>Correct answer:</strong> 
                <span class="correct-answer">${correctAnswerText}</span>
            </div>
            ` : ''}
        `;
        
        reviewQuestions.appendChild(reviewItem);
    });
}

// Reset the test
function resetTest() {
    clearInterval(timerInterval);
    
    // Reset state
    timeLeft = testConfig.totalTime;
    timerElement.textContent = '--:--';
    timerElement.classList.remove('timer-warning');
    userAnswers = Array(testConfig.totalQuestions).fill(-1);
    testStarted = false;
    testSubmitted = false;
    
    // Reset UI
    startBtn.disabled = false;
    submitBtn.disabled = true;
    questionsContainer.style.display = 'block';
    resultsContainer.style.display = 'none';
    reviewSection.style.display = 'none';
    
    // Reset progress
    updateProgress();
    
    // Clear selections
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
        option.querySelector('input').checked = false;
    });
}

// Event listeners
startBtn.addEventListener('click', startTest);
submitBtn.addEventListener('click', submitTest);
resetBtn.addEventListener('click', resetTest);
reviewBtn.addEventListener('click', showReview);
retryBtn.addEventListener('click', resetTest);

// Initialize the test
initTest();
