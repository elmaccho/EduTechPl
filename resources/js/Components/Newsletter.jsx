import react from "react";
import '/resources/css/newsletter.css'

import newsletterimage from '/public/img/newsletter/mascot - newsletter.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import { useTranslation } from "react-i18next";

export default function Newsletter(){
    const { t } = useTranslation();

    return(
        <div className="newsletter-container mb-5">
            <div className="newsletter-box">
                <div className="newsletter-form-wrapper">
                    <div className="newsletter-text">
                        <p className="text-light h3 m-0"><b>{t('newsletter.promo')}</b></p>
                        <p className="text-light h4">{t('newsletter.signup')}</p>
                    </div>
                    <div className="newsletter-form">
                        <form>
                            <input className="newsletter-input" type="email" name="" id="" placeholder={t('newsletter.email_prompt')}/>
                            <button type="submit" className="newsletter-submit-button">
                                <FontAwesomeIcon icon={faPaperPlane}/>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="newsletter-image">
                    <img src={newsletterimage} alt="" />
                </div>
            </div>
        </div>
    )
}