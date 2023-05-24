const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
const puppeteer = require('puppeteer');
const htmlPdf = require('html-pdf');

async function generatePDF(templatePath, data, outputPath) {
	try {
		const source = fs.readFileSync(templatePath, 'utf8');
		const template = handlebars.compile(source);
		const html = template(data);

		const browser = await puppeteer.launch();
		const page = await browser.newPage();

		await page.setContent(html, { waitUntil: 'networkidle0' });

		await page.pdf({ path: outputPath, format: 'A4' });

		await browser.close();

		console.log('PDF generated successfully.');
	} catch (error) {
		console.error('Error generating the PDF:', error);
	}
}

module.exports = generatePDF;
