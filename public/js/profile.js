


const generatePhoto = async (event) => {
    event.preventDefault();
    const generatedImage = document.querySelector(".generated-image");
    const downloadImage = document.querySelector(".download-img")
    const photoInput = document.getElementById('photo-input');
    const prompt = photoInput.value;
    
    if (prompt){
        try {
            generatedImage.src = "photos/tenor-loading-gif.gif"
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
            console.log(image)
            generatedImage.src = image;
            downloadImage.href = image;

        } catch(error) {
            console.log(error);
           // alert(error);
        }} 
    else {
            console.log('blank prompt')
        }
    
};



const storePhoto = async (event) => {
    event.preventDefault();
    const url = document.querySelector(".generated-image").src
    console.log(url)

   if(url){
        const response = await fetch('api/images/saveImage', {
            method: 'POST',
            body: JSON.stringify({url}),
            headers: {
                "Content-Type": "application/json",

            },
        });

        if(response.ok){
            console.log('save image ok')
        } else {
            alert('something went wrong')
        }
    }    
} ;



document.querySelector('.btn')
    .addEventListener('click', generatePhoto)

document.querySelector('.save-btn')
.addEventListener('click', storePhoto)    