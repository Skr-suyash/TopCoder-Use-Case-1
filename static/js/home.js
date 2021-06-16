
/** Hide the COVID warning dialog */
$('#cross').on('keypress click', function() {
    $('#hide-alert').slideUp('fast');
});

/**
 * OnClicks for redirecting to various pages when clicked on cards
 */
$('#doc1').on('click keypress', function() {
    window.location = '/doc1';
});

$('#doc2').on('click keypress', function() {
    window.location = '/doc2';
});

$('#doc3').on('click keypress', function() {
    window.location = '/doc3';
});

$('#doc4').on('click keypress', function() {
    window.location = '/doc4';
});

$('#doc5').on('click keypress', function() {
    window.location = '/doc5';
});


/**
 * Add Google Translate Functionality
 */
function googleTranslateElementInit() { // eslint-disable-line no-unused-vars
    new google.translate.TranslateElement({
        pageLanguage: 'en',
    },
    'google_translate_element');
}
