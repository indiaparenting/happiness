const red = '#C50201'
const yellow ='#FFBF00'
global.BLUE = ['#D78BFE', '#7070FA', '#6469FA']
global.RED = ['#F298AB', red, red]
global.YELLOW = ['#FFBF00', yellow, yellow]
global.GREEN = ['#6DF2CA', '#5CDAD7', '#4DC8E3']
global.WHITE = ['#000', '#000', '#000']
global.REJECT = ['#EF4430', '#EF4430', '#4DC8E3']

global.OLD_RED = ['#F298AB', '#EE567C', '#EE4953']

global.RED_COLOR = '#C50201'
global.YELLOW_COLOR = '#FFBF00'
global.GREY_COLOR = '#C50201'
//EF4430
global.defaultProfileUri = "https://fcloneodin.herokuapp.com/images/no_pic.jpg";
global.iconSize = 26;

global.BOLD = 'Montserrat_700Bold'
global.SEMIBOLD = 'Montserrat_600SemiBold'
global.MEDIUM = 'Montserrat_500Medium'
global.REGULAR = 'Montserrat_400Regular'

global.DARK_GREY = '#4f4d4e'
global.MEDIUM_GREY = '#6b6869'
global.LIGHT_GREY = '#7d7c7c'

global.GOLDEN_FONT = 'GoldenHillsDEMO'

global.LIGHT_BLUE = '#494cf0'

global.makeCancelable = (promise) => {
    let hasCanceled_ = false;

    const wrappedPromise = new Promise((resolve, reject) => {
        promise.then(
            val => hasCanceled_ ? reject({ isCanceled: true }) : resolve(val),
            error => hasCanceled_ ? reject({ isCanceled: true }) : reject(error)
        );
    });

    return {
        promise: wrappedPromise,
        cancel() {
            hasCanceled_ = true;
        },
    };
};
module.exports = {

    COLOR: {
        BLUE: [],
        RED: [],
        GREEN: [],
        YELLOW:[],

    },
};