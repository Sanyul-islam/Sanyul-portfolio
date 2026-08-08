import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-panelLine bg-panel">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
        {/* Top section */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* About */}
          <div className="text-center mx-auto">
            <Link
              href="/"
              className="font-display text-2xl font-bold header-gradient"
            >
              Sanyul<span className="text-accent">.</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-muted">
              Frontend Web Developer passionate about building modern,
              responsive, and user-friendly web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-display text-lg font-semibold header-gradient">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  href="/#home"
                  className="text-muted transition hover:text-accent"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/#about"
                  className="text-muted transition hover:text-accent"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/#projects"
                  className="text-muted transition hover:text-accent"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  href="/#skills"
                  className="text-muted transition hover:text-accent"
                >
                  Skills
                </Link>
              </li>

              <li>
                <Link
                  href="/#contact"
                  className="text-muted transition hover:text-accent"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display header-gradient text-lg font-semibold text-white">
              Let&apos;s Connect
            </h3>

            <p className="mt-5 text-sm leading-7 text-muted">
              Have a project in mind or want to work together? Feel free to
              reach out.
            </p>

            <a
              href="mailto:imsanyulislam@gmail.com"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:opacity-80"
            >
              <HiOutlineMail size={20} />
              imsanyulislam@gmail.com
            </a>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com/Sanyul-islam/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-panelLine text-muted transition hover:border-accent hover:text-accent"
              >
                <FaGithub size={19} />
              </a>

              <a
                href="https://www.linkedin.com/in/sanyul-islam/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-panelLine text-muted transition hover:border-accent hover:text-accent"
              >
                <FaLinkedin size={19} />
              </a>

              <a
                href="https://www.facebook.com/share/17dkZJSFVG/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-panelLine text-muted transition hover:border-accent hover:text-accent"
              >
                <FaFacebook size={19} />
              </a>

              <a
                href="https://x.com/Sanyulislam"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-panelLine text-muted transition hover:border-accent hover:text-accent"
              >
                <FaTwitter size={19} />
              </a>

              <a
                href="mailto:yourmail@gmail.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-panelLine text-muted transition hover:border-accent hover:text-accent"
              >
                <HiOutlineMail size={21} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 flex flex-col gap-5 border-t border-panelLine pt-6 text-sm md:flex-row md:items-center md:justify-between">
          <p className="text-muted">
            © {currentYear} Sanyul Islam. All rights reserved.
          </p>

          <p className="text-muted">
            Built with{" "}
            <span className="font-semibold header-gradient">Next.js</span> &{" "}
            <span className="font-semibold header-gradient">Tailwind CSS</span>
          </p>

          {/* Back to top */}
          <a
            href="#top"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-panelLine text-muted transition hover:border-accent hover:text-accent"
          >
            <FiArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
