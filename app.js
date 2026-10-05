const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static("public"));

// Open the chatbot
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/harshi.html");
});

// Chatbot API
app.post("/chat", (req, res) => {

    const message = (req.body.message || "").toLowerCase().trim();

    let reply =
        "Sorry, I don't understand. Please ask about courses, departments, library, placements, admissions or canteen.";

    // Hello / Hi
    if (
        message === "hi" ||
        message === "hello" ||
        message.includes("hello")
    ) {
        reply =
            "Hello! 👋 Welcome to the College Information Chatbot. How can I help you?";
    }

    // Courses
    else if (message.includes("course")) {
        reply =
            "Our college offers various engineering courses such as CSE, AI&ML, ECE, EEE, Mechanical and Civil Engineering.";
    }

    // CSE
    else if (
        message.includes("cse") ||
        message.includes("computer science")
    ) {
        reply =
            "CSE stands for Computer Science and Engineering. It focuses on programming, software development, databases and computer systems.";
    }

    // AI and ML
    else if (
        message.includes("ai&ml") ||
        message.includes("ai ml") ||
        message.includes("aiml") ||
        message.includes("artificial intelligence") ||
        message.includes("machine learning")
    ) {
        reply =
            "AI&ML stands for Artificial Intelligence and Machine Learning. It includes Python, Machine Learning, Data Science and Artificial Intelligence.";
    }

    // Library
    else if (message.includes("library")) {
        reply =
            "The college library provides textbooks, reference books, journals and digital learning resources.";
    }

    // Placements
    else if (
        message.includes("placement") ||
        message.includes("job")
    ) {
        reply =
            "The placement cell helps students with training, internships and job opportunities.";
    }

    // Admissions
    else if (message.includes("admission")) {
        reply =
            "Admissions are conducted according to the applicable entrance examination and college admission process.";
    }

    // Canteen
    else if (message.includes("canteen")) {
        reply =
            "The college has a canteen that provides food and refreshments for students and staff.";
    }

    // Departments
    else if (message.includes("department")) {
        reply =
            "The college has various departments including Computer Science, Electronics, Electrical, Mechanical, Civil and more.";
    }

    // Thank you
    else if (
        message.includes("thank") ||
        message.includes("thanks")
    ) {
        reply = "You're welcome! 😊";
    }

    // Goodbye
    else if (
        message.includes("bye") ||
        message.includes("goodbye")
    ) {
        reply = "Goodbye! Have a great day! 👋";
    }

    // Send response
    res.json({
        reply: reply
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Chatbot running at http://localhost:${PORT}`);
});
