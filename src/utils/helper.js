export function toggleSidebar(dispatch, closeMenu) {
  dispatch(closeMenu());
}

export function handleSearchQuery(e,setSearchQuery){
  setSearchQuery(e.target.value)
}