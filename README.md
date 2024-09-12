# openai-gemini-apis
A simple but effective test of both chat models.

## OpenAI chat

First of all, you must create an account and charge a minimum amount of credit. 5 USD is the minimum in OpenAI platform.
After that, create an API Key. You'll need to configure and pass it to the Model when you instance it.

Configure a `.env` file and add the `OPEN_API_KEY` parameter.

Finally, modify the first object in the parameter typing an order behavior to OpenAI will use for the responses. And in the second object, you can change the default sentence|question for the current question you want to ask.

Add the function call at the end of the `getOpenAIText()` function to execute it and check the response in the `Terminal` window.

## Gemini chat

Repeat the steps indicated to the OpenAI creating an API Key and configuring it in the `.env` file under the `GEMINI_API_KEY` name.

Call the `getGeminiText()` function to execute the question and receive the answer.

## Recomendations

If you want to avoid the double `**` and `##` chars in some of responses, add the `.replaceAll()` method at the end of the variable where you save the response text of both Models.

```javascript
  text.replaceAll('**', '').replaceAll('##', '')
```

### Notes
*I will change the base code converting both functions with a `return` and I will create an API Restful sample to make a better project. Be patience with my shorted times.*
