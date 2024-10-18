import React from "react";
import { FaChrome, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Portfolio = () => {
    return (
        <div className="hero py-20">
            <div className="hero-content text-center">
                <div className="pt-10">
                    <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">Awesome Portfolio</h1>
                    <p className="py-6">
                        Smart IT Solutions harmonious design and super clean looks will make your
                        website look beautiful and elegant. It makes your creation look
                        good.
                    </p>
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                        <div className="card shadow-2xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src="/P-ticket.PNG"
                                    alt="portfolio10"
                                    className="rounded-xl"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">P-Ticket</h2>
                                <p className="text-justify">
                                    P-Ticket is a convenient and user-friendly online bus ticketing system designed to simplify the process of booking bus tickets. The platform provides real-time availability of seats, multiple payment options, and instant ticket confirmation.
                                </p>
                                <div className="card-actions grid grid-rows-2 grid-flow-col">
                                    <div className="flex justify-center gap-4">
                                        <Link to={"https://kamrulkoche.github.io/Smart-Ticketing/"} className="btn btn-outline btn-success gap-2 btn-xs sm:btn-sm md:btn-md lg:btn-md" target="_blank"
                                            rel="noopener noreferrer">
                                            <FaChrome size={"2em"}></FaChrome>
                                            Live
                                        </Link>
                                        <Link className="btn btn-outline btn-success gap-2 btn-xs sm:btn-sm md:btn-md lg:btn-md" target="_blank"
                                            rel="noopener noreferrer">
                                            <FaGithub size={"2em"}></FaGithub>
                                            Frontend
                                        </Link>
                                        <Link className="btn btn-outline btn-success gap-2 btn-xs sm:btn-sm md:btn-md lg:btn-md" target="_blank"
                                            rel="noopener noreferrer">
                                            <FaGithub size={"2em"}></FaGithub>
                                            Backend
                                        </Link>
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-xl">Tech Stack</h2>
                                        <div className="flex gap-3">
                                            <img
                                                src="https://img.icons8.com/color/50/000000/html-5--v1.png"
                                                alt="htmlicon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/50/000000/css3.png"
                                                alt="cssicon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/50/000000/react-native.png"
                                                alt="reacticon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/nolan/64/api-settings.png"
                                                alt="restapi-icon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/48/000000/express.png"
                                                alt="expressjs-icon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/48/000000/mongodb.png"
                                                alt="mongo-icon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/windows/48/000000/node-js.png"
                                                alt="js-icon"
                                                width={"60px"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card shadow-2xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://private-user-images.githubusercontent.com/85455377/373857865-c225edb1-2a9a-4d8a-af1c-04a934836a92.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjgxMTc0MjksIm5iZiI6MTcyODExNzEyOSwicGF0aCI6Ii84NTQ1NTM3Ny8zNzM4NTc4NjUtYzIyNWVkYjEtMmE5YS00ZDhhLWFmMWMtMDRhOTM0ODM2YTkyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMDUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDA1VDA4MzIwOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWE0NWQ4MDQ5YzA1NWRkNTljODZmODg2OGM3OGRkNjgwNjllZWRhMjNjMDg3NGEyYTkyYmJjZDAxYTczNTIzNjMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.b-6ldil-IzW6re2R7C1yYEmS2pet-yTmXM2fhQKK-0g"
                                    alt="portfolio1"
                                    className="rounded-xl"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Pizza Lover</h2>
                                <p className="text-justify">
                                    Pizza-Lover is an online pizza ordering platform that brings a fast and convenient way to enjoy your favorite pizzas from the comfort of your home. As a dedicated fast-food shop, Pizza-Lover offers a wide range of pizza varieties to satisfy every craving, from classic favorites like Margherita and Pepperoni to gourmet options with unique toppings.
                                </p>
                                <div className="card-actions grid grid-rows-2 grid-flow-col">
                                    <div className="flex justify-center gap-4">
                                        <Link to={"https://pizza-lover-bd.netlify.app/"} className="btn btn-outline btn-success gap-2 btn-xs sm:btn-sm md:btn-md lg:btn-md" target="_blank"
                                            rel="noopener noreferrer">
                                            <FaChrome size={"2em"}></FaChrome>
                                            Live
                                        </Link>
                                        <Link to={"https://github.com/saifur2233/ReactJS_Project_Pizza-Lover.git"} className="btn btn-outline btn-success gap-2 btn-xs sm:btn-sm md:btn-md lg:btn-md" target="_blank"
                                            rel="noopener noreferrer">
                                            <FaGithub size={"2em"}></FaGithub>
                                            Frontend
                                        </Link>
                                        <Link to={"https://github.com/saifur2233/ReactJS_Project_Pizza-Lover.git"} className="btn btn-outline btn-success gap-2 btn-xs sm:btn-sm md:btn-md lg:btn-md" target="_blank"
                                            rel="noopener noreferrer">
                                            <FaGithub size={"2em"}></FaGithub>
                                            Backend
                                        </Link>
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-xl">Tech Stack</h2>
                                        <div className="flex gap-3">
                                            <img
                                                src="https://img.icons8.com/color/50/000000/html-5--v1.png"
                                                alt="htmlicon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/50/000000/css3.png"
                                                alt="cssicon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/50/000000/react-native.png"
                                                alt="reacticon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/nolan/64/api-settings.png"
                                                alt="restapi-icon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/48/000000/express.png"
                                                alt="expressjs-icon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/48/000000/mongodb.png"
                                                alt="mongo-icon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/windows/48/000000/node-js.png"
                                                alt="js-icon"
                                                width={"60px"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card shadow-2xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://user-images.githubusercontent.com/85455377/227472250-4e50e6d1-0a6d-4936-8be0-328707f2efb5.png"
                                    alt="portfolio1"
                                    className="rounded-xl"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">MEDICARE</h2>
                                <p className="text-justify">
                                    MediCare is a MERN stack project. A user can see the doctor’s
                                    available slot time and book an appointment. Admin can add
                                    doctors to the system. Each user has a dashboard where he/she
                                    sees his booking appointment details and the doctor sees who
                                    takes appointments.
                                </p>
                                <div className="card-actions grid grid-rows-2 grid-flow-col">
                                    <div className="flex justify-center gap-4">
                                        <Link target="_blank"
                                            rel="noopener noreferrer" className="btn btn-outline btn-success gap-2 btn-xs sm:btn-sm md:btn-md lg:btn-md" to={"https://medicare-cf743.web.app/"}>
                                            <FaChrome size={"2em"}></FaChrome>
                                            Live
                                        </Link>
                                        <Link target="_blank"
                                            rel="noopener noreferrer" to={"https://github.com/saifur2233/ReactJS_TailwindCSS_Project_MEDICARE_frontend.git"} className="btn btn-outline btn-success gap-2 btn-xs sm:btn-sm md:btn-md lg:btn-md">
                                            <FaGithub size={"2em"}></FaGithub>
                                            Frontend
                                        </Link>
                                        <Link target="_blank"
                                            rel="noopener noreferrer" to={"https://github.com/saifur2233/NodeJS_Project_MEDICARE_Server.git"} className="btn btn-outline btn-success gap-2 btn-xs sm:btn-sm md:btn-md lg:btn-md">
                                            <FaGithub size={"2em"}></FaGithub>
                                            Backend
                                        </Link>
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-xl">Tech Stack</h2>
                                        <div className="flex gap-3">
                                            <img
                                                src="https://img.icons8.com/color/50/000000/html-5--v1.png"
                                                alt="htmlicon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/50/000000/css3.png"
                                                alt="cssicon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/50/000000/react-native.png"
                                                alt="reacticon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/nolan/64/api-settings.png"
                                                alt="restapi-icon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/48/000000/express.png"
                                                alt="expressjs-icon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/48/000000/mongodb.png"
                                                alt="mongo-icon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/windows/48/000000/node-js.png"
                                                alt="js-icon"
                                                width={"60px"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card shadow-2xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://user-images.githubusercontent.com/85455377/230288945-30253db6-7430-4979-b8b7-c4a5ca018502.png"
                                    alt="portfolio1"
                                    className="rounded-xl"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Auraro | Online Furniture Shop</h2>
                                <p className="text-justify">
                                    Auraro is a second hand furniture sale website. It is the
                                    biggest platform in the Bangladesh. Anyone can sell his/her
                                    used furniture here. Anyone can buyer used furniture in a low
                                    cost. A seller can advertise for his/her furniture to display
                                    in advertise page. A normal-user can see his/her wishlist
                                    product. An admin can manage the full website. An admin can
                                    delete any user from the website.
                                </p>
                                <div className="card-actions grid grid-rows-2 grid-flow-col">
                                    <div className="flex justify-center gap-4">
                                        <Link target="_blank"
                                            rel="noopener noreferrer" to={"https://auraro-ad69b.web.app/"} className="btn btn-outline btn-success gap-2 btn-xs sm:btn-sm md:btn-md lg:btn-md">
                                            <FaChrome size={"2em"}></FaChrome>
                                            Live
                                        </Link>
                                        <Link target="_blank"
                                            rel="noopener noreferrer" to={"https://github.com/saifur2233/ReactJS_TailwindCSS_Project_Auraro.git"} className="btn btn-outline btn-success gap-2 btn-xs sm:btn-sm md:btn-md lg:btn-md">
                                            <FaGithub size={"2em"}></FaGithub>
                                            Frontend
                                        </Link>
                                        <Link target="_blank"
                                            rel="noopener noreferrer" to={"https://github.com/saifur2233/NodeJS_Project_Auraro_Server.git"} className="btn btn-outline btn-success gap-2 btn-xs sm:btn-sm md:btn-md lg:btn-md">
                                            <FaGithub size={"2em"}></FaGithub>
                                            Backend
                                        </Link>
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-xl">Tech Stack</h2>
                                        <div className="flex gap-3">
                                            <img
                                                src="https://img.icons8.com/color/50/000000/html-5--v1.png"
                                                alt="htmlicon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/50/000000/css3.png"
                                                alt="cssicon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/50/000000/react-native.png"
                                                alt="reacticon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/nolan/64/api-settings.png"
                                                alt="restapi-icon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/48/000000/express.png"
                                                alt="expressjs-icon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/48/000000/mongodb.png"
                                                alt="mongo-icon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/windows/48/000000/node-js.png"
                                                alt="js-icon"
                                                width={"60px"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card shadow-2xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src="image-hub.png"
                                    alt="portfolio1"
                                    className="rounded-xl"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Image Hub | Drag and Drop Image Gallary</h2>
                                <p className="text-justify">
                                    Image Hub is an innovative and user-friendly online platform designed to cater to all your image-related needs. It provides a seamless experience for managing, organizing, and interacting with images in a gallery format. The platform features a drag-and-drop interface, allowing users to effortlessly upload images into the gallery and organize them as desired.
                                </p>
                                <div className="card-actions grid grid-rows-2 grid-flow-col">
                                    <div className="flex justify-center gap-4">
                                        <Link target="_blank"
                                            rel="noopener noreferrer" to={"https://image-hub.netlify.app/"} className="btn btn-outline btn-success gap-2 btn-xs sm:btn-sm md:btn-md lg:btn-md">
                                            <FaChrome size={"2em"}></FaChrome>
                                            Live
                                        </Link>
                                        <Link target="_blank"
                                            rel="noopener noreferrer" to={"https://github.com/saifur2233/ReactJS-Project-ImageGallery.git"} className="btn btn-outline btn-success gap-2 btn-xs sm:btn-sm md:btn-md lg:btn-md">
                                            <FaGithub size={"2em"}></FaGithub>
                                            Frontend
                                        </Link>
                                        <Link target="_blank"
                                            rel="noopener noreferrer" to={"https://github.com/saifur2233/ReactJS-Project-ImageGallery.git"} className="btn btn-outline btn-success gap-2 btn-xs sm:btn-sm md:btn-md lg:btn-md">
                                            <FaGithub size={"2em"}></FaGithub>
                                            Backend
                                        </Link>
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-xl">Tech Stack</h2>
                                        <div className="flex gap-3">
                                            <img
                                                src="https://img.icons8.com/color/50/000000/html-5--v1.png"
                                                alt="htmlicon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/50/000000/css3.png"
                                                alt="cssicon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/50/000000/react-native.png"
                                                alt="reacticon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/nolan/64/api-settings.png"
                                                alt="restapi-icon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/48/000000/express.png"
                                                alt="expressjs-icon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/windows/48/000000/node-js.png"
                                                alt="js-icon"
                                                width={"60px"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card shadow-2xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src="medi-quick.png"
                                    alt="portfolio1"
                                    className="rounded-xl"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">MediQuick | Medical Solution</h2>
                                <p className="text-justify">
                                    MediQuick is a blockchain-based system designed to address the critical issue of counterfeit drugs in the pharmaceutical industry. With the aim of ensuring patient safety and protecting public health, MediQuick offers an innovative solution that leverages blockchain technology to track and authenticate medications throughout the supply chain.
                                </p>
                                <div className="card-actions grid grid-rows-2 grid-flow-col">
                                    <div className="flex justify-center gap-4">
                                        <Link target="_blank"
                                            rel="noopener noreferrer" to={"https://medi-quick-app.netlify.app/"} className="btn btn-outline btn-success gap-2 btn-xs sm:btn-sm md:btn-md lg:btn-md">
                                            <FaChrome size={"2em"}></FaChrome>
                                            Live
                                        </Link>
                                        <Link target="_blank"
                                            rel="noopener noreferrer" to={"https://github.com/saifur2233/MediQuick.git"} className="btn btn-outline btn-success gap-2 btn-xs sm:btn-sm md:btn-md lg:btn-md">
                                            <FaGithub size={"2em"}></FaGithub>
                                            Frontend
                                        </Link>
                                        <Link target="_blank"
                                            rel="noopener noreferrer" to={"https://github.com/saifur2233/MediQuick.git"} className="btn btn-outline btn-success gap-2 btn-xs sm:btn-sm md:btn-md lg:btn-md">
                                            <FaGithub size={"2em"}></FaGithub>
                                            Backend
                                        </Link>
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-xl">Tech Stack</h2>
                                        <div className="flex gap-3">
                                            <img
                                                src="https://img.icons8.com/color/50/000000/html-5--v1.png"
                                                alt="htmlicon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/50/000000/css3.png"
                                                alt="cssicon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/50/000000/react-native.png"
                                                alt="reacticon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/nolan/64/api-settings.png"
                                                alt="restapi-icon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/48/000000/express.png"
                                                alt="expressjs-icon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/48/000000/mongodb.png"
                                                alt="mongo-icon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/windows/48/000000/node-js.png"
                                                alt="js-icon"
                                                width={"60px"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card shadow-2xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://private-user-images.githubusercontent.com/85455377/373736337-70393c16-052b-4cc6-b89f-28934e098480.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjgwNjE3MzcsIm5iZiI6MTcyODA2MTQzNywicGF0aCI6Ii84NTQ1NTM3Ny8zNzM3MzYzMzctNzAzOTNjMTYtMDUyYi00Y2M2LWI4OWYtMjg5MzRlMDk4NDgwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDA0VDE3MDM1N1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWYwNDhhNGUxOTU3MTI1MmE1MTQyOGYwMDkwNWUzMmFkZTk0MTFhZDI0YzlkM2QzODAxMTk4ODExYTI3YzQyZGEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.XdnygbilkAyDhIKHR83oxR28UJ07_zwfW5r999Cif7E"
                                    alt="portfolio1"
                                    className="rounded-xl"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Hey-Tech</h2>
                                <p className="text-justify">
                                    Hey-Tech is the most popular Laptop Brand Shop in BD. Hey-Tech Laptop Shop has the perfect device, whether you are a freelancer, officegoer, or student. Gamers love our collection of Gaming Laptops because we always bring the latest laptops in Bangladesh. We offer top-of-the-line Custom PC, Brand PC, All-in-One PC, and Portable Mini PC at Star Tech outlets, the best Desktop PC shop in Bangladesh, which are spread nationwide.
                                </p>
                                <div className="card-actions grid grid-rows-2 grid-flow-col">
                                    <div className="flex justify-center gap-4">
                                        <Link to={"https://next-js-project-hey-tech.vercel.app/"} className="btn btn-outline btn-success gap-2 btn-xs sm:btn-sm md:btn-md lg:btn-md" target="_blank"
                                            rel="noopener noreferrer">
                                            <FaChrome size={"2em"}></FaChrome>
                                            Live
                                        </Link>
                                        <Link to={"https://github.com/saifur2233/NextJS_Project_Hey-Tech.git"} className="btn btn-outline btn-success gap-2 btn-xs sm:btn-sm md:btn-md lg:btn-md" target="_blank"
                                            rel="noopener noreferrer">
                                            <FaGithub size={"2em"}></FaGithub>
                                            Frontend
                                        </Link>
                                        <Link to={"https://github.com/saifur2233/NextJS_Project_Hey-Tech.git"} className="btn btn-outline btn-success gap-2 btn-xs sm:btn-sm md:btn-md lg:btn-md" target="_blank"
                                            rel="noopener noreferrer">
                                            <FaGithub size={"2em"}></FaGithub>
                                            Backend
                                        </Link>
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-xl">Tech Stack</h2>
                                        <div className="flex gap-3">
                                            <img
                                                src="https://img.icons8.com/color/50/000000/html-5--v1.png"
                                                alt="htmlicon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/50/000000/css3.png"
                                                alt="cssicon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/50/000000/react-native.png"
                                                alt="reacticon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/nolan/64/api-settings.png"
                                                alt="restapi-icon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/48/000000/express.png"
                                                alt="expressjs-icon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/48/000000/mongodb.png"
                                                alt="mongo-icon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/windows/48/000000/node-js.png"
                                                alt="js-icon"
                                                width={"60px"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card shadow-2xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src="/gymniac.png"
                                    alt="portfolio9"
                                    className="rounded-xl"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Gymniac</h2>
                                <p className="text-justify">
                                    Gymniac is an innovative fitness platform that allows users to personalize their workout schedules and track their progress in real-time. Users can select their workout duration and exercises, while Gymniac’s intelligent system tracks their performance and calculates detailed exercise activity.
                                </p>
                                <div className="card-actions grid grid-rows-2 grid-flow-col">
                                    <div className="flex justify-center gap-4">
                                        <Link to={"https://gymniac.netlify.app/"} className="btn btn-outline btn-success gap-2 btn-xs sm:btn-sm md:btn-md lg:btn-md" target="_blank"
                                            rel="noopener noreferrer">
                                            <FaChrome size={"2em"}></FaChrome>
                                            Live
                                        </Link>
                                        <Link className="btn btn-outline btn-success gap-2 btn-xs sm:btn-sm md:btn-md lg:btn-md" target="_blank"
                                            rel="noopener noreferrer">
                                            <FaGithub size={"2em"}></FaGithub>
                                            Frontend
                                        </Link>
                                        <Link className="btn btn-outline btn-success gap-2 btn-xs sm:btn-sm md:btn-md lg:btn-md" target="_blank"
                                            rel="noopener noreferrer">
                                            <FaGithub size={"2em"}></FaGithub>
                                            Backend
                                        </Link>
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-xl">Tech Stack</h2>
                                        <div className="flex gap-3">
                                            <img
                                                src="https://img.icons8.com/color/50/000000/html-5--v1.png"
                                                alt="htmlicon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/50/000000/css3.png"
                                                alt="cssicon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/windows/48/000000/node-js.png"
                                                alt="js-icon"
                                                width={"60px"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
