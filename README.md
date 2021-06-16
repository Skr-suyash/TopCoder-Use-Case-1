# Unemployment (GOV.) Use Case

A Node JS and Express Web Application built for Use Case: Consumption of Public Information Measurement and Analysis and built with the theme of **Government of Hawaii** and **Submitting Unemployment Claims**.

# Installation
Extract and open the file and run ```npm install``` to install all the required packages and dependencies.

## Files Included
- **server.js** - The main entry point of our application.
- **static** (folder) - The static directory where the JS,CSS and **PDF** files are there
- **views** (folder) - All the views of the application in handlebars(.hbs) format - Home.hbs, pdfViewer.hbs, contact.hbs.
- **package.json** and **eslint-config** files
- **IMPORTANT_LINKS** - Text file containing Google Analytics Template link and Demo Video link
- Readme in Markdown and HTML formats

## Libraries Used and External Tools
 - [**Express**]('https://www.npmjs.com/package/express') - Library that makes it easy to create servers
 - [**express-handlebars**]('https://www.npmjs.com/package/express-handlebars') - A templating library which allows us to server dynamic web pages.
 - **Adobe View SDK**
 - **Google Analytics** and **Google Translate API**
 - Bootstrap

## Usage
1. Install all the dependencies ```npm install```
2. Open a terminal and run ```node server.js``` or ```npm start```
3. Open a web browser and go to http://localhost:9000/
4. Click on the cards to go to different PDF Viewers and click on the **Fullscreen** button to change the view.

### Setting up Google Analytics and see the Dashboard
1. Go to Google Analytics website: https://analytics.google.com/
2. If you are a new user set up a new Analytics account else else Goto Admin -> Property -> Tracking Info -> Tracking Code
3. Finally, you will get a **gtag** with a TRACKING_ID
4. Copy the **gtag** and replace it in the **head** section in **pdfViewer.hbs** (important) in the **views** directory.
**( Note )** Analytics will only show up when you open a PDF(Content Screen) by clicking on the cards.
5. Open the template link provided in the **IMPORTANT_LINKS** file and select the correct view from the list and click on the **Create** button.
6. Please select the correct date range from above.

## Notable Features
**UI**
A clean and easy to navigate UI which resonates with the government and current pandemic theme.

**Perfomance and Code Quality**
Being a givernment website, a lot of attention has been paid to perfomance. Testing it in Lighthouse (Dev Tools) gives a score of about **92**. Scripts and blocking CSS have been loaded asynchronously.
Linting is enabled and standard coding practices are followed.

**Accessibility, Cross-Compatibility and Mobile Responsive**
According to the theme, the website should be higly accessibly through screen readers. Testing with Lighthouse gives a score of about **95**. Also **Google Translate** has been set up for language translation.
It is completely mobile responsive and supports all major browsers.

**Analytics Dasboard**
The following events are displayed in the dashboard - "Most Viewed PDFs in Bar and Pie Charts", "Total Page Views", "Number of Visitors", "Avergae Time per PDF", "Downloads and Prints", "Users by Device Category and Browsers", "Most Affected Cities".

**PDF VIEWER**
Multiple PDF Viewers are created and the view can be changed by clicking on the "Full Screen" button.

#### What can be done during production
- The CSS and JS files can be minified to improve perfomance.
- PDF files can be served via a CDN and cached.
- The site should use http/2 protocol and signed by an SSL Certificate



