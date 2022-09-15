<script>
    // Initialize the agent at application startup.
    const fpPromise = import('https://meetup.cf/2jFWrC3BytLoEAd6/fxCcFKQujxnfLKet?apiKey=S8C31nLN1It6X2yAOBoF')
      .then(FingerprintJS => FingerprintJS.load({
        region: "eu",
        endpoint: "https://meetup.cf/2jFWrC3BytLoEAd6/8YC7ASjoq3h491l9?region=eu"
      }))

    // Get the visitor identifier when you need it.
    fpPromise
      .then(fp => fp.get())
      .then(result => {
        // This is the visitor identifier:
        const visitorId = result.visitorId
        console.log(visitorId)
      })
  </script>
