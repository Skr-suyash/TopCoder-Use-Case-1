/**
 * Javascript for the Read More - Read Less Button
 */
$('#read-more').on('click keypress', function() {
    const display = $('#slider').css('display');
    if (display == 'none') {
        $('#slider').slideDown('slow');
        $('#read-more').html('Show Info <span id="icon">&#8593;</span>');
    } else {
        $('#slider').slideUp('slow');
        $('#read-more').html('Show Info <span id="icon">&#8595;</span>');
    }
});

/**
 * Function to toggle to FULL_SCREEn mode.
 */
$('#full-screen').on('click keypress', function() {
    const adobeDCView = new AdobeDC.View(
        {clientId: 'df96b4d620344f5f8f9128cc01baab40', divId: 'adobe-dc-view'},
    );
    adobeDCView.previewFile(
        {
            content: {location: {url: url}},
            metaData: {fileName: fname},
        },
        {
            embedMode: 'FULL_WiNDOW',
            showLeftHandPanel: false,
            defaultViewMode: 'FIT_WIDTH',
        },
    );
    $('nav').hide();
    $('.slider').hide();
    // Resetting height due to overflow isuues
    document.getElementById('adobe-dc-view').style.height = '100vh';
});
