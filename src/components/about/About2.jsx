import React , {useState} from 'react';

import Button from '../button/Button';
import Partner from '../partner/Partner';

import img from '../../assets/images/layouts/royalblades-billboard.jpg'


function About2(props) {

    const [dataBlock] = useState(
        {
            subheading: 'About us',
            heading: 'All you need to use in the royal blades game.',

            desc1: 'This is the royal blades official market place for Land ingame Assets and more you will find in the Royal Blades game.',
            desc2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat',
           
        }
    )
    return (
        <section className="about s2">
                    <div className="shape"></div>
                    <div className="shape right"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="block-text center pd-0">
                                    <h6 className="sub-heading"><span>{dataBlock.subheading}</span></h6>
                                    <h3 className="heading pd">{dataBlock.heading}</h3>
                                        
                                </div>

                                <div className="about__main center" data-aos="fade-up" data-aos-duration="3000">
                                    <img src={img} alt="Royal blades" />
                                    <p className="mb-17">{dataBlock.desc1}</p>
                                    <p className="mb-30">{dataBlock.desc2}</p>
                                    <Button title='More About Us' link='/about' />
                                </div>

                                <Partner />
                            </div>
                        </div>
                    </div>
                </section>
    );
}

export default About2;