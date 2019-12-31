//include dependencies
const express = require('express');

//define app, port and folder
const app = express();
app.listen(5000, () => console.log("Listening on port 5000"));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

app.post('/api', (request, response) => {
    console.log(request.body);
    response.json({
        status: "success",
        latitude: request.body.latitude,
        longitude: request.body.longitude
    });
});