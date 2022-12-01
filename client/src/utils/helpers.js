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
