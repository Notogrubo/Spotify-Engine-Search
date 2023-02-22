import React from 'react';
import Slider from 'rc-slider';
import '../Styles/Footer.css';
import { TiThMenuOutline } from 'react-icons/ti';
import 'rc-slider/assets/index.css';
import { BsFillPlayCircleFill, BsArrowsAngleExpand } from 'react-icons/bs';
import { RxSpeakerModerate } from 'react-icons/rx';
import { TbPlugConnected } from 'react-icons/tb';
import {
    IoPlaySkipBackSharp,
    IoPlaySkipForwardSharp,
    IoShuffleSharp,
} from 'react-icons/io5';
import { BiRepeat } from 'react-icons/bi';
//  four footer boxes

function Footer() {
    return (
        <div className="Footer">
            <div className="firstFooterBox" />
            <div className="secondFooterBox">
                <div className="secondFooterBoxTop">
                    <IoShuffleSharp
                        role="button"
                        name="IoShuffleSharp"
                        size={20}
                    />
                    <IoPlaySkipBackSharp
                        role="button"
                        name="IoPlaySkipBackSharp"
                        size={20}
                    />
                    <BsFillPlayCircleFill
                        role="button"
                        name="BsFillPlayCircleFill"
                        size={30}
                        color="white"
                    />
                    <IoPlaySkipForwardSharp
                        role="button"
                        name="IoPlaySkipForwardSharp"
                        size={20}
                    />
                    <BiRepeat role="button" name="BiRepeat" size={20} />
                </div>
                <div className="secondFooterBoxBottom">
                    <Slider />
                </div>
            </div>
            <div className="thirdFooterBox">
                <TiThMenuOutline
                    role="button"
                    name="TiThMenuOutline"
                    size={20}
                />
                <TbPlugConnected
                    role="button"
                    name="TbPlugConnected"
                    size={20}
                />
                <RxSpeakerModerate
                    role="button"
                    name="RxSpeakerModerate"
                    size={20}
                />
                <Slider style={{ width: '100px' }} />
                <BsArrowsAngleExpand
                    role="button"
                    name="BsArrowsAngleExpand"
                    size={18}
                />
            </div>
        </div>
    );
}

export default Footer;
