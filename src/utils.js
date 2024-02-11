export const toHide = (tag) => {
  console.log('hiding');
  tag.classList.add('hidden');
}

export const toggleHide = (tag) => {
  console.log('toggleling')
  tag.classList.toggle('hidden')
}
