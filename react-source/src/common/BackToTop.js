import { useEffect } from "react"
import $ from 'jquery';

export default function BackToTop() {

  useEffect(() => {
    window.addEventListener('scroll', function (){
      if ($(this).scrollTop() > 50) {
        $('#back-to-top').fadeIn();
      } else {
        $('#back-to-top').fadeOut();
      }
    })
  }, [])

  function handleClickToTop(evt) {
    evt.preventDefault();

    $('#back-to-top').tooltip('hide');
    $('body,html').animate({
        scrollTop: 0
    }, 800);
  }

  return (
    <a onClick={handleClickToTop} id="back-to-top" href="/" className="btn btn-primary btn-lg back-to-top" role="button" title="Hello" data-placement="left">
      <span className="fa fa-arrow-up" />
    </a>
  )
}