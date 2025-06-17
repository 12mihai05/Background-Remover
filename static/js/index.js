document
  .getElementById("uploadForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted");

    const formData = new FormData(this);

    // Show loading state
    document.getElementById("status").textContent = "Processing...";

    fetch("/download", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        console.log("Response status:", response.status);
        return response.json();
      })
      .then((data) => {
        console.log("Response received:", data);
        if (data.error) {
          throw new Error(data.error);
        }
        if (data.blob) {
          // Store data locally and redirect
          localStorage.setItem("processedImage", data.blob);
          localStorage.setItem("filename", data.filename);
          window.location.href = "/download_page";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        document.getElementById("status").textContent =
          "Error: " + error.message;
      });
  });
