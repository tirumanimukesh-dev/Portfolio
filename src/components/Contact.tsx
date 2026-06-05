import { useState } from "react";
import { Mail, Github, Linkedin, Send, Shield, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/useAnimations";

interface ContactErrorDetail {
  field: string;
  message: string;
}

interface ContactApiErrorResponse {
  error?: string;
  details?: ContactErrorDetail[];
}

const Contact = () => {
  const { toast } = useToast();
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();
  const { ref: formRef, isRevealed: formRevealed } = useScrollReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = (await response.json()) as ContactApiErrorResponse;

      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "Thank you for reaching out. I'll respond as soon as possible.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const validationMessage =
          Array.isArray(data.details) && data.details.length > 0
            ? data.details[0].message
            : undefined;

        toast({
          title: "Error",
          description: validationMessage || data.error || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: Phone,
      label: "Phone",
      href: "tel:+917386069829",
      value: "+91 7386069829",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:tirumanimukesh@gmail.com",
      value: "tirumanimukesh@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/tirumanimukesh-dev",
      value: "github.com/tirumanimukesh-dev",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mukesh-tirumani/",
      value: "www.linkedin.com/in/mukesh-tirumani/",
    },
    {
      icon: Globe,
      label: "Portfolio",
      href: "https://portfolio-lac-six-23.vercel.app/",
      value: "portfolio-lac-six-23.vercel.app",
    },
  ];

  return (
    <section id="contact" className="py-28 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-700 ${
              headerRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle mx-auto mt-6">
              Interested in discussing full-stack development, software engineering, modern web technologies, or collaboration opportunities.
            </p>
          </div>

          <div
            ref={formRef}
            className={`grid lg:grid-cols-2 gap-12 transition-all duration-700 ${
              formRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Contact Form */}
            <div className="cyber-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-xl">
                  <Send className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 text-muted-foreground"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      minLength={2}
                      maxLength={100}
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="bg-secondary/30 border-border focus:border-primary rounded-xl transition-all duration-300 focus:shadow-lg focus:shadow-primary/5"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-muted-foreground"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="bg-secondary/30 border-border focus:border-primary rounded-xl transition-all duration-300 focus:shadow-lg focus:shadow-primary/5"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2 text-muted-foreground"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    minLength={3}
                    maxLength={200}
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="bg-secondary/30 border-border focus:border-primary rounded-xl transition-all duration-300 focus:shadow-lg focus:shadow-primary/5"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-muted-foreground"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    minLength={10}
                    maxLength={5000}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message..."
                    className="bg-secondary/30 border-border focus:border-primary resize-none rounded-xl transition-all duration-300 focus:shadow-lg focus:shadow-primary/5"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 magnetic-btn rounded-xl shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 h-11"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Info Card */}
              <div className="cyber-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-xl">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Connect With Me</h3>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Actively seeking internship opportunities in Full Stack Development. 
                  Open to discussing software engineering, modern web technologies, 
                  project collaborations, and innovative development opportunities. 
                  I aim to respond within 24–48 hours.
                </p>

                <div className="space-y-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/50 transition-all duration-300 group hover:bg-secondary/50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5"
                    >
                      <div className="p-2 bg-primary/10 rounded-xl transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110">
                        <link.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium group-hover:text-primary transition-colors duration-300">
                          {link.label}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {link.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
