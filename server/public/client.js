console.log('JS');

$(document).ready(readyNow);

function readyNow() {
    console.log('JQ');
    $("#addAlbum").on('click', function(event) {
        event.preventDefault();
        addRecord(getNewRecord());
    });
    getAllRecords();


}

function getNewRecord() {
    let record = {
        artist: $("#artist").val(),
        album: $("#album").val(),
        year: $("#year").val(),
        genre: $("#genre").val()
    };
    return record;
}

function addRecord() {
    $.ajax({
        method: 'POST',
        url: '/record',
        data: record
    }).then(function(response) {
        //clear input fields
        getAllRecords();
    }).catch(function(response) {
        console.log('Something bad happened', response.status);

    });

}

function getAllRecords() {
    $.ajax({
        method: 'GET',
        url: '/record'
    }).then(function(response) {
        displayAllRecords(response);
    });


}

function displayAllRecords(recordsArray) {
    let $recordsTarget = $(`#records`);
    for (let record of recordsArray) {
        $recordsTarget.append(makeRow(record));
    }

    function makeRow(record) {
        let rowHtml = `<tr>
    <td>${record.artist}</td>
    <td>${record.albumName}</td>
    <td>${record.year}</td>
    <td>${record.genreList.join(`, `)}</td>
    </tr>`;
    return rowHtml;
}

}