window.onload = function(){
  // code
  var stripe = Stripe('pk_test_GqFgJIpDuUSqzAGTHdYQ1AD8001kfku4mZ');

  // select an alement and store it in a variable using javascript
  // add event listener on said variable

  let air = document.querySelector ('#air')

  air.addEventListener('click', function(){
    stripe.redirectToCheckout({
      lineItems: [
        // Replace with the ID of your price
        {price: 'price_1GvAyVBV81V3WkIuF3zrdpPE', quantity: 1}
      ],
      mode: 'payment',
      successUrl: 'http://localhost:8000/success.html',
      cancelUrl:  'http://localhost:8000/cancel.html',
    }).then(function (result) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    });
  })

  };

