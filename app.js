document.querySelector('.site-title').innerText = siteData.title
document.querySelector('.site-sub').innerText = siteData.subtitle
document.querySelector('.about-text').innerText = siteData.about

const wrap = document.querySelector('.work-wrap')
siteData.works.forEach(item=>{
  const card = document.createElement('div')
  card.className = 'work-card'
  card.innerHTML = `
    <div class="work-name">${item.name}</div>
    <div class="work-desc">${item.desc}</div>
  `
  wrap.appendChild(card)
})