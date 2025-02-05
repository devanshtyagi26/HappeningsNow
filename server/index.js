const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const eventsRouter = require("./routes/events");
app.use("/api/events", eventsRouter); // Use the events route

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
