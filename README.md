**INSTALLATION**
1.Clone the repo
git clone https://github.com/Chawla-Suhani/api-wrapper.git

2.Navigate into the project directory

3.Install dependencies:
npm install

4.Create a .env file and add your API keys for both platforms:
VAPI_API_KEY=your_vapi_api_key_here
RETELL_API_KEY=your_retell_api_key_here

5.start the server
nodemon index.js

=>You can make a POST request to the /create endpoint to create an agent using your API. The API allows you to specify the provider (either vapi or retell), and additional necessary data for agent creation.
![Screenshot 2025-04-25 032043](https://github.com/user-attachments/assets/6a18c796-c783-4635-82b7-8052a3c0546f)

=>vapi Dashboard . Agent created successfully
![Screenshot 2025-04-25 032037](https://github.com/user-attachments/assets/6fabfe35-8276-4a64-b4fd-6cd8636049ef)

However, when I attempted to create a Retell agent where retell llm response agent id is required but while generating that id I encountered a 500 - Internal Server Error. This error seems to be server-related, as I have verified that the request payload and headers are correct based on the API documentation
![Screenshot 2025-04-25 041633](https://github.com/user-attachments/assets/754517c9-3a04-4c60-b612-ad1b103063fc)

=>Server error while generating id of the Retell LLM Response Engine.
![Screenshot 2025-04-25 035905](https://github.com/user-attachments/assets/610b47ec-597e-49d4-8c6e-65e4f53227b3)

**HITTING REQUEST ON POSTMAN AT THE API WHICH I CREATED**

![Screenshot 2025-04-25 111307](https://github.com/user-attachments/assets/c2114c39-5bf9-43b5-853d-302c09c2bf24)

**RETELL API DASHBOARD**

![Screenshot 2025-04-25 111236](https://github.com/user-attachments/assets/d7f5db10-cbad-474a-b57e-90be1f4f6665)
