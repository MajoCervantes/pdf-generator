const generatePDF = require('./src/lib/pdfGenerator');
const path = require('path');

const templatePath = path.join(__dirname, 'src/templates/template.html');

const data = {
	title: 'Mi plantilla de PDF',
	message: '¡Hola Mundo!',
};

const outputPath = path.join(__dirname, 'output.pdf');

generatePDF(templatePath, data, outputPath);
