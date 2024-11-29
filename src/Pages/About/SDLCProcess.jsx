import React from 'react'

const SDLCProcess = () => {
    return (
        <div className="hero">
            <div className="hero-content text-center">
                <div className="pt-10">
                    <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">Software Development Life Cycle</h1>
                    <p className="py-6">
                        With Smart IT Solutions, you can streamline every phase of the Software Development Lifecycle (SDLC). From planning and development to testing and deployment, we ensure your software projects are delivered efficiently and aligned with your business goals.
                    </p>
                    <ul className="timeline timeline-vertical rounded-lg shadow-2xl py-5">
                        <li>
                            <div className="timeline-start timeline-box shadow-xl border border-t-4 rounded-b-lg border-primary">
                                <div className="card bg-base-100 w-96 ">
                                    <div className="card-body">
                                        <div className="card-title"><h2 >Stage-1: Planning and Requirement Analysis</h2></div>
                                        <p className='text-justify'>Planning is a crucial step in everything, just as in software development. In this same stage, requirement analysis is also performed by the developers of the organization. The information from this analysis forms the building blocks of a basic project.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="text-primary h-8 w-8">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <hr className="bg-success" />
                        </li>
                        <li>
                            <hr className="bg-success" />
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="text-success h-8 w-8">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-end timeline-box shadow-xl border border-t-4 rounded-b-lg border-success">
                                <div className="card bg-base-100 w-96 ">
                                    <div className="card-body">
                                        <div className="card-title"><h2 >Stage-2: Defining Requirements</h2></div>
                                        <p className='text-justify'>In this stage, all the requirements for the target software are specified. These requirements get approval from customers, market analysts, and stakeholders.
                                            <br />  This is fulfilled by utilizing SRS (Software Requirement Specification). This is a sort of document that specifies all those things that need to be defined and created during the entire project cycle. </p>
                                    </div>
                                </div>
                            </div>
                            <hr className="bg-info" />
                        </li>
                        <li>
                            <hr className="bg-info" />
                            <div className="timeline-start timeline-box shadow-xl border border-t-4 rounded-b-lg border-info">
                                <div className="card bg-base-100 w-96 ">
                                    <div className="card-body">
                                        <div className="card-title">Stage-3: Designing Architecture</div>
                                        <p className='text-justify'>SRS is a reference for software designers to come up with the best architecture for the software. Hence, with the requirements defined in SRS, multiple designs for the product architecture are present in the Design Document Specification (DDS).
                                            <br />
                                            This DDS is assessed by market analysts and stakeholders. After evaluating all the possible factors, the most practical and logical design is chosen for development.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="text-info h-8 w-8">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <hr className="bg-warning" />
                        </li>
                        <li>
                            <hr className="bg-warning" />
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="text-warning h-8 w-8">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-end timeline-box shadow-xl border border-t-4 rounded-b-lg border-warning">
                                <div className="card bg-base-100 w-96 ">
                                    <div className="card-body">
                                        <div className="card-title">Stage-4: Developing Product</div>
                                        <p className='text-justify'>At this stage, the fundamental development of the product starts. For this, developers use a specific programming code as per the design in the DDS. Hence, it is important for the coders to follow the protocols set by the association.</p>
                                    </div>
                                </div>
                            </div>
                            <hr className="bg-error" />
                        </li>
                        <li>
                            <hr className="bg-error" />
                            <div className="timeline-start timeline-box shadow-xl border border-t-4 rounded-b-lg border-error">
                                <div className="card bg-base-100 w-96 ">
                                    <div className="card-body">
                                        <div className="card-title">Stage-5: Product Testing and Integration</div>
                                        <p className='text-justify'>After the development of the product, testing of the software is necessary to ensure its smooth execution. Although, minimal testing is conducted at every stage of SDLC. Therefore, at this stage, all the probable flaws are tracked, fixed, and retested. This ensures that the product confronts the quality requirements of SRS. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="text-error h-8 w-8">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <hr className="bg-accent" />
                        </li>
                        <li>
                            <hr className="bg-accent" />
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="text-accent h-8 w-8">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-end timeline-box shadow-xl border border-t-4 rounded-b-lg border-accent">
                                <div className="card bg-base-100 w-96 ">
                                    <div className="card-body">
                                        <div className="card-title"><h2 >Stage-6: Deployment and Maintenance of Products</h2></div>
                                        <p className='text-justify'>After detailed testing, the conclusive product is released in phases as per the organization’s strategy. Then it is tested in a real industrial environment. It is important to ensure its smooth performance. If it performs well, the organization sends out the product as a whole. After retrieving beneficial feedback, the company releases it as it is or with auxiliary improvements to make it further helpful for the customers.  </p>
                                    </div>
                                </div>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SDLCProcess