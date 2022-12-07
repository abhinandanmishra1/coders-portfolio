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

export const formatLeecodeContestHistoryData = (contestHistoryData) => {
    const currentContestRating = contestHistoryData.userContestRanking;
    const contestHistory = contestHistoryData.userContestRankingHistory?.filter((contest) => contest.attended);

    return {
        currentContestRating,
        contestHistory
    }
}

export const getRatings = (contests) => {
    return contests.map((contest) => Math.round(contest.rating));
}

export const getDateKey = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.getMonth().toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}${month}${year}`;    
}
const formatSubmissionCalendarData = (data) => {
    const jsonData = JSON.parse(data);

    const formattedData = {};
    for( let key in jsonData ) {
        const date = new Date(parseInt(key)*1000);
        formattedData[getDateKey(date)] = jsonData[key];
    }
    return formattedData;
}

export const formatCalendarData = (calendarData) => {
    calendarData.matchedUser.userCalendar.submissionCalendar = formatSubmissionCalendarData(calendarData.matchedUser.userCalendar.submissionCalendar);

    return calendarData;
}
