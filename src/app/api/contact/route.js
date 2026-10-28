import { Resend } from "resend";
import {  NextResponse } from "next/server";

const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[character]);

export async function POST(request) { 
  try {
    const body = await request.json();
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return NextResponse.json({ error: 'Datos inválidos' }, { status: 400 });
    }
    const { name, email, phone, company, service, message } = body;
    if ([name, email, message].some((value) => typeof value !== 'string') ||
        [phone, company, service].some((value) => value != null && typeof value !== 'string')) {
      return NextResponse.json({ error: 'Datos inválidos' }, { status: 400 });
    }

    // Validate required fields
    if (!name || !email || !message ) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Initialize at request time so missing runtime configuration cannot break builds.
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'El servicio de contacto no está disponible temporalmente' },
        { status: 503 }
      );
    }
    const resend = new Resend(apiKey);
    const { data, error: sendError } = await resend.emails.send({
      from: 'Drunic <onboarding@resend.dev>',
      to: ['contact.drunic@gmail.com'],
      subject: `🚀 Nuevo proyecto - ${name}`,
      html: `
      <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #ef4444, #dc2626); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #ef4444; }
            .field strong { color: #ef4444; }
            .message-box { background: white; padding: 20px; border-radius: 8px; border: 2px solid #e5e7eb; margin-top: 20px; }
            .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚀 Nuevo mensaje desde Drunic.com</h1>
              <p>¡Tienes una nueva oportunidad de proyecto!</p>
            </div>
            
            <div class="content">
              <div class="field">
                <strong>👤 Cliente:</strong> ${escapeHtml(name)}
              </div>
              
              <div class="field">
                <strong>📧 Email:</strong> 
                <a href="mailto:${escapeHtml(email)}" style="color: #ef4444;">${escapeHtml(email)}</a>
              </div>
              
              ${phone ? `
                <div class="field">
                  <strong>📱 Teléfono:</strong> 
                  <a href="tel:${escapeHtml(phone)}" style="color: #ef4444;">${escapeHtml(phone)}</a>
                </div>
              ` : ''}
              
              ${company ? `
                <div class="field">
                  <strong>🏢 Empresa:</strong> ${escapeHtml(company)}
                </div>
              ` : ''}
              
              ${service ? `
                <div class="field">
                  <strong>🛠️ Servicio solicitado:</strong> ${escapeHtml(service)}
                </div>
              ` : ''}
              
              <div class="message-box">
                <strong style="color: #ef4444;">💬 Mensaje:</strong>
                <p style="margin-top: 10px; white-space: pre-line;">${escapeHtml(message)}</p>
              </div>
              
              <div class="footer">
                <p>Enviado desde <strong>drunic.com</strong> • ${new Date().toLocaleString('es-ES')}</p>
                <p>Responde rápido para no perder esta oportunidad 🚀</p>
              </div>
            </div>
          </div>
        </body>
        </html> `,
      // Confirmation email for the customer (optional)
      replyTo: email,
    });

    if (sendError) {
      console.error('Error enviando email:', sendError.name);
      return NextResponse.json(
        { error: 'No se pudo enviar el mensaje. Inténtalo más tarde' },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Email enviado exitosamente',
      id: data.id
    });

  } catch (error) {
    console.error('❌ Error enviando email:', error);

    return NextResponse.json(
      {
        error: 'Error interno del servidor'
      },
      {status: 500}
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Método no permitido' },
    { status: 405 }
  )
}
