# Background Remover

A web-based application that automatically removes backgrounds from images using AI. Built with Python Flask and modern web technologies.

## Features

- **One-Click Background Removal**: Instantly remove backgrounds from any image
- **Web-Based Interface**: User-friendly interface accessible through any browser
- **Download Support**: Easily download processed images in PNG format
- **Real-Time Processing**: See the results immediately after upload
- **Supports Multiple Image Formats**: Compatible with JPEG, PNG, and other common image formats

## Technology Stack

- **Backend**: Python Flask
- **Frontend**: HTML5, JavaScript (Vanilla)
- **Image Processing**: rembg, Pillow
- **Data Handling**: Base64 encoding for image transfer
- **Development**: RESTful API architecture

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/Background-Remover.git
cd Background-Remover
```

2. Install dependencies:

```bash
pip install flask pillow rembg
```

3. Run the application:

```bash
python main.py
```

4. Open your browser and navigate to:

```
http://localhost:5100
```

## How It Works

1. User uploads an image through the web interface
2. The image is processed server-side using the `rembg` library
3. Processed image is converted to base64 and sent back to the client
4. User can preview and download the processed image

## Technical Details

- **RESTful API Endpoints**:

  - `GET /`: Main upload page
  - `POST /download`: Process image and return base64 data
  - `GET /download_page`: Download page for processed images

- **Image Processing Flow**:

  - Image upload handling
  - Background removal processing
  - Base64 encoding/decoding
  - Client-side image preview and download

## Key Implementation Features

- Error handling and validation
- Asynchronous image processing
- Efficient image data transfer
- Cross-browser compatibility
- Scalable architecture
