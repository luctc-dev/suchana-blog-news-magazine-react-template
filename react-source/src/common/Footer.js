
export default function Footer() {
  return (
    <footer id="mt_footer" className="mt_footer_style1">
      <div className="container">
        <div className="mt_footer_col">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="mt_footer_about">
                <h2><a href="/">Suchana</a></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="mt_footer_list">
                <h3>Quick Links</h3>
                <ul className="footer-quick-links-4">
                  <li><a href="/"><i className="fa fa-angle-right" /> Placerat bibendum</a></li>
                  <li><a href="/"><i className="fa fa-angle-right" /> Ullamcorper odio nec turpis</a></li>
                  <li><a href="/"><i className="fa fa-angle-right" /> Aliquam porttitor vestibulum</a></li>
                  <li><a href="/"><i className="fa fa-angle-right" /> Lobortis enim nec nisi</a></li>
                  <li><a href="/"><i className="fa fa-angle-right" /> Placerat bibendum</a></li>
                  <li><a href="/"><i className="fa fa-angle-right" /> Lobortis enim nec nisi</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="mt_footer_newsletter">
                <h3>Newsletter</h3>
                <div className="mailpoet_form">
                  <form target="_self" method="post" action="https://cyclonethemes.com/demo/html/suchana/email" noValidate>
                    <label>Email Address:</label>
                    <input type="email" className="mailpoet_text" name="mail" title="Email" placeholder="Please specify a valid email address." />
                    <div className="blog-button">
                      <button className="btn-blog">Subscribe</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="mt_footer_gallery">
                <h3>Amazing Gallery</h3>
                <div className="row">
                  <div className="col-sm-4 col-xs-6"><a href="/"><img src="/images/insta/insta_01.jpg" alt="zendvn" /></a></div>
                  <div className="col-sm-4 col-xs-6"><a href="/"><img src="/images/insta/insta_02.jpg" alt="zendvn" /></a></div>
                  <div className="col-sm-4 col-xs-6"><a href="/"><img src="/images/insta/insta_03.jpg" alt="zendvn" /></a></div>
                  <div className="col-sm-4 col-xs-6"><a href="/"><img src="/images/insta/insta_04.jpg" alt="zendvn" /></a></div>
                  <div className="col-sm-4 col-xs-6"><a href="/"><img src="/images/insta/insta_05.jpg" alt="zendvn" /></a></div>
                  <div className="col-sm-4 col-xs-6"><a href="/"><img src="/images/insta/insta_06.jpg" alt="zendvn" /></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt_footer_copy">
          <div className="copy_txt pull-left">
            <p className="mar-0"><a href="templateshub.net">Templateshub</a></p>
          </div>
          <div className="follow_us pull-right">
            <ul className="social_icons">
              <li><a href="/"> <i className="fa fa-facebook" /></a></li>
              <li><a href="/"><i className="fa fa-twitter" /></a></li>
              <li><a href="/"><i className="fa fa-instagram" /></a></li>
              <li><a href="/"><i className="fa fa-linkedin" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}