
const fpPromise = import('https://meetup.cf/2jFWrC3BytLoEAd6/fxCcFKQujxnfLKet?apiKey=S8C31nLN1It6X2yAOBoF').then(FingerprintJS => FingerprintJS.load({
        region: "eu",
        endpoint: "https://meetup.cf/2jFWrC3BytLoEAd6/8YC7ASjoq3h491l9?region=eu"
}))

fpPromise.then(fp => fp.get()).then(result => {
        const visitorId = result.visitorId
        console.log(visitorId)
})

