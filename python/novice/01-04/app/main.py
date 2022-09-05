from flask import Flask, render_template, request
import psycopg2

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/post", methods=["GET", "POST"])
def post():
    curs = conn.cursor()
    if request.method == "POST":
        nama = request.form.get("nama")
        detail = request.form.get("detail")
        # print(20*"=")
        # print(request.form)
        # print(nama)
        # print(detail)
        # print(20*"=")
        query = f"insert into buah(nama, detail) values('{nama}', '{detail}')"
        curs.execute(query)
        conn.commit()
        curs.close()
        conn.close()

    print(request.method)

    data = ['aku', 'kamu', 'kita']
    return render_template("post.html", context=data)

@app.route("/about")
def about():
    return render_template("about.html")

if __name__ == "__main__":
    app.run()