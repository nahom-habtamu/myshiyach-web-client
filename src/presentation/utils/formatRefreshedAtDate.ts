const formatRefreshedAtDate = (refreshedAt: string) => {

    const differenceInDays = Math.floor((
        (new Date() as any) -
        (new Date(refreshedAt) as any)) / (1000 * 60 * 60 * 24));

    if (differenceInDays === 0) {

        let differenceInHours = Math.floor((
            (new Date() as any) -
            (new Date(refreshedAt) as any)) / (1000 * 60 * 60));

        if (differenceInHours === 0) {
            let differenceInMins = Math.floor((
                (new Date() as any) -
                (new Date(refreshedAt) as any)) / (1000 * 60));

            if (differenceInMins <= 3) {
                return "Just Now";
            }
            else {
                return `${differenceInMins} minutes ago`;
            }
        }
        else {
            return `${differenceInHours} hours ago`;
        }
    }
    else {
        return `${differenceInDays} days ago`;
    }
};

export default formatRefreshedAtDate;