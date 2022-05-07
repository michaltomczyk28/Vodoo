export const fixDateIgnoringTimezone = (date) => {
    const userTimezoneOffset = date.getTimezoneOffset() * 60000;

    return new Date(date.getTime() - userTimezoneOffset);
};
