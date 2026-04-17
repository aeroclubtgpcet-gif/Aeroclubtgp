import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have questions about joining our club or collaborating on projects? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            
            <div className="relative backdrop-blur-sm bg-[#0f172a]/60 border border-blue-500/30 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-[#0a0e1a]/50 border-blue-500/30 focus:border-cyan-400 text-white placeholder:text-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-[#0a0e1a]/50 border-blue-500/30 focus:border-cyan-400 text-white placeholder:text-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm text-gray-400 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Membership Inquiry"
                    required
                    className="bg-[#0a0e1a]/50 border-blue-500/30 focus:border-cyan-400 text-white placeholder:text-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    required
                    className="bg-[#0a0e1a]/50 border-blue-500/30 focus:border-cyan-400 text-white placeholder:text-gray-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/20"
                  size="lg"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              <ContactInfoCard
                icon={Mail}
                title="Email Us"
                content="aeroclub.tgpcet@gmail.com"
                description="We'll respond within 24 hours"
              />
              <ContactInfoCard
                icon={Phone}
                title="Call Us"
                content="9325849003 / 7249691765"
                description="Mon-Fri, 9AM-6PM"
              />
              <ContactInfoCard
                icon={MapPin}
                title="Visit Us"
                content="Aeronautical Department"
                description="Tulsiramji Gaikwad Patil College of Engineering and Technology Campus"
              />
            </div>

            {/* Social Media */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              
              <div className="relative backdrop-blur-sm bg-[#0f172a]/60 border border-blue-500/30 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">Connect With Us</h3>
                <p className="text-gray-400 mb-6">Follow us on social media for updates and behind-the-scenes content</p>
                
                <div className="flex gap-4">
                  <SocialButton 
                    icon={Instagram} 
                    label="Instagram" 
                    href="https://www.instagram.com/aeroclub_tgp/" 
                  />
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              
              <div className="relative backdrop-blur-sm bg-[#0f172a]/60 border border-blue-500/30 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-400">
                  <div className="flex justify-between">
                    <span>Monday - Thursday</span>
                    <span className="text-cyan-400">3:00 PM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday</span>
                    <span className="text-cyan-400">2:00 PM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-cyan-400">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ContactInfoCard = ({ icon: Icon, title, content, description }: any) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
    
    <div className="relative backdrop-blur-sm bg-[#0f172a]/40 border border-blue-500/30 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 flex items-start gap-4">
      <div className="p-3 bg-blue-500/10 rounded-lg">
        <Icon className="h-6 w-6 text-cyan-400" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        <p className="text-cyan-400 mb-1">{content}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  </div>
);

const SocialButton = ({ icon: Icon, label, href }: any) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 hover:border-cyan-400/50 rounded-lg transition-all duration-300 group inline-flex items-center justify-center"
  >
    <Icon className="h-5 w-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
    <span className="sr-only">{label}</span>
  </a>
);