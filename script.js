// ข้อมูลเกม

const gameData = {

    food: [

        {

            title: "การทำไข่เจียว",

            emoji: "🍳",

            steps: [

                { emoji: "🥚", text: "1. ตอกไข่ใส่ชาม" },

                { emoji: "🥄", text: "2. ตีไข่ให้เข้ากัน" },

                { emoji: "🔥", text: "3. ตั้งกระทะใส่น้ำมัน" },

                { emoji: "🍳", text: "4. เทไข่ลงกระทะ" }

            ],

            correctOrders: [[0, 1, 2, 3]]

        },

        {

            title: "การทำข้าวผัด",

            emoji: "🍛",

            steps: [

                { emoji: "🍚", text: "1. เตรียมข้าวสวย" },

                { emoji: "🥕", text: "2. หั่นผักและเนื้อสัตว์" },

                { emoji: "🔥", text: "3. ตั้งกระทะใส่น้ำมัน" },

                { emoji: "🍳", text: "4. ผัดส่วนผสมทั้งหมด" }

            ],

            correctOrders: [[0, 1, 2, 3], [1, 0, 2, 3], [0, 2, 1, 3]]

        },

        {

            title: "การต้มมาม่า",

            emoji: "🍜",

            steps: [

                { emoji: "💧", text: "1. ใส่น้ำในหม้อ" },

                { emoji: "🔥", text: "2. เปิดไฟต้มน้ำ" },

                { emoji: "🍝", text: "3. ใส่บะหมี่ลงไป" },

                { emoji: "🧂", text: "4. ใส่เครื่องปรุงรส" }

            ],

            correctOrders: [[0, 1, 2, 3], [0, 1, 3, 2]]

        },

        {

            title: "การทำแซนด์วิช",

            emoji: "🥪",

            steps: [

                { emoji: "🍞", text: "1. เตรียมขนมปัง" },

                { emoji: "🧈", text: "2. ทาเนยหรือซอส" },

                { emoji: "🥬", text: "3. ใส่ผักและแฮม" },

                { emoji: "🔪", text: "4. ตัดครึ่งและเสิร์ฟ" }

            ],

            correctOrders: [[0, 1, 2, 3], [0, 2, 1, 3], [0, 3, 1, 2]]

        },

        {

            title: "การทำข้าวต้ม",

            emoji: "🍚",

            steps: [

                { emoji: "🍚", text: "1. เตรียมข้าวสวย" },

                { emoji: "💧", text: "2. ใส่น้ำในหม้อ" },

                { emoji: "🔥", text: "3. ตั้งไฟต้มข้าว" },

                { emoji: "🥄", text: "4. คนข้าวเป็นครั้งคราว" }

            ],

            correctOrders: [[0, 1, 2, 3], [1, 0, 2, 3]]

        },

        {

            title: "การทำสลัดผัก",

            emoji: "🥗",

            steps: [

                { emoji: "🥬", text: "1. ล้างผักให้สะอาด" },

                { emoji: "🔪", text: "2. หั่นผักเป็นชิ้นเล็ก" },

                { emoji: "🧂", text: "3. เตรียมน้ำสลัด" },

                { emoji: "🥄", text: "4. ผสมผักกับน้ำสลัด" }

            ],

            correctOrders: [[0, 1, 2, 3], [0, 2, 1, 3], [0, 1, 3, 2]]

        },

        {

            title: "การทำกาแฟ",

            emoji: "☕",

            steps: [

                { emoji: "💧", text: "1. ต้มน้ำให้เดือด" },

                { emoji: "☕", text: "2. ใส่กาแฟลงถ้วย" },

                { emoji: "🔥", text: "3. เทน้ำร้อนลงถ้วย" },

                { emoji: "🥄", text: "4. คนให้เข้ากัน" }

            ],

            correctOrders: [[0, 1, 2, 3], [1, 0, 2, 3], [0, 1, 3, 2]]

        },

        {

            title: "การทำข้าวโพดต้ม",

            emoji: "🌽",

            steps: [

                { emoji: "🌽", text: "1. เตรียมข้าวโพด" },

                { emoji: "💧", text: "2. ใส่น้ำในหม้อ" },

                { emoji: "🔥", text: "3. ต้มข้าวโพด 15 นาที" },

                { emoji: "🧂", text: "4. ใส่เกลือเล็กน้อย" }

            ],

            correctOrders: [[0, 1, 2, 3], [1, 0, 2, 3], [0, 1, 3, 2], [1, 0, 3, 2]]

        },

        {

            title: "การทำชาเย็น",

            emoji: "🧊",

            steps: [

                { emoji: "💧", text: "1. ต้มน้ำให้เดือด" },

                { emoji: "🍃", text: "2. ชงชาให้เข้ม" },

                { emoji: "🧊", text: "3. ใส่น้ำแข็งในแก้ว" },

                { emoji: "🥤", text: "4. เทชาลงในแก้ว" }

            ],

            correctOrders: [[0, 1, 2, 3], [0, 2, 1, 3], [2, 0, 1, 3]]

        },

        {

            title: "การทำเฟรนช์โทสต์",

            emoji: "🍞",

            steps: [

                { emoji: "🥚", text: "1. ตีไข่ใส่นม" },

                { emoji: "🍞", text: "2. จุ่มขนมปังไข่" },

                { emoji: "🔥", text: "3. ตั้งกระทะใส่เนย" },

                { emoji: "🍳", text: "4. ทอดขนมปังทั้งสองด้าน" }

            ],

            correctOrders: [[0, 1, 2, 3], [0, 2, 1, 3], [2, 0, 1, 3]]

        }

    ],

    math: [

        {

            title: "การบวกเลข",

            emoji: "➕",

            steps: [

                { emoji: "📝", text: "1. เขียนตัวเลขในแนวตั้ง" },

                { emoji: "👀", text: "2. ดูหลักหน่วย" },

                { emoji: "🔢", text: "3. บวกตัวเลขทีละหลัก" },

                { emoji: "✅", text: "4. เขียนคำตอบ" }

            ],

            correctOrders: [[0, 1, 2, 3]]

        },

        {

            title: "การลบเลข",

            emoji: "➖",

            steps: [

                { emoji: "📝", text: "1. เขียนตัวเลขในแนวตั้ง" },

                { emoji: "👀", text: "2. ดูหลักหน่วย" },

                { emoji: "🔢", text: "3. ลบตัวเลขทีละหลัก" },

                { emoji: "✅", text: "4. เขียนคำตอบ" }

            ],

            correctOrders: [[0, 1, 2, 3]]

        },

        {

            title: "การคูณเลข",

            emoji: "✖️",

            steps: [

                { emoji: "📝", text: "1. เขียนตัวเลขในแนวตั้ง" },

                { emoji: "🔢", text: "2. คูณตัวเลขหลักหน่วย" },

                { emoji: "🔢", text: "3. คูณตัวเลขหลักสิบ" },

                { emoji: "➕", text: "4. บวกผลลัพธ์ทั้งหมด" }

            ],

            correctOrders: [[0, 1, 2, 3]]

        },

        {

            title: "การหารเลข",

            emoji: "➗",

            steps: [

                { emoji: "📝", text: "1. เขียนสัญลักษณ์หาร" },

                { emoji: "🔢", text: "2. หารตัวเลขหลักแรก" },

                { emoji: "🔢", text: "3. นำเศษลงมา" },

                { emoji: "🔄", text: "4. ทำซ้ำจนหมด" }

            ],

            correctOrders: [[0, 1, 2, 3]]

        },

        {

            title: "การหาค่าเฉลี่ย",

            emoji: "📊",

            steps: [

                { emoji: "📝", text: "1. เขียนตัวเลขทั้งหมด" },

                { emoji: "➕", text: "2. บวกตัวเลขทั้งหมด" },

                { emoji: "🔢", text: "3. นับจำนวนตัวเลข" },

                { emoji: "➗", text: "4. หารผลรวมด้วยจำนวน" }

            ],

            correctOrders: [[0, 1, 2, 3], [0, 2, 1, 3], [2, 0, 1, 3]]

        },

        {

            title: "การเปรียบเทียบเศษส่วน",

            emoji: "🔍",

            steps: [

                { emoji: "📝", text: "1. เขียนเศษส่วนทั้งสอง" },

                { emoji: "🔢", text: "2. หาตัวคูณร่วมน้อย" },

                { emoji: "✖️", text: "3. ขยายเศษส่วนให้เท่า" },

                { emoji: "👀", text: "4. เปรียบเทียบเศษส่วน" }

            ],

            correctOrders: [[0, 1, 2, 3]]

        },

        {

            title: "การแก้สมการ",

            emoji: "🔑",

            steps: [

                { emoji: "📝", text: "1. เขียนสมการ" },

                { emoji: "🔢", text: "2. ย้ายตัวเลขข้างหนึ่ง" },

                { emoji: "🔄", text: "3. ทำการคำนวณ" },

                { emoji: "✅", text: "4. ตรวจสอบคำตอบ" }

            ],

            correctOrders: [[0, 1, 2, 3]]

        },

        {

            title: "การหาพื้นที่สี่เหลี่ยม",

            emoji: "📐",

            steps: [

                { emoji: "📏", text: "1. วัดความยาว" },

                { emoji: "📏", text: "2. วัดความกว้าง" },

                { emoji: "✖️", text: "3. คูณยาว x กว้าง" },

                { emoji: "📝", text: "4. เขียนหน่วยพื้นที่" }

            ],

            correctOrders: [[0, 1, 2, 3], [1, 0, 2, 3], [0, 1, 3, 2], [1, 0, 3, 2]]

        },

        {

            title: "การหาเปอร์เซ็นต์",

            emoji: "%",

            steps: [

                { emoji: "📝", text: "1. เขียนเศษส่วน" },

                { emoji: "➗", text: "2. หารเศษด้วยส่วน" },

                { emoji: "✖️", text: "3. คูณด้วย 100" },

                { emoji: "%", text: "4. ใส่เครื่องหมาย %" }

            ],

            correctOrders: [[0, 1, 2, 3]]

        },

        {

            title: "การแปลงหน่วย",

            emoji: "🔄",

            steps: [

                { emoji: "📝", text: "1. เขียนตัวเลขและหน่วย" },

                { emoji: "🔢", text: "2. หาอัตราส่วนการแปลง" },

                { emoji: "✖️", text: "3. คูณด้วยอัตราส่วน" },

                { emoji: "📝", text: "4. เขียนหน่วยใหม่" }

            ],

            correctOrders: [[0, 1, 2, 3]]

        }

    ],

    life: [

        {

            title: "การแปรงฟัน",

            emoji: "🦷",

            steps: [

                { emoji: "🚿", text: "1. เปิดน้ำ" },

                { emoji: "🪥", text: "2. ใส่ยาสีฟัน" },

                { emoji: "✨", text: "3. แปรงฟันให้สะอาด" },

                { emoji: "💧", text: "4. บ้วนปากด้วยน้ำ" }

            ],

            correctOrders: [[0, 1, 2, 3]]

        },

        {

            title: "การเตรียมตัวไปโรงเรียน",

            emoji: "🎒",

            steps: [

                { emoji: "⏰", text: "1. ตื่นนอน" },

                { emoji: "🚿", text: "2. อาบน้ำแปรงฟัน" },

                { emoji: "👕", text: "3. แต่งตัวใส่ชุดนักเรียน" },

                { emoji: "🎒", text: "4. เก็บหนังสือใส่กระเป๋า" }

            ],

            correctOrders: [[0, 1, 2, 3], [0, 1, 3, 2], [0, 3, 1, 2]]

        },

        {

            title: "การล้างจาน",

            emoji: "🍽️",

            steps: [

                { emoji: "🚿", text: "1. เปิดน้ำ" },

                { emoji: "🧽", text: "2. ใส่น้ำยาล้างจาน" },

                { emoji: "✨", text: "3. ขัดจานให้สะอาด" },

                { emoji: "💧", text: "4. ล้างน้ำให้หมด" }

            ],

            correctOrders: [[0, 1, 2, 3], [1, 0, 2, 3], [0, 2, 1, 3]]

        },

        {

            title: "การทำความสะอาดห้อง",

            emoji: "🧹",

            steps: [

                { emoji: "🧸", text: "1. เก็บของเล่น" },

                { emoji: "🛏️", text: "2. เก็บที่นอน" },

                { emoji: "🧹", text: "3. กวาดพื้นห้อง" },

                { emoji: "🪣", text: "4. ถูพื้นห้อง" }

            ],

            correctOrders: [[0, 1, 2, 3], [1, 0, 2, 3], [0, 2, 1, 3], [1, 2, 0, 3]]

        },

        {

            title: "การเตรียมกระเป๋าเดินทาง",

            emoji: "🧳",

            steps: [

                { emoji: "📝", text: "1. ทำรายการสิ่งของ" },

                { emoji: "👕", text: "2. เตรียมเสื้อผ้า" },

                { emoji: "🧴", text: "3. เตรียมของใช้ส่วนตัว" },

                { emoji: "🧳", text: "4. ใส่ของในกระเป๋า" }

            ],

            correctOrders: [[0, 1, 2, 3], [0, 2, 1, 3], [1, 2, 0, 3], [2, 1, 0, 3]]

        },

        {

            title: "การปลูกต้นไม้",

            emoji: "🌱",

            steps: [

                { emoji: "🕳️", text: "1. ขุดหลุมในดิน" },

                { emoji: "🌱", text: "2. ใส่ต้นกล้าลงหลุม" },

                { emoji: "🌍", text: "3. กลบดินให้มิด" },

                { emoji: "💧", text: "4. รดน้ำให้ต้นไม้" }

            ],

            correctOrders: [[0, 1, 2, 3]]

        },

        {

            title: "การทำการบ้าน",

            emoji: "📚",

            steps: [

                { emoji: "🎒", text: "1. เอาหนังสือออกจากกระเป๋า" },

                { emoji: "📖", text: "2. อ่านโจทย์ให้เข้าใจ" },

                { emoji: "✏️", text: "3. ทำการบ้านทีละข้อ" },

                { emoji: "✅", text: "4. ตรวจสอบคำตอบ" }

            ],

            correctOrders: [[0, 1, 2, 3]]

        },

        {

            title: "การซักผ้า",

            emoji: "👕",

            steps: [

                { emoji: "🧺", text: "1. แยกเสื้อผ้าตามสี" },

                { emoji: "🧴", text: "2. ใส่ผงซักฟอก" },

                { emoji: "💧", text: "3. ใส่น้ำตามระดับ" },

                { emoji: "🔄", text: "4. เปิดเครื่องซักผ้า" }

            ],

            correctOrders: [[0, 1, 2, 3], [0, 2, 1, 3], [0, 3, 1, 2], [0, 3, 2, 1]]

        },

        {

            title: "การทำสวน",

            emoji: "🌻",

            steps: [

                { emoji: "🌱", text: "1. เตรียมเมล็ดพันธุ์" },

                { emoji: "🌍", text: "2. เตรียมดินปลูก" },

                { emoji: "🕳️", text: "3. หว่านเมล็ดลงดิน" },

                { emoji: "💧", text: "4. รดน้ำเป็นประจำ" }

            ],

            correctOrders: [[0, 1, 2, 3], [1, 0, 2, 3], [0, 2, 1, 3]]

        },

        {

            title: "การออกกำลังกาย",

            emoji: "🏃",

            steps: [

                { emoji: "👕", text: "1. เปลี่ยนชุดออกกำลังกาย" },

                { emoji: "🤸", text: "2. วอร์มอัพร่างกาย" },

                { emoji: "🏃", text: "3. ออกกำลังกายจริงจัง" },

                { emoji: "💧", text: "4. ดื่มน้ำและพักผ่อน" }

            ],

            correctOrders: [[0, 1, 2, 3]]

        }

    ]

};



// สถานะเกม

let players = [];

let currentPlayerIndex = 0;

let currentCategory = '';

let currentQuestionIndex = 0;

let timerInterval;

let timeLeft = 0;

const TIME_PER_QUESTION = 60; // วินาที

const MAX_QUESTIONS = 10;



// ดึง DOM Elements ที่จำเป็น

const startScreen = document.getElementById('start-screen');

const registerScreen = document.getElementById('register-screen');

const categoryScreen = document.getElementById('category-screen');

const gameScreen = document.getElementById('game-screen');

const resultScreen = document.getElementById('result-screen');



const playerCountButtons = document.querySelectorAll('.player-count-btn');

const playerInputsContainer = document.getElementById('player-inputs');

const backToStartBtn = document.getElementById('back-to-start-btn');

const startGameBtn = document.getElementById('start-game-btn');



const categoryCards = document.querySelectorAll('.category-card');

const currentPlayerDisplay = document.getElementById('current-player-display');



const gamePlayerName = document.getElementById('game-player-name');

const gamePlayerScore = document.getElementById('game-player-score');

const questionNumberDisplay = document.getElementById('question-number');

const timerDisplay = document.getElementById('timer');

const timerBar = document.getElementById('timer-bar');

const questionImage = document.getElementById('question-image');

const questionTitle = document.getElementById('question-title');

const stepsContainer = document.getElementById('steps-container');

const dropZonesContainer = document.getElementById('drop-zones');

const submitAnswerBtn = document.getElementById('submit-answer-btn');

const nextQuestionBtn = document.getElementById('next-question-btn');

const restartBtn = document.getElementById('restart-btn');



const resultPlayerName = document.getElementById('result-player-name');

const resultPlayerScore = document.getElementById('result-player-score');

const resultPlayerLevel = document.getElementById('result-player-level');

const leaderboard = document.getElementById('leaderboard');

const playAgainBtn = document.getElementById('play-again-btn');

const newGameBtn = document.getElementById('new-game-btn');

const confettiContainer = document.getElementById('confetti-container');

const backToHomeBtn = document.getElementById('back-to-home-btn');



// Modal elements

const answerModal = document.getElementById('answer-modal');

const modalContent = document.getElementById('modal-content');

const closeModalBtn = document.getElementById('close-modal-btn');



// --- ฟังก์ชันพื้นฐานสำหรับการแสดงหน้าจอ ---

function showScreen(screenId) {

    document.querySelectorAll('.screen').forEach(screen => {

        screen.classList.remove('active');

    });

    document.getElementById(screenId).classList.add('active');

}



// --- ฟังก์ชันเริ่มต้นเกมและจัดการผู้เล่น ---

function setupPlayerRegistration(count) {

    players = [];

    playerInputsContainer.innerHTML = ''; // เคลียร์ input เดิม

    for (let i = 1; i <= count; i++) {

        players.push({ id: i, name: `ผู้เล่น ${i}`, score: 0 }); // สร้าง Object ผู้เล่น

        const inputDiv = document.createElement('div');

        inputDiv.className = 'mb-4';

        inputDiv.innerHTML = `

            <label for="player-name-${i}" class="block text-gray-700 text-lg font-medium mb-2 text-left">ชื่อผู้เล่น ${i}:</label>

            <input type="text" id="player-name-${i}" placeholder="ใส่ชื่อที่นี่" class="w-full p-3 border border-gray-300 rounded-lg text-lg focus:ring-blue-500 focus:border-blue-500">

        `;

        playerInputsContainer.appendChild(inputDiv);

    }

    showScreen('register-screen');

}



function startNewGame() {

    // เก็บชื่อผู้เล่นจาก input

    players.forEach((player, index) => {

        const inputElement = document.getElementById(`player-name-${player.id}`);

        if (inputElement && inputElement.value.trim() !== '') {

            player.name = inputElement.value.trim();

        }

        player.score = 0; // รีเซ็ตคะแนน

    });



    currentPlayerIndex = 0;

    currentCategory = '';

    currentQuestionIndex = 0;

    // เริ่มต้นการเล่นสำหรับผู้เล่นคนแรก

    showCategorySelection();

}



function showCategorySelection() {

    const currentPlayer = players[currentPlayerIndex];

    currentPlayerDisplay.textContent = `ผู้เล่น: ${currentPlayer.name}`;

    showScreen('category-screen');

}



function startGameForCurrentPlayer(category) {

    currentCategory = category;

    currentQuestionIndex = 0;

    loadQuestion();

    showScreen('game-screen');

}



// --- ฟังก์ชันการโหลดคำถาม ---

function loadQuestion() {

    // หยุด Timer ก่อนโหลดข้อใหม่

    clearInterval(timerInterval);



    const categoryQuestions = gameData[currentCategory];

    if (!categoryQuestions || categoryQuestions.length === 0) {

        console.error("ไม่มีคำถามในหมวดนี้:", currentCategory);

        endGame(); // หรือจัดการข้อผิดพลาด

        return;

    }



    if (currentQuestionIndex >= MAX_QUESTIONS || currentQuestionIndex >= categoryQuestions.length) {

        endPlayerTurn();

        return;

    }



    const question = categoryQuestions[currentQuestionIndex];



    gamePlayerName.textContent = players[currentPlayerIndex].name;

    gamePlayerScore.textContent = players[currentPlayerIndex].score;

    questionNumberDisplay.textContent = currentQuestionIndex + 1;

    timerDisplay.textContent = TIME_PER_QUESTION;

    timerBar.style.width = '100%';



    questionImage.textContent = question.emoji;

    questionTitle.textContent = question.title;



    // สุ่มลำดับขั้นตอน

    let shuffledSteps = [...question.steps];

    // Fisher-Yates shuffle algorithm

    for (let i = shuffledSteps.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [shuffledSteps[i], shuffledSteps[j]] = [shuffledSteps[j], shuffledSteps[i]];

    }



    stepsContainer.innerHTML = '';

    shuffledSteps.forEach((step, index) => {

        const stepDiv = document.createElement('div');

        stepDiv.className = 'draggable bg-white p-4 rounded-xl shadow-md text-center cursor-grab text-lg flex items-center justify-center min-h-[90px] hover:bg-gray-50';

        stepDiv.setAttribute('draggable', true);

        stepDiv.dataset.originalIndex = question.steps.indexOf(step); // เก็บ index เดิม

        stepDiv.innerHTML = `<span class="mr-2 text-2xl">${step.emoji}</span>${step.text.split('. ')[1]}`; // แสดง emoji + ข้อความ

        stepsContainer.appendChild(stepDiv);

    });



    dropZonesContainer.innerHTML = '';

    for (let i = 0; i < question.steps.length; i++) {

        const dropZoneDiv = document.createElement('div');

        dropZoneDiv.className = 'drop-zone flex items-center justify-center';

        dropZoneDiv.dataset.position = i;

        dropZoneDiv.innerHTML = `<span class="text-gray-400 text-lg">${i + 1}</span>`;

        dropZonesContainer.appendChild(dropZoneDiv);

    }



    // รีเซ็ตสถานะปุ่ม

    submitAnswerBtn.classList.remove('hidden');

    nextQuestionBtn.classList.add('hidden');



    setupDragAndDrop(); // ตั้งค่า Drag and Drop ใหม่ทุกครั้งที่โหลดคำถาม

    startTimer(); // เริ่ม Timer

}



// --- ฟังก์ชัน Drag & Drop ---

let draggedItem = null;



function setupDragAndDrop() {

    const draggables = document.querySelectorAll('.draggable');

    const dropZones = document.querySelectorAll('.drop-zone');



    draggables.forEach(draggable => {

        draggable.addEventListener('dragstart', (e) => {

            draggedItem = draggable;

            setTimeout(() => {

                draggable.classList.add('dragging');

            }, 0);

        });



        draggable.addEventListener('dragend', () => {

            draggedItem.classList.remove('dragging');

            draggedItem = null;

        });

    });



    dropZones.forEach(dropZone => {

        dropZone.addEventListener('dragover', (e) => {

            e.preventDefault();

            dropZone.classList.add('highlight');

        });



        dropZone.addEventListener('dragleave', () => {

            dropZone.classList.remove('highlight');

        });



        dropZone.addEventListener('drop', (e) => {

            e.preventDefault();

            dropZone.classList.remove('highlight');



            if (!draggedItem) return;



            // ถ้า dropZone ว่างเปล่า หรือมี textNode '1', '2', '3', '4' อยู่

            if (dropZone.children.length === 1 && dropZone.children[0].tagName === 'SPAN') {

                dropZone.innerHTML = ''; // เคลียร์เลขลำดับ

                dropZone.appendChild(draggedItem);

                dropZone.classList.add('filled');



                // ลบจากตำแหน่งเดิมถ้ามาจาก dropZone อื่น

                const previousDropZone = document.querySelector('.drop-zone.filled .draggable')?.closest('.drop-zone');

                if (previousDropZone && previousDropZone !== dropZone) {

                    // หา dropZone เดิมที่มี draggedItem และเคลียร์

                    document.querySelectorAll('.drop-zone').forEach(zone => {

                        if (zone !== dropZone && zone.contains(draggedItem)) {

                            zone.innerHTML = `<span class="text-gray-400 text-lg">${parseInt(zone.dataset.position) + 1}</span>`;

                            zone.classList.remove('filled');

                        }

                    });

                }

            } else if (dropZone.children.length > 0 && dropZone.children[0].classList.contains('draggable')) {

                // ถ้า dropZone มี item อยู่แล้ว ให้สลับตำแหน่งกัน

                const existingItem = dropZone.children[0];

                const draggedItemParent = draggedItem.closest('.drop-zone') || stepsContainer;

                

                // สลับตำแหน่ง

                if (draggedItemParent.classList.contains('drop-zone')) {

                    // ถ้า draggedItem มาจาก dropZone อื่น ให้สลับกัน

                    draggedItemParent.innerHTML = '';

                    draggedItemParent.appendChild(existingItem);

                    draggedItemParent.classList.add('filled');

                } else {

                    // ถ้า draggedItem มาจาก stepsContainer ให้ส่ง existingItem กลับไป

                    stepsContainer.appendChild(existingItem);

                }

                

                dropZone.innerHTML = '';

                dropZone.appendChild(draggedItem);

                dropZone.classList.add('filled');

            }

        });

    });



    // Make sure items can be dragged back to the original steps container

    stepsContainer.addEventListener('dragover', (e) => {

        e.preventDefault();

        stepsContainer.classList.add('highlight'); // Optional: add visual cue

    });



    stepsContainer.addEventListener('dragleave', () => {

        stepsContainer.classList.remove('highlight');

    });



    stepsContainer.addEventListener('drop', (e) => {

        e.preventDefault();

        stepsContainer.classList.remove('highlight');

        if (draggedItem) {

            // หา dropZone เดิมที่มี draggedItem และเคลียร์

            document.querySelectorAll('.drop-zone').forEach(zone => {

                if (zone.contains(draggedItem)) {

                    zone.innerHTML = `<span class="text-gray-400 text-lg">${parseInt(zone.dataset.position) + 1}</span>`;

                    zone.classList.remove('filled');

                }

            });

            stepsContainer.appendChild(draggedItem);

        }

    });

}



// --- ฟังก์ชัน Timer ---

function startTimer() {

    timeLeft = TIME_PER_QUESTION;

    timerDisplay.textContent = timeLeft;

    timerBar.style.width = '100%'; // รีเซ็ตความกว้างของ Timer bar



    timerInterval = setInterval(() => {

        timeLeft--;

        timerDisplay.textContent = timeLeft;

        timerBar.style.width = `${(timeLeft / TIME_PER_QUESTION) * 100}%`;



        if (timeLeft <= 10) {

            timerBar.style.backgroundColor = '#f59e0b'; // สีส้ม

        }

        if (timeLeft <= 5) {

            timerBar.style.backgroundColor = '#ef4444'; // สีแดง

        }

        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            timerDisplay.textContent = 'หมดเวลา!';

            checkAnswer(true); // ตรวจคำตอบเมื่อหมดเวลา

        }

    }, 1000);

}



// --- ฟังก์ชันการตรวจคำตอบ ---

function checkAnswer(timedOut = false) {

    clearInterval(timerInterval); // หยุด Timer

    submitAnswerBtn.classList.add('hidden');



    const currentQuestion = gameData[currentCategory][currentQuestionIndex];

    const dropZones = document.querySelectorAll('#drop-zones .drop-zone');

    let userAnswer = [];

    let isCorrect = false;



    // ดึงลำดับคำตอบของผู้เล่น

    dropZones.forEach(zone => {

        const item = zone.querySelector('.draggable');

        if (item) {

            userAnswer.push(parseInt(item.dataset.originalIndex));

        } else {

            userAnswer.push(null); // ถ้ามีช่องว่าง

        }

    });



    // ตรวจสอบความถูกต้อง

    if (!userAnswer.includes(null)) { // ต้องไม่มีช่องว่าง

        isCorrect = currentQuestion.correctOrders.some(correctOrder => {

            return JSON.stringify(userAnswer) === JSON.stringify(correctOrder);

        });

    }



    // แสดง popup modal

    showAnswerModal(isCorrect, timedOut, currentQuestion);



    if (isCorrect && !timedOut) {

        players[currentPlayerIndex].score++;

        // เพิ่ม animation หรือ effect เมื่อตอบถูก

        dropZonesContainer.classList.add('correct-answer');

    } else {

        // เพิ่ม animation หรือ effect เมื่อตอบผิด

        dropZonesContainer.classList.add('wrong-answer');

    }



    // ลบ animation class หลังแสดงผล

    setTimeout(() => {

        dropZonesContainer.classList.remove('correct-answer', 'wrong-answer');

    }, 1000);



    gamePlayerScore.textContent = players[currentPlayerIndex].score; // อัพเดทคะแนน

}



// --- ฟังก์ชันการเปลี่ยนข้อ/ผู้เล่น ---

function nextQuestion() {

    currentQuestionIndex++;

    loadQuestion();

}



function endPlayerTurn() {

    clearInterval(timerInterval); // หยุด Timer

    currentPlayerIndex++; // ไปผู้เล่นคนถัดไป



    if (currentPlayerIndex < players.length) {

        // ผู้เล่นคนถัดไปยังมีอยู่ ให้เลือกหมวดใหม่

        showCategorySelection();

    } else {

        // เล่นครบทุกคนแล้ว แสดงผลสรุป

        endGame();

    }

}



function endGame() {

    showResultScreen();

}



// --- ฟังก์ชันแสดงผลสรุป ---

function showResultScreen() {

    showScreen('result-screen');

    const currentPlayer = players[currentPlayerIndex -1]; // ผู้เล่นคนสุดท้ายที่เล่น



    resultPlayerName.textContent = currentPlayer ? currentPlayer.name : 'ไม่มีข้อมูล';

    resultPlayerScore.textContent = currentPlayer ? `${currentPlayer.score}/${MAX_QUESTIONS}` : '0/10';



    // กำหนดระดับความเก่ง

    let level = "เริ่มต้น";

    if (currentPlayer) {

        if (currentPlayer.score >= 8) {

            level = "ยอดเยี่ยม!";

            createConfetti(); // เฉลิมฉลองด้วย confetti

        } else if (currentPlayer.score >= 5) {

            level = "ดีมาก";

        }

    }

    resultPlayerLevel.textContent = level;



    updateLeaderboard();

}



function updateLeaderboard() {

    leaderboard.innerHTML = '';

    // เรียงลำดับผู้เล่นตามคะแนนจากมากไปน้อย

    const sortedPlayers = [...players].sort((a, b) => b.score - a.score);



    sortedPlayers.forEach((player, index) => {

        const playerEntry = document.createElement('div');

        playerEntry.className = `player-score flex items-center justify-between p-3 mb-2 bg-white rounded-lg shadow-sm text-lg ${index === 0 ? 'highlight' : ''}`;

        playerEntry.innerHTML = `

            <span class="font-bold text-gray-700">${index + 1}. ${player.name}</span>

            <span class="font-semibold text-indigo-600">${player.score} คะแนน</span>

        `;

        leaderboard.appendChild(playerEntry);

    });

}



// --- ฟังก์ชันแสดง Answer Modal ---

function showAnswerModal(isCorrect, timedOut, question) {

    let modalHTML = '';

    

    // สร้างเฉลยทุกรูปแบบ

    const allSolutionsHTML = question.correctOrders.map((correctOrder, solutionIndex) => {

        const solutionTitle = question.correctOrders.length > 1 ? `วิธีที่ ${solutionIndex + 1}:` : 'เฉลย:';

        return `

            <div class="mb-4 ${solutionIndex > 0 ? 'border-t border-gray-300 pt-4' : ''}">

                <h4 class="text-md font-semibold mb-2 ${isCorrect && !timedOut ? 'text-green-700' : 'text-red-700'}">${solutionTitle}</h4>

                <div class="text-left">

                    ${correctOrder.map((idx, i) => 

                        `<p class="text-sm mb-1 ${isCorrect && !timedOut ? 'text-green-600' : 'text-red-600'}">${i + 1}. ${question.steps[idx].emoji} ${question.steps[idx].text.split('. ')[1]}</p>`

                    ).join('')}

                </div>

            </div>

        `;

    }).join('');

    

    if (isCorrect && !timedOut) {

        // ตอบถูก

        modalHTML = `

            <div class="text-center">

                <div class="text-8xl mb-4 correct-emoji">🎉</div>

                <h2 class="text-3xl font-bold text-green-600 mb-4">ยินดีด้วย!</h2>

                <p class="text-xl text-gray-700 mb-4">คำตอบถูกต้อง!</p>

                <div class="bg-green-50 border border-green-200 rounded-lg p-4 max-h-60 overflow-y-auto">

                    <h3 class="text-lg font-semibold text-green-700 mb-3">${question.correctOrders.length > 1 ? 'เฉลยทั้งหมดที่ถูกต้อง:' : 'เฉลย:'}</h3>

                    ${allSolutionsHTML}

                    ${question.correctOrders.length > 1 ? `<p class="text-xs text-green-500 mt-3 italic">* มีหลายวิธีที่ถูกต้องในชีวิตจริง</p>` : ''}

                </div>

            </div>

        `;

    } else {

        // ตอบผิดหรือหมดเวลา

        const reasonText = timedOut ? 'หมดเวลา!' : 'คำตอบไม่ถูกต้อง';

        modalHTML = `

            <div class="text-center">

                <div class="text-8xl mb-4 wrong-emoji">😢</div>

                <h2 class="text-3xl font-bold text-red-600 mb-4">เสียใจด้วย!</h2>

                <p class="text-xl text-gray-700 mb-4">${reasonText}</p>

                <div class="bg-red-50 border border-red-200 rounded-lg p-4 max-h-60 overflow-y-auto">

                    <h3 class="text-lg font-semibold text-red-700 mb-3">${question.correctOrders.length > 1 ? 'เฉลยทั้งหมดที่ถูกต้อง:' : 'เฉลยที่ถูกต้อง:'}</h3>

                    ${allSolutionsHTML}

                    ${question.correctOrders.length > 1 ? `<p class="text-xs text-red-500 mt-3 italic">* มีหลายวิธีที่ถูกต้องในชีวิตจริง</p>` : ''}

                </div>

            </div>

        `;

    }

    

    modalContent.innerHTML = modalHTML;

    answerModal.classList.remove('hidden');

    answerModal.querySelector('.bg-white').classList.add('modal-slide-in');

}



function hideAnswerModal() {

    answerModal.classList.add('hidden');

    answerModal.querySelector('.bg-white').classList.remove('modal-slide-in');

    // ไปข้อถัดไปทันทีหลังปิด modal

    nextQuestion();

}



// --- Confetti Effect (เมื่อได้คะแนนสูง) ---

function createConfetti() {

    confettiContainer.innerHTML = ''; // Clear previous confetti

    const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722'];



    for (let i = 0; i < 100; i++) {

        const confetti = document.createElement('div');

        confetti.className = 'confetti';

        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        confetti.style.left = `${Math.rando
