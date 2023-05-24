# Majo PDF Generator

A Node.js library for generating PDF files from customizable HTML templates.

## Install

    npm install majo-pdf-generator

## Usage

To generate a PDF, follow these steps:

1. Import the library and the necessary dependencies:

```js
const generatePDF = require('majo-pdf-generator');
const path = require('path');
```

2. Define the path of the HTML template, the data for the template, and the output path of the generated PDF:

```js
const templatePath = path.json(__dirname, 'path-to-template.html');
const data = {
	title: 'My PDF Template',
	message: 'Hello world!',
};
const outputPath = path.join(__dirname, 'path-of-the-generated-file.pdf');
```

3. Call the generatePDF function to generate the PDF:

```js
generatePDF(templatePath, data, outputPath);
```

### Full Exaple:

Here is a complete example showing how to generate a PDF using your library

```js
const generatePDF = require('tu-libreria');
const path = require('path');

const templatePath = path.join(__dirname, 'path-to-template.html');
const data = {
	title: 'Mi Plantilla de PDF',
	message: '¡Hola, mundo!',
};
const outputPath = path.join(__dirname, 'path-of-the-generated-file.pdf');

generatePDF(templatePath, data, outputPath);
```
### Template Customization

The HTML template used to generate the PDF is fully customizable. You can edit the structure and styles of the template according to your needs. Make sure you keep the basic tags and attributes required by HTML.

Here's an example of a custom HTML template:

```js
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>{{ title }}</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    h1 {
      color: #333;
    }
    p {
      color: #777;
    }
  </style>
</head>
<body>
  <h1>{{ title }}</h1>
  <p>{{ message }}</p>
</body>
</html>
```

Be sure to use the Handlebars {{ variable }} syntax to insert dynamic values into the template.

### Advanced Use Cases

In addition to the basic use cases, this library also allows for more advanced operations. Here are some additional use case examples:

Generate a PDF with images
If you want to include images in your HTML template, make sure you use the correct file paths. For example:

```js
const data = {
   title: 'My PDF Template',
   message: 'Hello world!',
   imageUrl: 'path-to-image.png',
};
```

And in your HTML template:

```js
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>{{ title }}</title>
  <style>
    /* Custom styles */
  </style>
</head>
<body>
  <h1>{{ title }}</h1>
  <p>{{ message }}</p>
  <img src="{{ imageUrl }}" alt="Imagen">
</body>
</html>
```

Customize Styles

You can customize the styles of your HTML template to suit your needs. Modify the CSS code inside the `<style>` tag of your HTML template. For example:

```js
<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
  }
  h1 {
    color: #333;
    font-size: 24px;
  }
  p {
    color: #777;
  }
</style>
```

### Contributions

Contributions to this library are welcome! If you have any suggestions, improvements, or fixes, feel free to open an issue or submit a pull request on the GitHub repository.

I hope this example helps you get an idea of how you can structure and document your library, providing examples and use cases to help users get the most out of your functionality. Remember to tailor the documentation to your needs and add any additional details relevant to your library.

## Lincense

This project is licensed under the MIT License. The [MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2023 Majo Cervantes
