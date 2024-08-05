import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-10">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-6 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Stay fit and healthy with our GYM application providing personalized
            workouts and expert guidance.
          </p>
          <p>© Evogym</p>
        </div>
        <div className="mt-10 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Explore our workout programs and classes</p>
          <p className="my-5">Discover nutrition tips and healthy recipes</p>
          <p>Join our community and stay motivated</p>
        </div>
        <div className="mt-10 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            Reach out to us for any inquiries or assistance
          </p>
          <p>Call us at (911) 459-44-03 for immediate support</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
