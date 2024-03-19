const download_btn = document.getElementById('download_btn');

document.getElementById('uploadForm').addEventListener('submit', async function(event){
    event.preventDefault();

    try {
        const response = await fetch('/', {
            method: 'POST',
            body: new FormData(this)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Received data:', data);

        const blob = new Blob([data.blob], {type: 'image/png'});
        const filename = data.filename;
        
        console.log('Blob:', blob);
        console.log('Filename:', filename);

        const url = window.URL.createObjectURL(blob);
        console.log('Blob URL:', url);

        download_btn.style.display = 'block';
        download_btn.addEventListener('click', function(){
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        });


    } catch (error) {
        console.error('Error:', error);
    }
});
