const nav_elements  = {
  E1: { name: "Everquest", img : "img/EQ1_sof.jpg"},
  E2: { name: "World of Warcraft", img : "img/wow1.jpg", url : "warframe/warframe.html"},
  E3: { name: "Path of Exile", img : "img/poe1.jpg"},
  E4: { name: "Warframe", img : "img/wf1.jpg"},
}
  // E10: { name: "Element 10", url : "https://picsum.photos/300/200?random=10"},

const totop = document.getElementById('totop')

// Listeners
totop.addEventListener('click', (e) => {
  e.preventDefault()
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
})

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}

async function linkListener(key){
 if (nav_elements[key].url){
   const html = await getPage(nav_elements[key].url)
   console.log(html)
 }
}

function buildLayout(){
  // Contruction de la Sidebar
  Object.keys(nav_elements).forEach(key => {
    const navimage = document.createElement('img')
    navimage.src = nav_elements[key].img;
    navimage.width = 320
    navimage.height = 200
    navimage.title = nav_elements[key].name
    document.getElementById('bdgrid').appendChild(navimage)
    const sbLi = document.createElement('div')
    sbLi.innerText = nav_elements[key].name
    sbLi.addEventListener('click', (e) => {
      linkListener(key)
    })
    document.getElementById('sidebar').appendChild(sbLi)
  })
}

function buildLayout2(){
  // Contruction de la Sidebar
  Object.values(nav_elements).forEach(nav_element => {
    const navimage = document.createElement('img')
    navimage.src = nav_element.img;
    navimage.width = 320
    navimage.height = 200
    navimage.title = nav_element.name
    document.getElementById('bdgrid').appendChild(navimage)
    const sbLi = document.createElement('div')
    sbLi.innerText = nav_element.name
    sbLi.addEventListener('click', (e) => {
      linkListener(e.target)
    })
    document.getElementById('sidebar').appendChild(sbLi)
  })
}

async function getPage(ref) {
  let response = await fetch(ref)
  let content = await response.text()
  return content
}

window.addEventListener('load', () => {
  clearElement(document.getElementById('sidebar'));
  clearElement(document.getElementById('bdgrid'));
  buildLayout()
})
