import { format } from 'date-fns';

export function formatDate(date) {
    const formattedDate = format(new Date(date), 'dd.MM.yyyy');
    return formattedDate === '01.01.1970' ? '' : formattedDate;
}