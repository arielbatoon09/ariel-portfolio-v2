import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // Get form data
    const fname = formData.get('fname') as string;
    const lname = formData.get('lname') as string;
    const email = formData.get('email') as string;
    const inquiry = formData.get('inquiry') as string;
    const message = formData.get('message') as string;

    // Construct email content
    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${fname} ${lname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Inquiry Type:</strong> ${inquiry}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    const plainContent = `
      New Contact Form Submission
      Name: ${fname} ${lname}
      Email: ${email}
      Inquiry Type: ${inquiry}
      Message: ${message}
    `;

    // Construct Maileroo URL with query parameters
    const mailerooUrl = new URL('https://smtp.maileroo.com/send');
    mailerooUrl.searchParams.append('from', 'no-reply@arielbatoon.com');
    mailerooUrl.searchParams.append('to', 'info.arielbatoon@gmail.com');
    mailerooUrl.searchParams.append('subject', `New Contact Form Submission from ${fname} ${lname}`);
    mailerooUrl.searchParams.append('html', htmlContent);
    mailerooUrl.searchParams.append('plain', plainContent);

    // Send email using Maileroo
    const response = await fetch(mailerooUrl.toString(), {
      method: 'POST',
      headers: {
        'X-API-Key': process.env.MAILERO_API_KEY || '',
        'Content-Type': 'multipart/form-data',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 