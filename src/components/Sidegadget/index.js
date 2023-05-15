import React from 'react'
import {GadgetContainer, GadgetWrapper, IconMail, IconFacebook, IconTikTok, IconInstagram, IconLink} from './SidegadgetElements'

const GadgetElement = (contactData) => {
    console.log()
    return (
        <GadgetContainer>
            <GadgetWrapper>
                <IconLink href={"mailto:"+contactData.contactData.email}  target="_blank">
                    <IconMail />
                </IconLink>
                <IconLink href={contactData.contactData.instagram} target="_blank">
                    <IconInstagram />
                </IconLink>
                <IconLink href={contactData.contactData.facebook} target="_blank">
                    <IconFacebook />
                </IconLink>
                <IconLink href={contactData.contactData.tiktok} target="_blank">
                    <IconTikTok />
                </IconLink>
            </GadgetWrapper>
        </GadgetContainer>
    )
}


export default GadgetElement;
