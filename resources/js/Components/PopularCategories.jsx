import React from "react";

import '/resources/css/popularcategories.css';

import math from "/public/img/popular categories/math.png";
import chemistry from "/public/img/popular categories/chemistry.png";
import design from "/public/img/popular categories/design.png";
import biology from "/public/img/popular categories/biology.png";
import it from "/public/img/popular categories/it.png";

import { Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export default function PopularCategories() {
    const { t } = useTranslation();
    
    return (
        <div className="popular-categories-container mb-5">
            <div className="row m-0 text-center mb-3">
                <h2 className="text-light h2">{t('titles.popular_categories')}</h2>
            </div>
            <div className="categories-wrapper">
                <div className="card-etp">
                    <Link>
                        <div className="card-img">
                            <img src={math} alt="" />
                        </div>
                        <div className="card-text">Matematyka</div>
                    </Link>
                </div>
                <div className="card-etp">
                    <Link>
                        <div className="card-img">
                            <img src={chemistry} alt="" />
                        </div>
                        <div className="card-text">Chemia</div>
                    </Link>
                </div>
                <div className="card-etp">
                    <Link>
                        <div className="card-img">
                            <img src={it} alt="" />
                        </div>
                        <div className="card-text">Informatyka</div>
                    </Link>
                </div>
                <div className="card-etp">
                    <Link>
                        <div className="card-img">
                            <img src={design} alt="" />
                        </div>
                        <div className="card-text">Projektowanie</div>
                    </Link>
                </div>
                <div className="card-etp">
                    <Link>
                        <div className="card-img">
                            <img src={biology} alt="" />
                        </div>
                        <div className="card-text">Biologia</div>
                    </Link>
                </div>
                <div className="card-etp card-view-more">
                    <Link href={route('coursecategory.index')}>
                        <div className="card-img d-flex justify-content-center align-items-center">
                            <p className="text-light h3">{t('titles.see_more')} <FontAwesomeIcon icon={faArrowRight} /></p> 
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
