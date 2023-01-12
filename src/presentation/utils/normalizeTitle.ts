const normalizeTitle = (title: string) => {
    if (title.length > 30) {
        return title.substring(0, 30) + '...';
    }
    return title;
}

export default normalizeTitle;