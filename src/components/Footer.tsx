import {
  ArrowRightIcon,
  FacebookIcon,
  HomeIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterIcon,
  YoutubeIcon
} from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Explore",
      links: [
        { name: "Popular Destinations", href: "/destinations" },
        { name: "Vacation Rentals", href: "/rentals" },
        { name: "Experiences", href: "/experiences" },
        { name: "Last Minute Deals", href: "/deals" },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Contact Us", href: "/contact" },
        { name: "Safety Information", href: "/safety" },
        { name: "Cancellation Options", href: "/cancellation" },
      ]
    },
    {
      title: "Hosting",
      links: [
        { name: "Become a Host", href: "/host" },
        { name: "Host Resources", href: "/host-resources" },
        { name: "Host Community", href: "/community" },
        { name: "Hosting Guidelines", href: "/guidelines" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Investors", href: "/investors" },
      ]
    }
  ];

  const socialLinks = [
    { icon: FacebookIcon, href: "#", label: "Facebook" },
    { icon: TwitterIcon, href: "#", label: "Twitter" },
    { icon: InstagramIcon, href: "#", label: "Instagram" },
    { icon: YoutubeIcon, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-gradient-to-br from-background via-muted/30 to-background border-t border-border/50">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-2 animate-fade-in">
              Stay Updated with RentSpace
            </h3>
            <p className="text-white/90 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Get the latest deals, travel tips, and property updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <input
                placeholder="Enter your email address"
                className="bg-white/20 rounded-md p-4 border-white/30 w-full text-white placeholder:text-white/70 backdrop-blur-sm focus:bg-white/30"
              />
              <button
                className="bg-white flex items-center px-4 rounded-md text-primary hover:bg-white/90 transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                Subscribe
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4 animate-fade-in">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                <HomeIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  RentSpace
                </h1>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Discover amazing places to stay and create unforgettable memories around the world.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                <PhoneIcon className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                <MailIcon className="w-4 h-4" />
                <span>hello@rentspace.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                <MapPinIcon className="w-4 h-4" />
                <span>123 Travel Street, Adventure City</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <div key={section.title} className="animate-fade-in" style={{ animationDelay: `${(sectionIndex + 1) * 0.1}s` }}>
              <h4 className="font-semibold text-foreground mb-4 relative">
                {section.title}
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm relative group"
                      style={{ animationDelay: `${(sectionIndex + 1) * 0.1 + linkIndex * 0.05}s` }}
                    >
                      {link.name}
                      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div className="flex items-center space-x-4 animate-fade-in">
              <span className="text-sm text-muted-foreground font-medium">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-muted/50 hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 group-hover:animate-float" />
                </a>
              ))}
            </div>

            {/* Copyright and Legal */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-4">
                <a href="/privacy" className="hover:text-primary transition-colors duration-200">Privacy Policy</a>
                <span>•</span>
                <a href="/terms" className="hover:text-primary transition-colors duration-200">Terms of Service</a>
                <span>•</span>
                <a href="/cookies" className="hover:text-primary transition-colors duration-200">Cookie Policy</a>
              </div>
              <div className="border-l border-border/50 pl-4 hidden md:block">
                <p>&copy; 2024 RentSpace. All rights reserved.</p>
              </div>
              <div className="md:hidden">
                <p>&copy; 2024 RentSpace. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;