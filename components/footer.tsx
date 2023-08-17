import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mb-[65px] md:mb-0">
      <div className="container px-4 md:px-8 py-16 bg-green">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-white ">
            <h2 className="text-xl font-bold mb-5">Contact Us</h2>
            <p className="text-base">Ph: 9746978740</p>

            <p className="text-base mt-3">
              Nehru Rd, Hanuman Nagar,
              <br /> Shilpa Hills, Hyderabad, <br />
              Telangana 500084.
            </p>

            <div className="mt-5 flex items-center gap-6">
              <Link href="https://facebook.com/" target="_blank">
                <img src="/assets/social/fb.png" alt="social-f" />
              </Link>
              <Link href="https://instragram.com/" target="_blank">
                <img src="/assets/social/insta.png" alt="social-insta" />
              </Link>
            </div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
              width="300"
              height="171"
              style={{ border: 0 }}
              aria-hidden="false"
            ></iframe>
            {/* <iframe
              width="600"
              height="450"
              style={{border:0}}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=API_KEY
    &q=Space+Needle,Seattle+WA"
            ></iframe> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
