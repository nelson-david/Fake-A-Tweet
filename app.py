from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
	return render_template("index.html")

@app.route("/create/tweet")
def create_tweet():
	return render_template("home.html")

@app.route("/sw.js", methods=["GET"])
def service_worker():
	return app.send_static_file('js/serviceWorker.js')

@app.route("/favicon.ico", methods=["GET"])
def fav_icon():
	return app.send_static_file('img/favicon.ico')

if __name__ == "__main__":
	app.run(debug=True, port=6677, host='0.0.0.0')