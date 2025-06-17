from flask import Flask, render_template, request, redirect, url_for, jsonify
from PIL import Image
from rembg import remove
from io import BytesIO
import os
import base64

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/download', methods=['POST'])
def download():
     if request.method == 'POST':

        if 'file' not in request.files:
            return 'No file part', 400
        
        file = request.files['file']

        if file.filename == '':
            return 'No selected file'

        if file:
            input = Image.open(file.stream)
            output = remove(input, post_process_mask=True)
            img_io = BytesIO()
            output.save(img_io, 'PNG')
            img_io.seek(0)
            img_bytes = img_io.getvalue()
            img_base64 = base64.b64encode(img_bytes).decode('utf-8')
            filename = os.path.splitext(file.filename)[0]
            download_name = filename + "_bgrm.png"
            response = jsonify({
                'blob': img_base64,
                'filename': download_name
            })

            return response


@app.route('/download_page', methods=['GET'])
def download_page():
    processed_image = request.args.get('processed_image')
    original_image = request.args.get('original_image')
    filename = request.args.get('filename')
    
    return render_template('download.html', processed_image=processed_image, original_image=original_image, filename=filename)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5100, debug=True)
