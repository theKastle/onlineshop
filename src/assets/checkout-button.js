
paypal.Button.render({
    env: 'sandbox', // sandbox | production
    client: {
        sandbox: 'Ae5-arz478ct1cKEjt9DE0c-zGF8gWLCec4pQ4GLMa4rU53SfKdipDDXqfUeKDwAsggxwbjkNIcdLB9s',
        production: 'Aco85QiB9jk8Q3GdsidqKVCXuPAAVbnqm0agscHCL2-K2Lu2L6MxDU2AwTZa-ALMn_N0z-s2MXKJBxqJ'
    },
    commit: true,
    payment: function () {
        console.log('TOTAL = ', document.querySelector('#paypal-button-container').attributes['data-total'].value)
        return paypal.rest.payment.create(this.props.env, this.props.client, {
            transactions: [
                {
                    amount: { total: '0.01', currency: 'USD' }
                }
            ]
        });
    },
    onAuthorize: function (data, actions) {
        return actions.payment.execute().then(function () {
            document.querySelector('#paypal-button-container').innerText = 'Payment Complete!';
        });
    }

}, '#paypal-button-container');