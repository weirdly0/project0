const token = "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";

const inputtxt = document.getElementById("input");
const image = document.getElementById("image");
const button = document.getElementById("btn");

async function query() {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
        {
            headers: { Authorization: `Bearer ${token}` },
            method: "POST",
            body: JSON.stringify({ "inputs": inputtxt.value }),
        }
    );
    const result = await response.blob();
    return result;
}

button.addEventListener('click', async function () {
    image.src = "/loading.gif";  // Show the loading gif
    query().then((response) => {
        const objecturl = URL.createObjectURL(response);
        image.src = objecturl;   // Remove the loading gif and show the image
    });
});