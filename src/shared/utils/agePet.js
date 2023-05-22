const agePet = birthday => {
  const dateHandle = (date, action) => {
    switch (action) {
      case 'parse':
        return Date.parse(date);
      case 'stringify':
        return new Date(date).toISOString();
      default:
        return;
    }
  };

  if (!birthday) {
    return null;
  }
  const numberNames = [
    'less then one',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
  ];
  const tens = ['20', '30', '40', '50', '60', '70', '80', '90'];

  const birthDate = new Date(dateHandle(birthday, 'parse'));

  const now = Date.now();

  const years = new Date(now - birthDate).getFullYear() - 1970;
  const months = new Date(now - birthDate).getMonth();

  if (years > 99) {
    return null;
  }

  const number = years ? years : months;

  let append = years === 0 ? 'mon' : 'years';

  if (number < 0) {
  }
  append =
    number % 10 === 1 || number === 0
      ? append.slice(0, append.length - 1)
      : append;
  if (number < 16) {
    return `${numberNames[number]} ${append}`;
  }
  if (number < 20) {
    const indx = number % 10;
    return `${numberNames[indx]}teen ${append}`;
  }

  let result;
  for (let i = tens.length - 1; i >= 0; i -= 1) {
    const element = tens[i];
    if (number / (i * 10 + 20) >= 1) {
      const indx = number % 10;
      result = !indx
        ? `${element} ${append}`
        : `${element} ${numberNames[indx]} ${append}`;
      break;
    }
  }
  return result;
};

export { agePet };