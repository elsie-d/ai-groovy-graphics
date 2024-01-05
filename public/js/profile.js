


const generatePhoto = async (event) => {
    event.preventDefault();
    const generatedImage = document.querySelector(".generated-image");
    const photoInput = document.getElementById('photo-input');
    const prompt = photoInput.value;
    
    if (prompt){
        try {
            generatedImage.src = "photos/images.jpg"
            const response = await fetch('api/openai/generateImage',{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({prompt: prompt }),
            });
             console.log(response)
            const  data = await response.json();
            const image = `${data.image}`;
            generatedImage.src = image;
           

        } catch(error) {
            console.log(error);
           // alert(error);
        }} 
    else {
            console.log('blank prompt')
        }
    
};



document.querySelector('.btn')
    .addEventListener('click', generatePhoto)