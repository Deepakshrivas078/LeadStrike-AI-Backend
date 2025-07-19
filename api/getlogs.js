// api/getLogs.js

import admin from 'firebase-admin';
import serviceAccount from '../../firebase-admin-config.json'; // yeh file tujhe banana padega

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://<leadstrike-auth>.firebaseio.com' // isme apna firebase project url daal
  });
}

const db = admin.firestore(); // Firestore use kar rahe hain

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Only GET requests allowed' });
  }

  try {
    const logsSnapshot = await db.collection('logs').orderBy('timestamp', 'desc').limit(100).get();
    const logs = [];

    logsSnapshot.forEach(doc => {
      logs.push({ id: doc.id, ...doc.data() });
    });

    res.status(200).json({ success: true, logs });
  } catch (error) {
    console.error("Error fetching logs:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
