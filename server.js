// Imports
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const compression = require('compression');

// Express settings
const app = express();
const staticDir = path.join(__dirname, '/static');
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(express.static(staticDir));
app.use(compression()); // Enabling text compression for perfomance

// Defining the Routes
/** Home Page */

app.get('/', (req, res) => {
    res.render('home', {layout: false});
});

/** Document(PDF) Routes - 5 Documents
 * "name"(String): The file name of the pdf in the static directory.
 * "fname"(String): The name which you want to display
 * "info"(String): Additional info to show in the embedded PDF
 */

app.get('/doc1', (req, res) => {
    res.render('pdfViewer', {
        layout: false,
        name: 'State of Hawaii Guide.pdf',
        fname: 'How to submit a Claim',
        info: `Learn how to submit "A Perfect Claim" so their automated
        process will work more efficiently and claims can be 
        processed faster.`,
    });
});

app.get('/doc2', (req, res) => {
    res.render('pdfViewer', {
        layout: false,
        name: 'Backdated-Pandemic-Unemployment.pdf',
        fname: 'How to Backdate your Claim (FAQs)',
        info: `Learn how to backdate your claim along with Frequently
        Asked Questions(FAQs) related to backdating.`,
    });
});


app.get('/doc3', (req, res) => {
    res.render('pdfViewer', {
        layout: false,
        name: 'Eligibility Review Questionnaire.pdf',
        fname: 'Eligibility Review Questionnaire',
        info: `Learn if your are eligible enought to file
        an unemployment claim along with details to submit the form.`,
    });
});

app.get('/doc4', (req, res) => {
    res.render('pdfViewer', {
        layout: false,
        name: 'Unemployment Benefits.pdf',
        fname: 'Unemployment Benefits',
        info: `Learn all about unemployment insurance and all
        its benefits and how to file one.`,
    });
});

app.get('/doc5', (req, res) => {
    res.render('pdfViewer', {
        layout: false,
        name: 'COVID-19-UI-FAQs.pdf',
        fname: 'COVID-19 UI Facts',
        info: `A curated list of frequentl  y asked questions 
        related to unemployment during COVID-19.`,
    });
});

/** Contact Us Page */
app.get('/contact', (req, res) => {
    res.render('contact', {layout: false});
});

// Start the server at port 9000
app.listen(9000);
console.log('Server listening at port 9000');
