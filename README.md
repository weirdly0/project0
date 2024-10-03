# Text to Image using Hugging Face API

This project demonstrates how to generate images from text input using the Hugging Face Inference API. It allows users to input text and generate images using the `stabilityai/stable-diffusion-xl-base-1.0` model.

## Overview

The project uses the Hugging Face `stabilityai/stable-diffusion-xl-base-1.0` model for generating images from text prompts. Users can enter a text prompt into a form, and the application sends the input to the Hugging Face API. The API responds with an image, which is then displayed on the page.

## Live project demo
https://aitxt2img.netlify.app/

## How It Works

1. **User Input**: A text input field allows the user to provide a description or prompt for the image generation.
2. **API Call**: Upon clicking the submit button, the application sends the text prompt to the Hugging Face API using a POST request.
3. **Image Generation**: While the API processes the request, a loading GIF is shown.
4. **Result Display**: Once the API returns the generated image, the loading GIF is replaced with the image.

## Requirements

- A valid Hugging Face API token.
- A basic web server to host the HTML, JavaScript, and CSS files.

