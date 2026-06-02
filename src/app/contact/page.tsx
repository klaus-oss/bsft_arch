export default function ContactPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <header className="mb-20">
          <h1 className="text-xs uppercase tracking-[0.4em] text-neutral-400 mb-4">Inquiry</h1>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Get in Touch</h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <p className="text-2xl font-light leading-relaxed mb-12">
              Interested in working with us? We&apos;d love to hear about your vision.
            </p>
            
            <div className="space-y-12">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold mb-4">Studio Location</h4>
                <p className="text-neutral-600">
                  Lindenstrasse 14<br />
                  8008 Zurich<br />
                  Switzerland
                </p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold mb-4">Contact Info</h4>
                <p className="text-neutral-600">
                  hello@studioarch.com<br />
                  +41 44 123 45 67
                </p>
              </div>
            </div>
          </div>

          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold">Name</label>
                <input 
                  type="text" 
                  className="w-full border-b border-neutral-300 py-2 focus:border-black outline-none transition-colors bg-transparent" 
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold">Email</label>
                <input 
                  type="email" 
                  className="w-full border-b border-neutral-300 py-2 focus:border-black outline-none transition-colors bg-transparent" 
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold">Project Type</label>
              <select className="w-full border-b border-neutral-300 py-2 focus:border-black outline-none transition-colors bg-transparent appearance-none">
                <option>Residential</option>
                <option>Commercial</option>
                <option>Cultural</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold">Message</label>
              <textarea 
                rows={4}
                className="w-full border-b border-neutral-300 py-2 focus:border-black outline-none transition-colors bg-transparent resize-none" 
                placeholder="Tell us about your project..."
              />
            </div>
            <button className="bg-black text-white px-12 py-5 uppercase text-sm tracking-widest font-semibold hover:bg-neutral-800 transition-colors w-full md:w-auto">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
