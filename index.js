const express = require('express');
const app = express();
const port = 3000;

app.get('*', (req, res) => {
    res.redirect('https://www.willhaben.at/iad/gebrauchtwagen/auto/gebrauchtwagenboerse?sfId=bff2225e-6c94-49fd-adc9-4b9b321e18d1&isNavigation=true&page=1&keyword=&PRICE_TO=19000&MILEAGE_TO=250000&YEAR_MODEL_FROM=2009');
});

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
