interface Scripts {
    name: string;
    src: string;
}
export const ScriptStore: Scripts[] = [
    { name: 'filepicker', src: 'https://api.filestackapi.com/filestack.js' },
    { name: 'rangeSlider', src: '../../../assets/js/ion.rangeSlider.min.js' },
    { name: "paypalObject", src: "https://www.paypalobjects.com/api/checkout.js" },
    { name: 'checkoutButton', src: './assets/checkout-button.js' }
];