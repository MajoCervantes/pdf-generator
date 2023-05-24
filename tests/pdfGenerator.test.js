const fs = require('fs');
const generatePDF = require('../src/lib/pdfGenerator');
const path = require('path');
const puppeteer = require('puppeteer');

describe('PDF Generator', () => {
	let browser;

	beforeAll(async () => {
		browser = await puppeteer.launch({
			headless: true, // Ejecutar en modo headless
		});
	});

	afterAll(async () => {
		await browser.close();
	});

	it('should generate a PDF file', async () => {
		const templatePath = path.join(__dirname, '../src/templates/template.html');
		const data = {
			title: 'Test Title',
			message: 'Test Message',
		};
		const outputPath = path.join(__dirname, '../output.pdf');

		await generatePDF(templatePath, data, outputPath, browser);

		expect(fs.existsSync(outputPath)).toBe(true);
	});
});
