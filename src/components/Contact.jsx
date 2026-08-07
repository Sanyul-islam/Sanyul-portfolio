export default function Contact() {
  return (
    <section
      id="contacts"
      className="mx-auto max-w-content px-6 py-10 md:px-10"
    >
      <p className="section-eyebrow">Contacts</p>

      <div className="mt-6 grid gap-12 md:grid-cols-2 md:items-center">
        
          <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">
            Have a project?
            <br />
            Let&apos;s talk!
          </h2>
        
        <div className="border border-accent p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                className="w-full border-b border-panelLine bg-transparent pb-3 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className="w-full border-b border-panelLine bg-transparent pb-3 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={2}
                placeholder="Message"
                className="w-full resize-none border-b border-panelLine bg-transparent pb-3 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none"
              />
            </div>
          </form>
          <a href="#" className="btn-filled mt-8 inline-block">
            Submit
          </a>
        </div>
      </div>
    </section>
  );
}
