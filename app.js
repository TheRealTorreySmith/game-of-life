$(document).ready(function () {

const maxRows = 20
const maxCols = 20

//Set initial UI state
$('#stop-tick-btn').attr('disabled', true);
$('#dump-config-btn').attr('disabled', false);
$('#clear-btn').attr('disabled', false);
$('#start-tick-btn').attr('disabled', false);
$('#one-tick-btn').attr('disabled', false);

$('#stop-tick-btn').click(stopBtnClick);
$('#dump-config-btn').click(dumpConfigBtnClick);
$('#clear-btn').click(clearBtnClick);
$('#start-tick-btn').click(startBtnClick);
$('#one-tick-btn').click(oneTickBtnClick);

//Draw initial grid
displayUIGrid();

//UI Grid functions
function displayUIGrid() {
  for (let i = 0; i < maxRows; i++) {
    const row = $('<tr>');
    for (let j = 0; j < maxCols; j++) {
      const cell = $('<td>');
      const rowColString = `${i},${j}`
      cell.attr('data-row-col', rowColString)
      cell.click(uiGridCellClick);
      row.append(cell);
    }
    $('#ui-grid').append(row);
  }
}

//Cell event handlers
function uiGridCellClick(event) {
  event.preventDefault()
  const rowColString = $(this).attr('data-row-col')
  console.log(`uiGridCellClick()${rowColString}`)
}


//Button event handlers
function stopBtnClick(event) {
  event.preventDefault()
  console.log('stopBtnClick')
  $('#stop-tick-btn').attr('disabled', true);
  $('#dump-config-btn').attr('disabled', false);
  $('#clear-btn').attr('disabled', false);
  $('#start-tick-btn').attr('disabled', false);
  $('#one-tick-btn').attr('disabled', false);
  }

function startBtnClick(event) {
  event.preventDefault()
  console.log('startBtnClick')
  $('#stop-tick-btn').attr('disabled', false);
  $('#dump-config-btn').attr('disabled', true);
  $('#clear-btn').attr('disabled', true);
  $('#start-tick-btn').attr('disabled', true);
  $('#one-tick-btn').attr('disabled', true);
  }

function oneTickBtnClick(event) {
  event.preventDefault()
  console.log('oneTickBtnClick')
  $('#stop-tick-btn').attr('disabled', true);
  $('#dump-config-btn').attr('disabled', false);
  $('#clear-btn').attr('disabled', false);
  $('#start-tick-btn').attr('disabled', false);
  $('#one-tick-btn').attr('disabled', false);
  }

function clearBtnClick(event) {
  event.preventDefault()
  console.log('clearBtnClick')
  $('#stop-tick-btn').attr('disabled', true);
  $('#dump-config-btn').attr('disabled', false);
  $('#clear-btn').attr('disabled', false);
  $('#start-tick-btn').attr('disabled', false);
  $('#one-tick-btn').attr('disabled', false);
  }

function dumpConfigBtnClick(event) {
  event.preventDefault()
  console.log('dumpConfigBtnClick')
  $('#stop-tick-btn').attr('disabled', true);
  $('#dump-config-btn').attr('disabled', false);
  $('#clear-btn').attr('disabled', false);
  $('#start-tick-btn').attr('disabled', false);
  $('#one-tick-btn').attr('disabled', false);
  }

});
