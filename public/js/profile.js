


const generatePhoto = async () => {
    const generatedImage = document.querySelector(".generated-image");
    const photoInput = document.getElementById('photo-input');
    const prompt = photoInput.value;

    if (prompt){
        try {
          

            const response = await fetch('api/openai/generateImage',{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({prompt: prompt }),
            });
             
            const  data = await response.json();
           // const image = `data:image/jpeg;base64, ${data.image}`;
           // generatedImage.src = image;
           console.log(response)

        } catch(error) {
            console.log(error);
            alert(error);
        }} 
    else {
            console.log('blank prompt')
        }
    
};



document.querySelector('.btn')
    .addEventListener('click', generatePhoto)