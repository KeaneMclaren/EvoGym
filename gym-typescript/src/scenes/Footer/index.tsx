import Logo from "@/assets/Logo.png"


const Footer = () => {
  return <footer className="bg-red-200 py-16">
    <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
            <img alt="logo" src={Logo} />
            <p className="my-5">
                Dedicated to helping you reach your fitness goals with expert guidance, state-of-the-art facilities, and a supportive community.
            </p>
            <p>
                © {new Date().getFullYear()} EvoGym. All rights reserved.
            </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Contact Us</h4>
            <p className="my-5"></p>
            <p>(+62)822-1234-5678</p>
        </div>
    </div>
  </footer>
}

export default Footer