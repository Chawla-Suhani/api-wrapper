import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
const VAPI_API_KEY = process.env.VAPI_API_KEY;
const RETELL_API_KEY = process.env.RETELL_API_KEY;
const PORT = process.env.PORT || 3000;

// Vapi Agent Creator
const createAgentVapi = async (name ,res) => {
  try {
    const response = await axios.post(
      'https://api.vapi.ai/assistant',
      {
        name,
      },
      {
        headers: {
          'Authorization': `Bearer ${VAPI_API_KEY}`,
          'Content-Type': 'application/json',
        }
      }
    );
    res.json({ success: true, provider: 'vapi', data: response.data });
  } catch (error) {
    console.error("Vapi error:", error.response?.data || error.message);
    res.status(500).json({ error: 'Error creating agent on Vapi' });
  }
};

// Retell Agent Creator
const createAgentRetell = async ( response_engine,voice_id,res) => {
  try {
    const response = await axios.post(
      'https://api.retellai.com/create-agent',
      {
        response_engine,
        voice_id,
      },
      {
        headers: {
          'Authorization': `Bearer ${RETELL_API_KEY}`,
          'Content-Type': 'application/json',
        }
      }
    );
    res.json({ success: true, provider: 'retell', data: response.data });
  } catch (error) {
    console.error("Retell error:", error.response?.data || error.message);
    res.status(500).json({ error: 'Error creating agent on Retell' });
  }
};

// Unified API endpoint
app.post('/create',  (req, res) => {
  const { provider, name , response_engine , voice_id} = req.body;
  
  if (!provider || !name ) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (provider === 'vapi') {
    return createAgentVapi(name,  res);
  } else if (provider === 'retell') {
    return createAgentRetell(response_engine,voice_id, res);
  } else {
    return res.status(400).json({ error: 'Invalid provider. Use "vapi" or "retell"' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
