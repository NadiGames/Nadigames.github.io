async function getPage(ref) {
  let response = await fetch(ref)
  let content = await response.text()
  return content
}

