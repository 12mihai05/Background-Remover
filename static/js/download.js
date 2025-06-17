document.getElementById('download_btn').addEventListener('click', function(){
    // Convert the base64-encoded processedImage to a data URL
    const dataURL = 'data:image/png;base64,' + processedImage;

    // Create a link element to trigger the download
    const link = document.createElement('a');
    link.href = dataURL;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);

    // Click the link to trigger the download
    link.click();

    // Clean up by removing the link
    document.body.removeChild(link);
});
