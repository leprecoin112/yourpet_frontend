export const agePet = (birthday) => {
    const startDate = new Date(birthday);
    const currentDate = new Date();
    const diffInMilliseconds = currentDate - startDate;
    const millisecondsInMonth = 30.4368 * 24 * 60 * 60 * 1000;
    const diffInMonths = Math.floor(diffInMilliseconds / millisecondsInMonth);

    console.log(diffInMonths);
}