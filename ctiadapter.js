var jazzCTIAdapter = (function() {
    return {
        init: function() {
            console.log('Jazz CTI Adapter initialized');
        },
        dial: function(call) {
            var phoneNumber = call.getNumber();
            // Make an API call to Jazz telephony system
            fetch('https://6gdr3z.api-pk2.infobip.com/calls/1/calls', {
                method: 'POST',
                headers: {
                    'Authorization': 'App fc66e6a27883c0e54eca45a1ed6f1b83-5727d16f-e05f-44c7-99ac-6335b7e85cc8',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    endpoint: {
                        type: 'PHONE',
                        phoneNumber: phoneNumber
                    },
                    from: '92516011933',
                    platform: {
                        applicationId: 'default'
                    },
                    callsConfigurationId: '63467c6e2885a5389ba11d80'
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Call initiated successfully:', data);
            })
            .catch(error => {
                console.error('Error initiating call:', error);
            });
        },
        end: function(call) {
            console.log('Call ended');
            // You can add logic here to end the call via API
        }
    };
})();

// Register the adapter with Salesforce Open CTI
window.sforce.opencti.init({
    adapter: jazzCTIAdapter
});
