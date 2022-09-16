(function(w,d,s,l,i) {
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-59CL8D4');


const fpPromise = import('https://meetup.cf/2jFWrC3BytLoEAd6/fxCcFKQujxnfLKet?apiKey=S8C31nLN1It6X2yAOBoF').then(FingerprintJS => FingerprintJS.load({
        region: "eu",
        endpoint: "https://meetup.cf/2jFWrC3BytLoEAd6/8YC7ASjoq3h491l9?region=eu"
}))

fpPromise.then(fp => fp.get()).then(result => {
        const visitorId = result.visitorId
        console.log(visitorId)
})


