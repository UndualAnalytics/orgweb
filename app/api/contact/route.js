

import { NextResponse } from 'next/server';

export async function POST(request) {
  const formData = await request.json();

  try {
 
    const backendResponse = await fetch('https://script.google.com/macros/s/AKfycbwwd0gZ-HyIMyA6NOhGpyXMJub2eCHq0i2NGzwV5OcYUKvE9ZevkKjCzFPKHFx19-MK/exec', {
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