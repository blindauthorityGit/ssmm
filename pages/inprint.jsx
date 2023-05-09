import React from "react";

import { BiArrowBack } from "react-icons/bi";

const Impressum = () => {
    return (
        <div className="impressum mb-16 relative font-block break-words">
            <div className="wrapper container max-w-2xl m-auto text-left pt-16 px-8 ">
                <a className="text-3xl text-[#fff]" href="../">
                    <BiArrowBack></BiArrowBack>
                </a>
                <div className="text mt-16 text-[#fff]">
                    <h2>Information pursuant to Sect. 5 German Telemedia Act (TMG)</h2>
                    <p className="mt-8">
                        Sabocon GmbH
                        <br />
                        Alte Bogengasse 25
                        <br />
                        63303 Dreieich
                    </p>

                    <p className="mt-8">
                        Commercial Register: Hrb 3488
                        <br />
                        Registration court: Handelsgericht Offenbach
                    </p>

                    <p className="mt-8">
                        <strong>Represented by:</strong>
                        <br />
                        Marc Werner
                    </p>

                    <h2>Contact</h2>
                    <p>
                        Phone: 0049-6103-9849-37
                        <br />
                        E-mail: contact@sabocon.com
                    </p>

                    <h2 className="mt-8">VAT ID</h2>
                    <p>
                        Sales tax identification number according to Sect. 27 a of the Sales Tax Law:
                        <br />
                        204691339
                    </p>

                    <h2 className="mt-8">EU dispute resolution</h2>
                    <p>
                        The European Commission provides a platform for online dispute resolution (ODR):{" "}
                        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
                            https://ec.europa.eu/consumers/odr/
                        </a>
                        .<br /> Our e-mail address can be found above in the site notice.
                    </p>

                    <h2>Dispute resolution proceedings in front of a consumer arbitration board</h2>
                    <p>
                        We are not willing or obliged to participate in dispute resolution proceedings in front of a
                        consumer arbitration board.
                    </p>
                </div>
            </div>
            <div className="h-36 sm:h-0"></div>
        </div>
    );
};

export default Impressum;
