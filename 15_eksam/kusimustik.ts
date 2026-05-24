//===================================KARMEN=============================================================================================
class Question {
    id: string;
    text: string;
    options: string[];
    type: string;

    constructor(id: string, text: string, options: string[], type: string) {
        this.id = id;
        this.text = text;
        this.options = options;
        this.type = type;
    }
}

class StageQues extends Question {
    points: number[];

    constructor(id: string, text: string, options: string[], points: number[]) {
        super(id, text, options, "stage");
        this.points = points;
    }
}

class ArchetypeQues extends Question {
    tags: string[];

    constructor(id: string, text: string, options: string[], tags: string[]) {
        super(id, text, options, "archetype");
        this.tags = tags;
    }
}

class Test {
    questions: Question[];
    answers: { [key: string]: number };
    currentIndex: number;

    constructor(questions: Question[]) {
        this.questions = questions;
        this.answers = {};
        this.currentIndex = 0;
    }

    saveAnswer(optionIndex: number): void {
        const currentQ = this.questions[this.currentIndex];
        this.answers[currentQ.id] = optionIndex;
        this.currentIndex++;
    }

    back(): void {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        }
    }

    getCurrentQuestion(): Question | null {
        if (this.currentIndex >= this.questions.length) {
            return null;
        }
        return this.questions[this.currentIndex];
    }

    finished(): boolean {
        return this.currentIndex >= this.questions.length;
    }

    calculateResults(): { stage: string; archetype: string; score: number } {
        let totalScore = 0;
        let archetype = "";

        for (let question of this.questions) {
            const answerIndex = this.answers[question.id];

            if (answerIndex !== undefined) {
                if (question.type === "stage") {
                    const stageQues = question as StageQues;
                    totalScore += stageQues.points[answerIndex];
                } else if (question.type === "archetype") {
                    const archQues = question as ArchetypeQues;
                    archetype = archQues.tags[answerIndex];
                }
            }
        }
        
        let stage = "";
        if (totalScore <= 9) {
            stage = "Surviving";
        } else if (totalScore <= 17) {
            stage = "Stabilising";
        } else {
            stage = "Strategising";
        }

        return { stage, archetype, score: totalScore };
    }
}

const data: Question[] = [
    new StageQues("q1", "What best describes your current job status?", [
        "A. I'm unemployed or doing anything I can to survive",
        "B. I have a job, but it's not aligned or ideal",
        "C. I'm working in a role that fits my skills and current goals"
    ], [0, 1, 2]),
    new StageQues("q2", "How confident are you navigating your current job market?", [
        "A. I feel overwhelmed or unsure where to begin",
        "B. I have some understanding but still second-guess a lot",
        "C. I'm confident in my ability to navigate, search, and position myself"
    ], [0, 1, 2]),
    new StageQues("q3", "How do you feel about your career direction right now?", [
        "A. I feel lost, stuck, or disconnected from any direction",
        "B. I'm figuring it out and taking small steps",
        "C. I'm clear on what I want and moving towards it"
    ], [0, 1, 2]),
    new StageQues("q4", "How stable is your life overall?", [
        "A. Things feel chaotic or uncertain in multiple areas",
        "B. Some parts are stable, others not yet",
        "C. My life is steady enough to plan and grow from"
    ], [0, 1, 2]),
    new StageQues("q5", "How supported do you feel professionally?", [
        "A. I feel isolated or unsupported",
        "B. I have a few contacts but need more reliable support",
        "C. I have strong professional connections or mentors"
    ], [0, 1, 2]),
    new StageQues("q6", "What is your current energy level for career growth?", [
        "A. I'm tired or burned out no fuel for more right now",
        "B. I have some energy but not consistently",
        "C. I'm energized and ready to invest in my growth"
    ], [0, 1, 2]),
    new StageQues("q7", "How visible are you professionally (online/in community)?", [
        "A. I'm mostly invisible or unknown in my field",
        "B. I show up occasionally or in limited spaces",
        "C. I'm actively visible and engaged in relevant spaces"
    ], [0, 1, 2]),
    new StageQues("q8", "How clearly can you describe your professional goals?", [
        "A. I don't know what I want or how to get there",
        "B. I have a general idea, but it's fuzzy or shifting",
        "C. I'm clear on my goals and what they require"
    ], [0, 1, 2]),
    new StageQues("q9", "Which statement best reflects your readiness to act?", [
        "A. I feel paralyzed or unsure how to start",
        "B. I'm taking slow or hesitant steps",
        "C. I'm taking bold or strategic actions"
    ], [0, 1, 2]),
    new StageQues("q10", "How do you feel about asking for help or mentorship?", [
        "A. I struggle to ask or don't know who to turn to",
        "B. I occasionally ask but still hesitate",
        "C. I actively seek out mentorship or peer support"
    ], [0, 1, 2]),
    new StageQues("q11", "How much control do you feel you have over your career?", [
        "A. I feel like things are happening to me",
        "B. I have some control, but systems still dictate my options",
        "C. I feel in control of my career decisions and actions"
    ], [0, 1, 2]),
    new StageQues("q12", "If your dream role appeared today, would you be ready?", [
        "A. No I'd hesitate or feel unprepared",
        "B. Maybe I'd need time or help to get ready",
        "C. Yes I'd be confident stepping into it"
    ], [0, 1, 2]),
    new ArchetypeQues("q13", "Which best describes your work context right now?", [
        "A. I'm new to this country or system - still adapting and finding my footing",
        "B. I've been here a while, but I'm still figuring out how to thrive",
        "C. I'm fairly integrated but seeking to level up or expand",
        "D. I'm still in my home country but stuck professionally",
        "E. I work remotely/globally but lack a clear path or anchor"
    ], ["Nest Rebuilder", "Rebuilder", "Rising Calf", "Grounded Giant", "Re-Emerging Butterfly"]),
    new ArchetypeQues("q14", "Which of these best describes your current season?", [
        "A. I'm an experienced professional, but I feel stuck or underutilized",
        "B. I'm in a mid-level role and want to grow into leadership or visibility",
        "C. I'm rebuilding in a new country, industry, or field",
        "D. I'm re-emerging after a pause, burnout, or caregiving"
    ], ["Grounded Giant", "Rising Calf", "Nest Rebuilder", "Re-Emerging Butterfly"])
];

const resultDatabase: any = {
    "Surviving": {
        "Grounded Giant": { insights: ["Needs grounding."], recommendations: "" },
        "Nest Rebuilder": { insights: ["Building foundations."], recommendations: "" },
        "Re-Emerging Butterfly": { insights: ["Returning to the workforce."], recommendations: "" },
        "Rising Calf": { insights: ["Eager but new."], recommendations: "" }
    },
    "Stabilising": {
        "Grounded Giant": { insights: ["Solidifying position."], recommendations: "" },
        "Nest Rebuilder": { insights: ["Expanding the network."], recommendations: "" },
        "Re-Emerging Butterfly": { insights: ["Gaining confidence."], recommendations: "" },
        "Rising Calf": { insights: ["Building momentum."], recommendations: "" }
    },
    "Strategising": {
        "Grounded Giant": { insights: ["Ready for impact."], recommendations: "" },
        "Nest Rebuilder": { insights: ["Fully integrated."], recommendations: "" },
        "Re-Emerging Butterfly": { insights: ["Flying high."], recommendations: "" },
        "Rising Calf": { insights: ["Fast growth."], recommendations: "" }
    }
};

// ====================================ELISABET============================================================================================

const imageMap: { [key: string]: string } = {
    "Grounded Giant": "res-giant",
    "Rising Calf": "res-calf",
    "Nest Rebuilder": "res-nest",
    "Re-Emerging Butterfly": "res-wings",
    "Rebuilder": "res-nest"
};


//====================================================KARMEN============================================================================
let quiz: Test;

document.addEventListener("DOMContentLoaded", () => {
    quiz = new Test(data);
    document.getElementById("prev-btn")?.addEventListener("click", goBack);
    document.getElementById("between-prev-btn")?.addEventListener("click", goBack);
    document.getElementById("continue-btn")?.addEventListener("click", () => {
        document.getElementById("between-container")?.classList.add("hidden");
        renderQuestion();
    });

    showQuestion();
});

function showQuestion() {
    document.getElementById("question-container")?.classList.add("hidden");
    document.getElementById("between-container")?.classList.add("hidden");
    document.getElementById("result-container")?.classList.add("hidden");

    updateProgressBar();

    if (quiz.finished()) {
        triggerResultAnimation();
        return;
    }

    
    if (quiz.currentIndex === 12) {
        document.getElementById("between-container")?.classList.remove("hidden");
    } else {
        renderQuestion();
    }
}

function renderQuestion() {
    document.getElementById("question-container")?.classList.remove("hidden");
    const question = quiz.getCurrentQuestion();
    
    if (!question) return;

    const isStageOne = quiz.currentIndex < 12;
    document.getElementById("q-indicator")!.innerText = isStageOne ? "Section 1: Stage Diagnostic" : "Section 2: Persona Archetype";
    document.getElementById("q-number")!.innerText = `Question ${quiz.currentIndex + 1} of ${quiz.questions.length}`;
    document.getElementById("q-title")!.innerText = question.text;

    const prevBtn = document.getElementById("prev-btn");
    if (prevBtn) {
        if (quiz.currentIndex === 0) {
            prevBtn.classList.add("hidden");
        } else {
            prevBtn.classList.remove("hidden");
        }
    }

    const optionsDiv = document.getElementById("options-container")!;
    optionsDiv.innerHTML = "";
    
    question.options.forEach((optText, index) => {
        const btn = document.createElement("button");
        btn.innerText = optText;
        btn.className = "option-btn"; 
        
        btn.onclick = () => {
            quiz.saveAnswer(index);
            showQuestion();
        };
        optionsDiv.appendChild(btn);
    });
}

function goBack() {
    quiz.back();
    showQuestion();
}
//==================================ELISABET==============================================================================================
function updateProgressBar() {
    const totalQuestions = quiz.questions.length;
    const percentage = (quiz.currentIndex / totalQuestions) * 100;
    const degrees = (quiz.currentIndex / totalQuestions) * 1440; 

    const blueFill = document.getElementById("blue-fill");
    const acornImage = document.getElementById("acorn-indicator");
    
    if (blueFill) blueFill.style.width = `${percentage}%`;
    if (acornImage) acornImage.style.transform = `translateY(-50%) rotate(${degrees}deg)`;

    const stepDiag = document.getElementById("step-diag");
    const stepArch = document.getElementById("step-arch");
    const stepRes = document.getElementById("step-res");

    if (quiz.currentIndex >= 12 && quiz.currentIndex < totalQuestions) {
        stepDiag?.classList.remove("active");
        stepArch?.classList.add("active");
    } else if (quiz.currentIndex < 12) {
        stepDiag?.classList.add("active");
        stepArch?.classList.remove("active");
        stepRes?.classList.remove("active");
    }
}

function triggerResultAnimation() {
    const progressZone = document.getElementById("progress-zone");
    const centerLoader = document.getElementById("center-loader");
    const stepArch = document.getElementById("step-arch");
    const stepRes = document.getElementById("step-res");

    stepArch?.classList.remove("active");
    stepRes?.classList.add("active");

    
    setTimeout(() => {
        if (progressZone) progressZone.style.display = "none";
        
        if (centerLoader) {
            centerLoader.style.display = "block";
            centerLoader.style.opacity = "1";
        }

        
        setTimeout(() => {
            if (centerLoader) centerLoader.style.opacity = "0";
            showFinalResults();
            setTimeout(() => {
                if (centerLoader) centerLoader.style.display = "none";
            }, 200);
        }, 1000);
        
    }, 600);
}
//===============================KARMEN=================================================================================================
function showFinalResults() {
    const resultContainer = document.getElementById("result-container");
    if (resultContainer) resultContainer.classList.remove("hidden");

    const results = quiz.calculateResults();
    console.log(`User got ${results.score} points`);
    
    const dbData = resultDatabase[results.stage]?.[results.archetype];

    // Populate Text
    document.getElementById("res-title")!.innerText = `${results.stage} Stage • ${results.archetype}`;
    document.getElementById("res-subtitle")!.innerText = `You're in the ${results.stage} Stage, showing up as a ${results.archetype}.`;
    
    const insightsList = document.getElementById("res-insights")!;
    insightsList.innerHTML = "";
    
    if (dbData) {
        dbData.insights.forEach((insight: string) => {
            const li = document.createElement("li");
            li.innerText = insight;
            insightsList.appendChild(li);
        });
        document.getElementById("res-action")!.innerText = dbData.recommendations;
    } else {
        document.getElementById("res-action")!.innerText = "Data for this combination needs to be added to the resultDatabase.";
    }
//================================ELISABET================================================================================================
    const imageId = imageMap[results.archetype] || "res-giant"; 
    const finalImg = document.getElementById(imageId) as HTMLImageElement;
    if (finalImg) {
        setTimeout(() => {
            finalImg.classList.add("reveal");
        }, 50);
    }
}