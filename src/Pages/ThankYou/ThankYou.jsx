import React from "react";
import "./thankyou.css"
import {Link} from "react-router-dom"


export default function ThankYou() {
  return (
    <div>
    
      <div className="thank-you__ThankYouStyled-sc-x5emjl-0 cjOIfq">
        <div className="styles__ThankYouStyled-sc-ulokiw-0 idKGkg">
          <div className="styles__Wrapper-sc-ulokiw-1 ktPqlR">
            <h2 className="styles__ThankYouHeading-sc-ulokiw-2 khOwlY">
              Thank you for reaching out to us!
            </h2>
            <p className="styles__ThankYouPara-sc-ulokiw-3 iJimUQ">
              We’ll send you an email once we’ve evaluated your request!
            </p>
            <form id="Thank_You_Survey" data-hs-cf-bound="true">
              <div className="styles__ThankYouOptionsWrapper-sc-ulokiw-4 kSqTPV">
                <div className="styles__ThankYouOptionsTitle-sc-ulokiw-5 gseaBC">
                  How did you discover our company?
                </div>
                <div className="styles__ThankYouOptionsList-sc-ulokiw-6 epgjFe">
                  <div className="styles__ThankYouOption-sc-ulokiw-7 ejCREQ">
                    <div className="styles__ThankYouOptionRadioWrapper-sc-ulokiw-8 eEoVAL">
                      <div className="styles__ThankYouOptionRadio-sc-ulokiw-9 jXqpCf">
                        <input
                          name="Form-Source"
                          type="radio"
                          className="styles__RadioInput-sc-ulokiw-12 iWAGMk"
                          defaultValue="Search Engine (Google, Yahoo, etc )"
                        />
                      </div>
                      <div className="styles__ThankYouOptionText-sc-ulokiw-13 dkNUNG">
                        Search Engine (Google, Yahoo, etc )
                      </div>
                    </div>
                  </div>
                  <div className="styles__ThankYouOption-sc-ulokiw-7 ejCREQ">
                    <div className="styles__ThankYouOptionRadioWrapper-sc-ulokiw-8 eEoVAL">
                      <div className="styles__ThankYouOptionRadio-sc-ulokiw-9 jXqpCf">
                        <input
                          name="Form-Source"
                          type="radio"
                          className="styles__RadioInput-sc-ulokiw-12 iWAGMk"
                          defaultValue="Facebook"
                        />
                      </div>
                      <div className="styles__ThankYouOptionText-sc-ulokiw-13 dkNUNG">
                        Facebook
                      </div>
                    </div>
                  </div>
                  <div className="styles__ThankYouOption-sc-ulokiw-7 ejCREQ">
                    <div className="styles__ThankYouOptionRadioWrapper-sc-ulokiw-8 eEoVAL">
                      <div className="styles__ThankYouOptionRadio-sc-ulokiw-9 jXqpCf">
                        <input
                          name="Form-Source"
                          type="radio"
                          className="styles__RadioInput-sc-ulokiw-12 iWAGMk"
                          defaultValue="Linkedin"
                        />
                      </div>
                      <div className="styles__ThankYouOptionText-sc-ulokiw-13 dkNUNG">
                        Linkedin
                      </div>
                    </div>
                  </div>
                  <div className="styles__ThankYouOption-sc-ulokiw-7 ejCREQ">
                    <div className="styles__ThankYouOptionRadioWrapper-sc-ulokiw-8 eEoVAL">
                      <div className="styles__ThankYouOptionRadio-sc-ulokiw-9 jXqpCf">
                        <input
                          name="Form-Source"
                          type="radio"
                          className="styles__RadioInput-sc-ulokiw-12 iWAGMk"
                          defaultValue="Twitter"
                        />
                      </div>
                      <div className="styles__ThankYouOptionText-sc-ulokiw-13 dkNUNG">
                        Twitter
                      </div>
                    </div>
                  </div>
                  <div className="styles__ThankYouOption-sc-ulokiw-7 ejCREQ">
                    <div className="styles__ThankYouOptionRadioWrapper-sc-ulokiw-8 eEoVAL">
                      <div className="styles__ThankYouOptionRadio-sc-ulokiw-9 jXqpCf">
                        <input
                          name="Form-Source"
                          type="radio"
                          className="styles__RadioInput-sc-ulokiw-12 iWAGMk"
                          defaultValue="Blog or Publication"
                        />
                      </div>
                      <div className="styles__ThankYouOptionText-sc-ulokiw-13 dkNUNG">
                        Blog or Publication
                      </div>
                    </div>
                  </div>
                  <div className="styles__ThankYouOption-sc-ulokiw-7 ejCREQ">
                    <div className="styles__ThankYouOptionRadioWrapper-sc-ulokiw-8 eEoVAL">
                      <div className="styles__ThankYouOptionRadio-sc-ulokiw-9 jXqpCf">
                        <input
                          name="Form-Source"
                          type="radio"
                          className="styles__RadioInput-sc-ulokiw-12 iWAGMk"
                          defaultValue="Recommended by a Friend"
                        />
                      </div>
                      <div className="styles__ThankYouOptionText-sc-ulokiw-13 dkNUNG">
                        Recommended by a Friend
                      </div>
                    </div>
                  </div>
                  <div className="styles__ThankYouOption-sc-ulokiw-7 ejCREQ expandedOption">
                    <div className="styles__ThankYouOptionRadioWrapper-sc-ulokiw-8 eEoVAL">
                      <div className="styles__ThankYouOptionRadio-sc-ulokiw-9 jXqpCf">
                        <input
                          name="Form-Source"
                          type="radio"
                          className="styles__RadioInput-sc-ulokiw-12 iWAGMk"
                          defaultValue="Other"
                        />
                      </div>
                      <div className="styles__ThankYouOptionText-sc-ulokiw-13 dkNUNG">
                        Other
                      </div>
                    </div>
                    <div className="styles__ThankYouCollapse-sc-ulokiw-14 dYglj">
                      {" "}
                      <div className="styles__ThankYouFieldWrapper-sc-ulokiw-16 dOIBcy">
                        <input
                          name="Form-Source-Other"
                          placeholder="Type Your answer here...."
                          className="styles__ThankYouTextArea-sc-ulokiw-17 kFdpcG"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="styles__ThankYouBtnWrapper-sc-ulokiw-18 bTwSwK">
                  <Link to="/" sx={{color:'#fff'}}>
                  <button className="styles__ThankYouSubmitBtn-sc-ulokiw-19 bmnWvC" style={{color:'#ffffff'}}>

                    Submit
                    <span>
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_931_2291"
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={0}
                          width={20}
                          height={20}
                        >
                          <rect width={20} height={20} fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_931_2291)">
                          <path
                            d="M6.6901 18.3337L5.21094 16.8545L12.0651 10.0003L5.21094 3.14616L6.6901 1.66699L15.0234 10.0003L6.6901 18.3337Z"
                            fill="white"
                          />
                        </g>
                      </svg>
                    </span>
                  </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
