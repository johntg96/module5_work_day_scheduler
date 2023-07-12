// Title/header
const titleTodaysDate = dayjs().format(`dddd[, ]MMMM[ ]D`);
$(`#todays-date`).text(titleTodaysDate);

// This function applies background styling to table row elements depending on current time of day
// using bootstrap table, so applying bootstrap table contextual classes:
// *  https://getbootstrap.com/docs/4.0/content/tables/#contextual-classes

function setTable() {
  const rowHourCheckStr = `tr-hour-`;
  const currentHour = dayjs().get(`hour`);
  
  // loop through table rows and apply a gray background styling if the row time is in the past
  for (let i = 1; i <= 17; i++) {
    currentTableHour = 6;
    let rowToCheck = '#' + rowHourCheckStr + i;
  
    if (i < currentHour) {
      $(rowToCheck).addClass(`table-active`);
    } else if (i === currentHour) {
      $(rowToCheck).addClass(`table-danger`);
    } else {
      $(rowToCheck).addClass(`table-success`);
    }
  
    currentTableHour++;
  }

  // loop through input field row slots and set text if any stored
  for (let i = 0; i <= 11; i++) {
    let taskToGet = `slot${i}`;
    // if the slot has data then inject it into DOM
    if(getTask(taskToGet) !== null) {
      let slotValue = getTask(taskToGet);
      // console.log(`slot: ${taskToGet} task: ${getTask(taskToGet)}`);
      $(`#${taskToGet}`).val(slotValue);
      // change save button text to 'overwrite'
      $(`#${taskToGet}`).parent().siblings().children().text(`overwrite`)
    }
  }
}

// add row input field text to corresponding local storage slot
function saveTask(slotID, inputText) {
  console.log(`saving ${inputText} in ${slotID}`);

  localStorage.setItem(slotID, inputText);
}

// get value from local storage slot
function getTask(slotID) {
    return localStorage.getItem(slotID);
}

// save row input to local storage on click event
$(`.btn-primary`).on(`click`, function() {
  let rowInputField = $(this).parent().siblings(`.task`).children();
  // rowInputField.css({"color": "red", "border": "2px solid red"});

  // console.log(rowInputField.val()); // this is the value of the input for the save
  // console.log(rowInputField.attr("id")); // this is the ID of the input for the save to be used as storage key name

  // if input field is empty, alert user and do not perform save
  if (rowInputField.val() === ``) {
    alert(`Please input data into ${rowInputField.attr(`id`)} to perform save.`)
  } else {
    // add text in input slot to local storage
    $(this).text(`overwrite`);
    saveTask(rowInputField.attr("id"), rowInputField.val());
  }
});

setTable();