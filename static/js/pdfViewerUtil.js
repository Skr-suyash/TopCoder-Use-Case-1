/**
 * Utility file for creating an embedded PDF VIewer
 */
document.addEventListener('adobe_dc_view_sdk.ready', function() {
    const adobeDCView = new AdobeDC.View(
        {clientId: 'df96b4d620344f5f8f9128cc01baab40', divId: 'adobe-dc-view'},
    );
    adobeDCView.previewFile(
        {
            content: {location: {url: url}},
            metaData: {fileName: fname},
        },
        {embedMode: 'IN_LINE'},
    );

    // Setting Up Analytics
    adobeDCView.registerCallback(
        /* Type of call back */
        AdobeDC.View.Enum.CallbackType.EVENT_LISTENER,
        /* call back function */
        function(event) {
            switch (event.type) {
            case 'DOCUMENT_OPEN':
                gtag('event', event.data.fileName, {
                    'event_category': 'DOCUMENT_OPEN',
                    'event_label': 'filename: ' + event.data.fileName,
                });
                break;

            case 'PAGE_VIEW':
                gtag('event', event.data.fileName, {
                    'event_category': 'PAGE_VIEW',
                    'event_label': 'pageNumber: '+
                                    event.data.pageNumber +
                                    '  fileName: ' + event.data.fileName,
                    'event_value': event.data.pageNumber,
                });
                break;

            case 'DOCUMENT_DOWNLOAD':
                gtag('event', event.data.fileName, {
                    'event_category': 'DOCUMENT_DOWNLOAD',
                    'event_label': 'fileName: ' + event.data.fileName,
                });
                break;

            case 'DOCUMENT_PRINT':
                gtag('event', event.data.fileName, {
                    'event_category': 'DOCUMENT_PRINT',
                    'event_label': 'fileName: ' + event.data.fileName,
                });
                break;
            }
        },
        {
            enablePDFAnalytics: true,
        },
    );
});
