// jquery test
// $(`#todays-date`).on(`click`, () => {
//   console.log(`clicked`);
// });

// daysjs test
// dayjs();

const titleTodaysDate = dayjs().format(`dddd[, ]MMMM[ ]D`);

$(`#todays-date`).text(titleTodaysDate);

// var  now = dayjs().format();
// console.log(now);
// $(`#todays-date`).text(daysjs(d));