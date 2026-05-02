import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10 mt-20">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a>
    <a href="mailto:lokmant733@gmail.com" className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a href="https://www.facebook.com/lokman.hossen.697687"
         target="_blank" 
         className="text-3xl">
        <FaFacebook />
      </a>
      <a href="https://www.linkedin.com/in/lokman-hossen-dev/"
         target="_blank" 
         className="text-3xl">
        <FaLinkedin />
      </a>
      <a href="https://github.com/lokman1313"
         target="_blank" 
         className="text-3xl">
        <FaGithub />
      </a>
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
  );
};

export default Footer;