export const categoryName = (name) => {
    return name.split('')[0];
}

export const upperCaseString = (string) => {
    return string.trim().split(' ').map(i => i[0].toUpperCase() + i.slice(1)).join(' ');
}

export const TOP_OF_SCREEN = () => {
    const element = document.getElementById('main-container');
    element.scrollIntoView({ top: 0, behavior: 'smooth' });
}

export const categoryFunc = (state) => {
    let graphicCategory = state.map(item => item.book.category);

    let ACTION = graphicCategory.filter(item => item === "action").length;
    let ADVENTURE = graphicCategory.filter(item => item === "adventure").length;
    let DRAMA = graphicCategory.filter(item => item === "drama").length;
    let HORROR = graphicCategory.filter(item => item === "horror").length;
    let HISTORY = graphicCategory.filter(item => item === "history").length;
    let ROMANCE = graphicCategory.filter(item => item === "romance").length;
    let FANTASY = graphicCategory.filter(item => item === "fantasy").length;

    let data = []
    data.push(ACTION, ADVENTURE, DRAMA, HORROR, HISTORY, ROMANCE, FANTASY);
    return data;
}

export const ratingFunc = (state) => {
    let graphicRating = state.map(item => item.book.rating);

    let ONE = graphicRating.filter(item => item === 1).length;
    let TWO = graphicRating.filter(item => item === 2).length;
    let THREE = graphicRating.filter(item => item === 3).length;
    let FOUR = graphicRating.filter(item => item === 4).length;
    let FIVE = graphicRating.filter(item => item === 5).length;

    let data = [];
    data.push(ONE, TWO, THREE, FOUR, FIVE);
    return data;
}