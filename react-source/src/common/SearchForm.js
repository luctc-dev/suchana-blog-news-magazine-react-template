import cls from 'classnames';
import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actSetShowSearchForm } from '../store/app/actions';

export default function SearchForm() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const showSearchForm = useSelector(state => state.App.showSearchForm)

  useEffect(() => {
    if (showSearchForm) {
      inputRef.current.focus()
    }
  }, [showSearchForm])

  function handleCloseSearchForm() {
    dispatch(actSetShowSearchForm(false))
  }

  function handleKeyUp(evt) {
    // Phím ESC
    if (evt.keyCode === 27) {
      dispatch(actSetShowSearchForm(false))
    }
  }

  return (
    <div 
      id="search" 
      className={cls({
        open: showSearchForm
      })}
      onKeyUp={handleKeyUp}
    >
      <button type="button" className="close" onClick={handleCloseSearchForm}>×</button>
      <form>
        <input type="search" placeholder="type keyword(s) here" ref={inputRef} />
        <button type="submit" className="btn btn-primary">Search</button>
      </form>
    </div>
  )
}