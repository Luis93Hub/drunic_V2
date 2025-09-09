"use client";
import { useState } from "react";
import { CheckCircle, XCircle, Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    setErrorMessage('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('✅ Email enviado exitosamente:', data);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });

        // Auto-clear success message after 10 seconds
        setTimeout(() => {
          setSubmitStatus('');
        }, 10000);
      }else {
        console.error('❌ Error del servidor:', data);
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Error desconocido');
      }
    } catch (error) {
      console.error('❌ Error de conexión:',error);
      setSubmitStatus('error');
      setErrorMessage('Error de conexión. Verifica tu internet e intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
      // setTimeout(() => setSubmitStatus(''), 5000);  
    }
  };

  const services = [
    'Desarrollo Web',
    'Aplicaciones Móviles', 
    'E-commerce',
    'Software a Medida',
    'Automatización',
    'Consultoría Digital',
    'Otro'
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Row 1 */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white text-sm font-medium mb-3">
            Nombre completo *
          </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            placeholder="Tu nombre"
            required
            disabled={isSubmitting}
            className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
          />
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-3">
            Email *
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            placeholder="tu@email.com"
            required
            disabled={isSubmitting}
            className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white text-sm font-medium mb-3">
            Teléfono
          </label>
          <input
            type="tel"
            name="phone"
            onChange={handleChange}
            value={formData.phone}
            placeholder="+505 0000 0000"
            disabled={isSubmitting}
            className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
          />
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-3">
            Empresa
          </label>
          <input
            type="text"
            name="company"
            onChange={handleChange}
            value={formData.company}
            placeholder="Nombre de tu empresa"
            disabled={isSubmitting}
            className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
          />
        </div>
      </div>

      {/* Service Select */}
      <div>
        <label className="block text-white text-sm font-medium mb-3">
          Servicio de interés
        </label>
        <select
          name="service"
          onChange={handleChange}
          value={formData.service}
          disabled={isSubmitting}
          className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
        >
          <option value="" className="bg-gray-900">Selecciona un servicio</option>
          {services.map((service) => (
            <option key={service} value={service} className="bg-gray-900">
              {service}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-white text-sm font-medium mb-3">
          Mensaje *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Cuéntanos sobre tu proyecto, objetivos, timeline y cualquier detalle relevante..."
          required
          rows={6}
          disabled={isSubmitting}
          className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-5 px-8 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl ${
          isSubmitting 
            ? 'bg-gray-600 cursor-not-allowed' 
            : 'bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 shadow-lg'
        } text-white`}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center space-x-3">
            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            <span>Enviando mensaje...</span>
          </div>
        ) : (
          <div className="flex items-center justify-center space-x-2">
            <span>Enviar mensaje</span>
            <Send className="w-5 h-5" />
          </div>
        )}
      </button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="bg-green-500/20 border border-green-400/50 text-green-100 px-6 py-4 rounded-xl text-center animate-fadeIn">
          <div className="flex items-center justify-center space-x-2">
            <CheckCircle className='w-6 h-6 text-green-400' />
            <span className="font-semibold">¡Mensaje enviado con éxito!</span>
          </div>
          <p className="mt-2 text-sm">Te contactaremos dentro de las próximas 24 horas.</p>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="bg-red-500/20 border border-red-400/50 text-red-100 px-6 py-4 rounded-xl text-center animate-fadeIn">
          <div className="flex items-center justify-center space-x-2">
            <XCircle className='w-6 h-6 text-green-400' />
            <span className="font-semibold">Error al enviar</span>
          </div>
          <p className="mt-2 text-sm">{errorMessage ||'Por favor, intenta de nuevo o contáctanos directamente.'}</p>
        </div>
      )}
    </form>
  );
}
