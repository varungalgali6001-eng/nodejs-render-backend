const express = require("express");

const app = express();

app.use(express.json());

// GET route
app.get("/getData", (req, res) => {
    res.send("Server is running successfully!");
});

// POST route
app.post("/data", (req, res) => {
    const data = req.body;

    res.json({
        message: "Data received successfully",
        data: data
    });
});

// Important for Render
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});