const generatePhoto = async (event) => {
    event.preventDefault();

    const photoInput = document.getElementById('photo-input');
    const photoText = photoInput.value;

    try {
        const response = await fetch('/openai/generateImage', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ prompt: photoText }),
        });
        const { imageURL } = await response.json();

        const image = document.createElement('img');
        image.src = imageURL;

        const photoContainer = document.getElementById('photo-container');
        photoContainer.innerHTML = '';
        photoContainer.appendChild(image);
    } catch (error) {
        console.error('Error generating photo:', error);
    }
}

document.querySelector('.btn')
    .addEventListener('click', generatePhoto)




