const menEl = document.getElementById('Men')
const womenEl = document.getElementById('Women')
const kidsEl = document.getElementById('Kids')
const mIcon = document.getElementById('menicon')
const wIcon = document.getElementById('womenicon')
const kIcon = document.getElementById('kidsicon')

const productsEl = document.getElementById('Products')

var menProducts = null
var womenProducts = null
var kidsProducts = null

function handleAction(name) {
  if (name != 'men') {
    menEl.classList.remove('opt-select')
    mIcon.classList.add('d-n')
  }
  if (name != 'women') {
    womenEl.classList.remove('opt-select')
    wIcon.classList.add('d-n')
  }
  if (name != 'kids') {
    kidsEl.classList.remove('opt-select')
    kIcon.classList.add('d-n')
  }
}

menEl.onclick = function (e) {
  menEl.classList.add('opt-select')
  mIcon.classList.remove('d-n')
  handleAction('men')
  renderData(menProducts)
}

womenEl.onclick = function (e) {
  womenEl.classList.add('opt-select')
  wIcon.classList.remove('d-n')
  handleAction('women')
  renderData(womenProducts)
}
kidsEl.onclick = function (e) {
  kidsEl.classList.add('opt-select')
  kIcon.classList.remove('d-n')
  handleAction('kids')
  renderData(kidsProducts)
}

function renderData(data) {
  let ren_data = data.map(
    (item) =>
      `
      <div class="product">
        <div class="image men-img">
          <div class="badge ${item.badge_text ? '' : 'd-n'}">
            <span>${item.badge_text ? item.badge_text : ''}</span>
          </div>

          <img
            class="men-img"
            src="${item.image}"
            alt="img"
          />
        </div>
        <div class="details">
          <div class="details-top">
            <span class="name">${item.title}</span>

            <li class="vendor">${item.vendor}</li>
          </div>
          <span class="price">Rs ${item.price}</span> <span class="cprice">${
        item.compare_at_price
      }</span><span class="discount">50% Off</span>
          <div class="btn-cont">
            <button class="btn">Add to Cart</button>
          </div>
        </div>
      </div>
    `
  )

  let content = ''
  for (data of ren_data) {
    content += data
  }
  productsEl.innerHTML = content
}

function handleData(data) {
  menProducts = data[0].category_products
  womenProducts = data[1].category_products
  kidsProducts = data[2].category_products
  renderData(menProducts)
}

function getData() {
  let data = ''
  const url =
    'https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json'
  fetch(url)
    .then((res) => res.json())
    .then((jsonData) => {
      handleData(jsonData.categories)
    })
    .catch((err) => console.log(err))
}

getData()
