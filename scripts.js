let liItem;

$('#add').click( () => {
    let txtItem = $('#item').val();
    $('ul').append('<li>' + txtItem + '</li>');
});