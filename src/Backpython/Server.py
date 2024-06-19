#Import statements
from flask import Flask, jsonify, request
from flask_cors import CORS
from Chart import *

#app initializing
app = Flask(__name__)
CORS(app, origins="http://localhost:3000")

#Creating route/ branch of backend and methods that are allowed
@app.route('/submit', methods=['POST','GET','OPTIONS'])

#creating a function
def submit_user_input():
    try:
        #variable data saves request.get_json()
        data = request.get_json()
        user_input = data.get('user_input', '')

        # Process the user input or perform any desired actions
        userinput = list(user_input.values())
        print(user_input.values())
        print(len(userinput))
        if len(userinput) == 5:
            Barchart(user_input["Title0"], user_input['Xaxis0'], user_input["Xalues0"], user_input["Yaxis0"], user_input["Yalues0"])
            ScatterChart(user_input["Title0"], user_input['Xaxis0'], user_input["Xalues0"], user_input["Yaxis0"], user_input["Yalues0"])
            print(linePlot(user_input["Title0"], user_input['Xaxis0'], user_input["Xalues0"], user_input["Yaxis0"], user_input["Yalues0"]))

        elif len(userinput) == 3:
            Piechart(user_input["Title"], user_input['Names'], user_input["Values"])

        elif len(userinput) == 2:
            Histogram(user_input["Title"], user_input['Range'])

        else:print(user_input)

        response_message = f'Received user input: {user_input}'

        return jsonify({'message': response_message})

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)