import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import carouselRoutes from './routes/carousel.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

app.use('/api/carousel', carouselRoutes);

app.get('/', (req, res) => {
    res.send('Backend is running')
});

const PORT = process.env.PORT || 3600;

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})



