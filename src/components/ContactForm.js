"use client";
import { useState, useId } from "react";
import { CheckCircle, XCircle, Send } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations('contact');
  const formId = useId();

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
    t('form.services.service1'),
    t('form.services.service2'),
    t('form.services.service3'),
    t('form.services.service4'),
    t('form.services.service5'),
    t('form.services.service6'),
    t('form.services.service7'),
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Row 1 */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor={`${formId}-name`} className="block text-zinc-300 text-sm font-medium mb-2">
            {t('form.name')} *
          </label>
          <input
            type="text"
            id={`${formId}-name`}
            name="name"
            autoComplete="name"
            onChange={handleChange}
            value={formData.name}
            placeholder={t('form.namePlaceholder')}
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-white/[0.03] border border-white/15 rounded-md text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:border-transparent transition-colors"
          />
        </div>

        <div>
          <label htmlFor={`${formId}-email`} className="block text-zinc-300 text-sm font-medium mb-2">
            {t('form.email')} *
          </label>
          <input
            type="email"
            id={`${formId}-email`}
            name="email"
            autoComplete="email"
            onChange={handleChange}
            value={formData.email}
            placeholder={t('form.emailPlaceholder')}
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-white/[0.03] border border-white/15 rounded-md text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:border-transparent transition-colors"
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor={`${formId}-phone`} className="block text-zinc-300 text-sm font-medium mb-2">
            {t('form.phone')}
          </label>
          <input
            type="tel"
            id={`${formId}-phone`}
            name="phone"
            autoComplete="tel"
            onChange={handleChange}
            value={formData.phone}
            placeholder={t('form.phonePlaceholder')}
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-white/[0.03] border border-white/15 rounded-md text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:border-transparent transition-colors"
          />
        </div>

        <div>
          <label htmlFor={`${formId}-company`} className="block text-zinc-300 text-sm font-medium mb-2">
            {t('form.company')}
          </label>
          <input
            type="text"
            id={`${formId}-company`}
            name="company"
            autoComplete="organization"
            onChange={handleChange}
            value={formData.company}
            placeholder={t('form.companyPlaceholder')}
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-white/[0.03] border border-white/15 rounded-md text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:border-transparent transition-colors"
          />
        </div>
      </div>

      {/* Service Select */}
      <div>
        <label htmlFor={`${formId}-service`} className="block text-zinc-300 text-sm font-medium mb-2">
          {t('form.service')}
        </label>
        <select
          id={`${formId}-service`}
          name="service"
          onChange={handleChange}
          value={formData.service}
          disabled={isSubmitting}
          className="w-full px-4 py-3 bg-[#202126] border border-white/15 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-zinc-400 cursor-pointer"
        >
          <option value="" className="bg-gray-900">{t('form.servicePlaceholder')}</option>
          {services.map((service) => (
            <option key={service} value={service} className="bg-gray-900">
              {service}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor={`${formId}-message`} className="block text-zinc-300 text-sm font-medium mb-2">
          {t('form.message')} *
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={t('form.messagePlaceholder')}
          required
          rows={5}
          disabled={isSubmitting}
          className="w-full px-4 py-3 bg-white/[0.03] border border-white/15 rounded-md text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:border-transparent transition-colors resize-y"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-zinc-100 px-6 py-3.5 text-sm font-semibold text-zinc-900 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:cursor-wait disabled:opacity-50"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center space-x-3">
            <div className="w-6 h-6 border-2 border-zinc-400 border-t-zinc-900 rounded-full animate-spin"></div>
            <span>{t('form.submitting')}</span>
          </div>
        ) : (
          <div className="flex items-center justify-center space-x-2">
            <span>{t('form.submit')}</span>
            <Send className="w-5 h-5" />
          </div>
        )}
      </button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div role="status" className="bg-green-500/20 border border-green-400/50 text-green-100 px-6 py-4 rounded-xl text-center ">
          <div className="flex items-center justify-center space-x-2">
            <CheckCircle className='w-6 h-6 text-green-400' />
            <span className="font-semibold">{t("form.success.title")}</span>
          </div>
          <p className="mt-2 text-sm">{t("form.success.description")}</p>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div role="alert" className="bg-red-500/20 border border-red-400/50 text-red-100 px-6 py-4 rounded-xl text-center ">
          <div className="flex items-center justify-center space-x-2">
            <XCircle className='w-6 h-6 text-green-400' />
            <span className="font-semibold">{t('form.error.title')}</span>
          </div>
          <p className="mt-2 text-sm">{errorMessage ||'Por favor, intenta de nuevo o contáctanos directamente.'}</p>
        </div>
      )}
    </form>
  );
}
