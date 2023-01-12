const formatRefreshedAtDate = (refreshedAt: string) => {
    let differenceInDays = Math.floor((new Date().getDate() - new Date(refreshedAt).getDate()));
    
    if (differenceInDays == 0) {
        let differenceInHours = Math.floor((new Date().getHours() - new Date(refreshedAt).getHours()));
        if (differenceInHours == 0) {
            let differenceInMins =
                Math.floor((new Date().getMinutes() - new Date(refreshedAt).getMinutes()));
            if (differenceInMins <= 3) {
                return "Just Now";
            }
            else {
                return `${Math.abs(differenceInMins)} minutes ago`;
            }
        }
        else {
            return `${Math.abs(differenceInHours)} hours ago`;
        }
    }
    else {
        return `${Math.abs(differenceInDays)} days ago`;
    }
};

export default formatRefreshedAtDate;