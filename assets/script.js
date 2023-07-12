// Title/header
const titleTodaysDate = dayjs().format(`dddd[, ]MMMM[ ]D`);
$(`#todays-date`).text(titleTodaysDate);

// This changes row background color to gray on click event.
$(`tr`).on(`click`, function () {
  if ($(this).hasClass(`table-active`)) {
    $(this).removeClass(`table-active`);
  } else {
    $(this).addClass(`table-active`);
  }
});

// This function applies background styling to table row elements depending on current time of day
// using bootstrap table, so applying bootstrap table contextual classes:
// *  https://getbootstrap.com/docs/4.0/content/tables/#contextual-classes

function setTable() {
  console.log(dayjs().get(`hour`));

  const rowHourCheckStr = `tr-hour-`;
  const currentHour = dayjs().get(`hour`);
  
  // loop through table rows and apply a gray background styling if the row time is in the past
  for (let i = 1; i <= 17; i++) {
    currentTableHour = 6;
    let rowToCheck = '#' + rowHourCheckStr + i;
  
    if (i < currentHour) {
      $(rowToCheck).addClass(`table-active`);
      console.log(`added`);
    }
  
    currentTableHour++;
    console.log(rowToCheck)
    // if (dayjs().get(`hour`))
  }
}

setTable();