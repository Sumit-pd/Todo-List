module.exports.getDate = function getDate() {
    const today = new Date();
    const currentDay = today.getDay();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("enUS", options);
};


module.exports.getDay = function getDay() {
    const today = new Date();
    const currentDay = today.getDay();
    const options = {
        weekday: "long",

    };
    return today.toLocaleDateString("enUS", options);

} ;

