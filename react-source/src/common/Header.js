import $ from 'jquery';
import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { actSetShowSearchForm } from '../store/app/actions';

export default function Header() {
  const dispatch = useDispatch();
  const showSearchForm = useSelector(state => state.App.showSearchForm)

  useEffect(() => {
    function handler() {
      if ($(".navbar-default").add(".navbar-inverse").offset().top > 50) {
        $(".reveal-menu-home").addClass("sticky-nav");
        $(".reveal-menu-blog").addClass("sticky-nav-white");
      } else {
        $(".reveal-menu-home").removeClass("sticky-nav");
        $(".reveal-menu-blog").removeClass("sticky-nav-white");
      }

      if( $(window).scrollTop() > 10 ){
        $('.navbar').addClass('navbar-sticky-in')
      } else {
        $('.navbar').removeClass('navbar-sticky-in')
      }
    }
    window.addEventListener('scroll', handler);
  }, [])

  useEffect(() => {
    $('#responsive-menu').slicknav({
      duration: 500,
      easingOpen: 'easeInExpo',
      easingClose: 'easeOutExpo',
      closedSymbol: '<i class="fa fa-plus"></i>',
      openedSymbol: '<i class="fa fa-minus"></i>',
      prependTo: '#slicknav-mobile',
      allowParentLinks: true,
      label:"" 
    });
  }, [])

  useEffect(() => {
    /**
     * Main Menu Slide Down Effect
     */

    var selected = $('#navbar li');
    // Mouse-enter dropdown
    selected.on("mouseenter", function() {
        $(this).find('ul').first().stop(true, true).delay(350).slideDown(500, 'easeInOutQuad');
    });

    // Mouse-leave dropdown
    selected.on("mouseleave", function() {
        $(this).find('ul').first().stop(true, true).delay(100).slideUp(150, 'easeInOutQuad');
    });
  }, [])

  /*
  $('a[href="#search"]').on('click', function(event) {
    event.preventDefault();
    $('#search').addClass('open');
    $('#search > form > input[type="search"]').focus();
  });
  
  $('#search, #search button.close').on('click keyup', function(event) {
    if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
        $(this).removeClass('open');
    }
  });
  */

  function handleShowSearchForm(evt) {
    evt.preventDefault();

    dispatch(actSetShowSearchForm(!showSearchForm))
  }

  return (
    <header id="inner-navigation">
      {/* navbar start */}
      <nav className="navbar navbar-default navbar-fixed-top navbar-sticky-function navbar-arrow">
        <div className="container">
          <div className="logo pull-left">
            <h1><a href="index.html"><img src="/images/logo.png" alt="logo" /></a></h1>
          </div>
          <div id="navbar" className="navbar-nav-wrapper text-center">
            <ul className="nav navbar-nav navbar-right" id="responsive-menu">
              <li className="active"><a href="/">Home <i className="fa fa-angle-down" /></a>
                <ul>
                  <li><a href="index.html">Home Default</a></li>
                  <li><a href="/">Home List View</a>
                    <ul>
                      <li><a href="index-1.html">Home RightSidebar</a></li>
                      <li><a href="index-2.html">Home Fullwidth</a></li>
                      <li><a href="index-3.html">Home LeftSidebar</a></li>
                    </ul>
                  </li>
                  <li><a href="/">Home Grid View</a>
                    <ul>
                      <li><a href="index-4.html">Home RightSidebar</a></li>
                      <li><a href="index.html">Home Fullwidth</a></li>
                      <li><a href="index-5.html">Home LeftSidebar</a></li>
                    </ul>
                  </li>
                  <li><a href="mag.html">Magazine</a>
                    <ul>
                      <li><a href="mag.html">Default Magazine</a></li>
                      <li><a href="mag-food.html">Food Magazine</a></li>
                      <li><a href="mag-fashion.html">Fashion Magazine</a></li>
                      <li><a href="mag-travel.html">Travel Magazine</a></li>
                      <li><a href="mag-tech.html">Tech Magazine</a></li>
                      <li><a href="mag-photo.html">Photography Magazine</a></li>
                      <li><a href="mag-fitness.html">Fitness Magazine</a></li>
                      <li><a href="mag-sports.html">Sports Magazine</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="/">Pages <i className="fa fa-angle-down" /></a>
                <ul>
                  <li><a href="about-us.html">About Us</a></li>
                  <li><a href="error.html">Error Page</a></li>
                  <li><a href="/">Detail Page</a>
                    <ul>
                      <li><a href="blog-details.html">Detail 1</a></li>
                      <li><a href="blog-details1.html">Detail 2</a></li>
                    </ul>
                  </li>
                  <li><a href="author.html">Author Page</a></li>
                  <li><a href="/">Category</a>
                    <ul>
                      <li><a href="category.html">Category Lists</a></li>
                      <li><a href="category-detail.html">Category Detail</a></li>
                    </ul>
                  </li>
                  <li><a href="/">Tags</a>
                    <ul>
                      <li><a href="tag.html">Tag Lists</a></li>
                      <li><a href="tag-detail.html">Tag Detail</a></li>
                    </ul>
                  </li>
                  <li><a href="faq.html">Faq</a></li>
                  <li><a href="coming-soon.html">Coming Soon</a></li>
                </ul>
              </li>
              <li>
                <a href="/">Dashboard  <i className="fa fa-angle-down" /></a>
                <ul>
                  <li><a href="dashboard.html">Dashboard</a></li>
                  <li><a href="dashboard-my-profile.html">Dashboard Profile</a></li>
                  <li><a href="dashboard-booking.html">Dashboard Bookings</a></li>
                  <li><a href="dashboard-history.html">Dashboard History</a></li>
                  <li><a href="dashboard-list.html">Dashboard Listing</a></li>
                  <li><a href="dashboard-addtour.html">Dashboard Add Tour</a></li>
                  <li><a href="dashboard-reviews.html">Dashboard Reviews</a></li>
                </ul>
              </li>
              <li><a href="shop.html">Shop <i className="fa fa-angle-down" /></a>
                <ul>
                  <li><a href="shop.html">Shop List</a></li>
                  <li><a href="shop-detail.html">Shop Detail</a></li>
                  <li><a href="cart.html">Cart</a></li>
                  <li><a href="checkout.html">Checkout</a></li>
                  <li><a href="login.html">Login Page</a></li>
                  <li><a href="forgot-password.html">Forgot Password</a></li>
                </ul>
              </li>
              <li><a href="contact-us.html">Contact Us</a></li>
              <li><a href="#search" onClick={handleShowSearchForm} className="mt_search"><i className="fa fa-search" /></a></li>
            </ul>
          </div>{/*/.nav-collapse */}
        </div>
        <div id="slicknav-mobile" />
      </nav>
      {/* navbar end */}
    </header>
  )
}