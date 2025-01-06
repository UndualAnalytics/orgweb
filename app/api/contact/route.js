

import { NextResponse } from 'next/server';

export async function POST(request) {
  const formData = await request.json();

  try {
 
    const backendResponse = await fetch('https://script.google.com/macros/s/AKfycbyscv_kWQ_bSiQsSr1hbFz9wL9bG6JCh7kGEKF8-XLdhEWNsh27BnpkD50r9DzjIhNNdA/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!backendResponse.ok) {
      throw new Error('Failed to submit form');
    }

    const result = await backendResponse.json();

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Form submission failed' }, { status: 500 });
  }
}