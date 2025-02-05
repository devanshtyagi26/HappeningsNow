const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS and allow requests from your frontend
app.use(cors({ origin: 'https://happenings-now.vercel.app' }));

app.use(express.json());

const eventsRouter = require('./routes/events');
app.use('/api/events', eventsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
