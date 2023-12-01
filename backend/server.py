import os
import openai
import traceback
from flask_cors import CORS, cross_origin
from flask import Flask, request
from werkzeug.utils import secure_filename

app = Flask(__name__)
app.config['CORS_HEADERS'] = ['Allow-Control-Access-Origin']
cors = CORS(app, resources={r'/api/*': {'origins': 'http://localhost:5173'}})

try:
    PATH = os.path.dirname(os.path.abspath(__file__))
    UPLOAD_FOLDER = os.path.join(PATH, "tmp")
    os.makedirs(UPLOAD_FOLDER, exist_ok=True)
    app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER
    app.logger.info("Created temporary upload folder")
except Exception as e:
    app.logger.info("Error in creating upload folder:")
    app.logger.error("Exception occured: {}".format(e))

@app.route("/api/upload", methods=["POST", "OPTIONS"])
def file_upload():
    try:
        file = request.files["file"]
        save_path = os.path.join(app.config.get("UPLOAD_FOLDER"), secure_filename(file.filename))
        file.save(save_path)
        app.logger.info("File {} save successfully".format(file.filename))
    except Exception as e:
        app.logger.info("Error in saving file:")
        app.logger.error("Exception occured: {}".format(e))
        app.logger.error("Traceback: {}".format(traceback.format_exc()))
        return { "msg": "Error saving file" }
    return { "msg": "File saved successfully" }

@app.route("/api/verify-user", methods=["POST"])
def verify_user():
    user = request.form["user"]
    key = request.form["api-key"]
    return {"user": user, "key": key}