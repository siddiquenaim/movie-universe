import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="">
        <footer className="bg-dark text-center text-white">
          <div className="container p-4 pb-0">
            <section className="mb-4">
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <FaFacebook></FaFacebook>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <FaTwitter></FaTwitter>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <FaGoogle></FaGoogle>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <FaInstagram></FaInstagram>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <FaLinkedin></FaLinkedin>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <FaGithub></FaGithub>
              </a>
            </section>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2029 Copyright:
            <a className="text-white ms-2" href="https://mdbootstrap.com/">
              MovieUniverse.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
