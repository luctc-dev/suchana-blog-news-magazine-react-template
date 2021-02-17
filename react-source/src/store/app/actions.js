export const ACT_SET_SHOW_SEARCH_FORM = 'ACT_SET_SHOW_SEARCH_FORM';

export const actSetShowSearchForm = (showSearchForm) => {
  return {
    type: ACT_SET_SHOW_SEARCH_FORM,
    payload: {
      showSearchForm
    }
  }
}