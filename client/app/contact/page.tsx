'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) setSuccess(true);
  };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      {success ? (
        <p className="text-green-600">Thank you! Message sent successfully.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} className="input" required />
          <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} className="input" required />
          <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} className="input h-32" required />
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      )}
    </div>
  );
}
