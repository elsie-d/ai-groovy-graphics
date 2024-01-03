const { generateImage } = require("../../controllers/openaiController");

function onSubmit(e) {
    e.preventDefault();

    document.querySelector('msg').textContent = '';
    document.querySelector().src = '';

    const prompt = document.querySelector().value;

    if (prompt === '') {
        alert('Please add some text');
        return;
    }

    generateImageRequest(prompt);
}
async function generateImageRequest(prompt) {
    try {
    const response = await fetch('/openai/genterateimage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            prompt,
            size
        })
    });

    if (!response.ok) {
        throw new Error('That image could not be generated');
    }

    const data = await response.json();
    console.log(data)

    const imageUrl = data.data;
    
    document.querySelector().src = imageUrl;

    } catch (error) {
    document.querySelector('.msg').textContent = error;
}
}

document.querySelector().addEventListener('submit', onSubmit);