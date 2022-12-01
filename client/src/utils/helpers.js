export const formatProfileData = (profileData) => {
    console.log(profileData);
}

export const formatCertificateData = (certificateData) => {
    return certificateData.map((certi) => {
        const { 
            label: title,
            level
        } = certi.attributes.certificate;
        const url = certi.attributes.certificate_image;

        return {
            title,
            level,
            url
        }
    })
}

export const formatBadgesData = (badgesData) => {
    return badgesData.map((badgeData) =>  {
        const {
            badge_name: title,
            badge_short_name: short_title,
            stars,
        } = badgeData;
        
        return {
            title,
            short_title,
            stars,
        }
    })
}