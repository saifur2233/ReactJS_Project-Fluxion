import React from "react";

const FaqSection = () => {
    return (
        <div className="hero py-12">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src="https://i.ibb.co/59qfG8f/faq-illustration.png"
                    alt="faq-illustration"
                />
                <div>
                    <p className="text-primary text-xl font-bold">FAQ</p>
                    <h1 className="text-5xl font-bold pb-6">
                        Frequently Asked Questions
                    </h1>

                    <div
                        tabIndex={0}
                        className="my-3 collapse collapse-plus border border-primary bg-base-100 rounded-box"
                    >
                        <div className="collapse-title text-xl font-medium text-primary">
                            What kind of web development services do you offer?
                        </div>
                        <div className="collapse-content">
                            <p className="text-success">
                                The web development services offered by a company may vary, but
                                generally include website design, development, and maintenance.
                            </p>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="my-3 collapse collapse-plus border border-primary bg-base-100 rounded-box"
                    >
                        <div className="collapse-title text-xl font-medium text-primary">
                            How long does it take to complete a web development project?
                        </div>
                        <div className="collapse-content">
                            <p className="text-success">
                                The time it takes to complete a web development project depends
                                on the scope and complexity of the project.
                            </p>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="my-3 collapse collapse-plus border border-primary bg-base-100 rounded-box"
                    >
                        <div className="collapse-title text-xl font-medium text-primary">
                            How do you ensure that the website you create is secure?
                        </div>
                        <div className="collapse-content">
                            <p className="text-success">
                                To ensure website security, a company may implement various
                                measures such as regular updates, firewalls, and secure server
                                hosting.
                            </p>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="my-3 collapse collapse-plus border border-primary bg-base-100 rounded-box"
                    >
                        <div className="collapse-title text-xl font-medium text-primary">
                            What kind of IT consulting services do you offer?
                        </div>
                        <div className="collapse-content">
                            <p className="text-success">
                                IT consulting services may include technology strategy, project
                                management, infrastructure planning, and IT security solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;
