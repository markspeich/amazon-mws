'use strict';

var accessKey = process.env.AWS_ACCESS_KEY_ID || 'YOUR_KEY';
var accessSecret = process.env.AWS_SECRET_ACCESS_KEY || 'YOUR_SECRET';

var amazonAWS = require('../../lib/amazon-mws')(accessKey, accessSecret);

var sellerRequest = function () {

    amazonAWS.sellers.listMarketplaceParticipations({
        'Action': 'ListMarketplaceParticipations',
        'SellerId': 'SELLER_ID',
        'MWSAuthToken': 'MWS_AUTH_TOKEN'
    }, function (error, response) {
        if (error) {
            console.log('error ', error);
            return;
        }
        console.log('response', response);
    });
};

sellerRequest();