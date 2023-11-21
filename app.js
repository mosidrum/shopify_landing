const data = [
  {
    head: 'Customize your online store',
    alt: 'online store',
    desc: 'Choose a theme and add your logo, colors, and images to reflect your brand.',
    button: 'Customize theme',
    image: 'https://crushingit.tech/hackathon-assets/customise-store.png',
  },
  {
    head: 'Add your first product',
    alt: 'first product',
    desc: 'Write a description, add photos, and set pricing for the product you plan to sell',
    button: 'Add product',
    button2: 'Import product',
    image: 'https://crushingit.tech/hackathon-assets/product.png',
  },
  {
    head: 'Add a custom domain',
    alt: 'custom domain',
    desc: 'Your current domain is 222219.myshopify.com but you can add a custom domain to help customers find your online store',
    button: 'Add domain',
    image: 'https://crushingit.tech/hackathon-assets/website.png',
  },
  {
    head: 'Name your store',
    alt: 'name store',
    desc: 'Your temporary store name is Davii collections. The store name appears in your admin and online store.',
    button: 'Name store',
    image: 'https://crushingit.tech/hackathon-assets/name-store.png',
  },
  {
    head: 'Setup a payment provider',
    alt: 'payment provider',
    desc: 'Choose a payment provider ro start accepting payments. You&apos;ll need to create an account with the payment provider and set it up with your Shopify store.',
    button: 'Setup payment',
    image: 'https://crushingit.tech/hackathon-assets/payment.png',
  },
]

const elements = data.map((item, index) => `
  <div class="step-${index + 1}">
    <div class="step-left">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 5"/>
      </svg>
      <div class="step-text">
        <p class="customize">${item.head}</p>
        <div class="choose">
          ${item.desc}<span>Learn more</span>
        </div>
        <div class="buttons">
          <button>
            ${item.button}
          </button>
          <span>
            ${item.button2}
          </span>
        </div>
      </div>
    </div>
    <div class="step-right">
      <img src=${item.image} alt=${item.alt}>
    </div>
  </div>
`);

