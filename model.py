from flask import Flask, request, jsonify
import os
from transformers import BertTokenizerFast, AutoModelForTokenClassification, pipeline

tokenizer = BertTokenizerFast.from_pretrained("bert-base-uncased")
model_fine_tuned = AutoModelForTokenClassification.from_pretrained("ner_model")
nlp = pipeline("ner", model=model_fine_tuned, tokenizer=tokenizer)

app = Flask(__name__)

@app.route('/api/ner', methods=['POST'])
async def process_text():
    data = request.get_json()
    text = data['text']
    results = nlp(text)
    for item in results:
        del item["score"]
    return jsonify(results)

def main():
    port = int(os.environ.get('MODEL_PORT', 5000))
    app.run(port=port)

if __name__ == '__main__':
    main()