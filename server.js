const express = require('express');
const app = express();

const PORT = 3000; // for Heroku ? process.env.PORT || 3000

// will share any static html files with the browser
app.use( express.static('html') );
// accept incoming POST requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Data =======================================================
let tableList = [ { name: 'test table', phone: '999-999-9999'} ]

// Routes (Endpoints) =========================================
app.get('/api/tables/:tableId', function(req, res) {
    const tableId = req.params.tableId;
    // get the table info
    const tableData = {};
    res.send( tableData );
});

// app.get('/api/tables', function(req, res) {
//     res.send( tableList );
// });

app.post('/api/tables/reserve', function(req, res) {
    console.log( '[reservation] req.body: ', req.body );

    const newTableData = req.body;
    res.send( { message: `Saved: ${newTableData.name}` } );
});

// Listener ==================================================
app.listen(PORT, function() {
    console.log('Serving hot-tables on PORT ' + PORT);
});