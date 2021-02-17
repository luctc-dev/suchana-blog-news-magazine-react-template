import BackToTop from "../../common/BackToTop"
import Footer from "../../common/Footer"
import Header from "../../common/Header"
import PreLoader from "../../common/PreLoader"
import SearchForm from "../../common/SearchForm"
import Slider from "../../components/HomePage/Slider"

export default function HomePage() {

  return (
    <div>
      <PreLoader />
      
      <Header />

      <Slider />
      
      {/** Blog**/}
      <section id="mt_blog" className="light-bg">
        <div className="container">
          <div className="blog_post_sec blog_post_inner">
            <div className="row">
              <div className="col-md-4 col-sm-12 mar-bottom-30">
                <div className="blog-post_wrapper image-wrapper">
                  <div className="blog-post-image">
                    <img src="/images/blog-listing/blog_10.jpg" alt="zendvn" className="img-responsive center-block post_img" />
                  </div>
                  <div className="post-content">
                    <div className="post-category">
                      <ul>
                        <li className="cat-yellow"><a href="/" className="white">Populor</a></li>
                        <li className="cat-pink"><a href="/" className="white">Fashion</a></li>
                      </ul>
                    </div>
                    <div className="post-date">
                      <p><a href="/">15th August 2019</a></p>
                    </div>
                    <h2 className="entry-title">
                      <a href="blog-details.html" className="white">Every Next Level of Your Life Will Demand a Different You</a>
                    </h2>
                    <div className="item-meta white">
                      <span>by</span>
                      <a className="author-name white" href="author.html">Admin Jackson</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 mar-bottom-30">
                <div className="blog-post_wrapper image-wrapper blog-wrapper-list">
                  <div className="blog-post-image">
                    <img src="/images/blog-listing/blog_102.jpg" alt="zendvn" className="img-responsive center-block post_img" />
                    <div className="post-category">
                      <ul>
                        <li className="cat-yellow mar-0"><a href="/" className="white">Popular</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="post-content">
                    <div className="post-date">
                      <p><a href="/">15th August 2019</a></p>
                    </div>
                    <h2 className="entry-title">
                      <a href="blog-details.html" >Adjusting to Your Home is no Different than a New Country</a>
                    </h2>
                    <div className="item-meta">
                      <span>by</span>
                      <a className="author-name" href="author.html">Admin Jackson</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 mar-bottom-30">
                <div className="blog-post_wrapper front-wrapper bg-green">
                  <div className="post-content">
                    <div className="post-category">
                      <ul>
                        <li className="cat-blue"><a href="/" className="white">Technology</a></li>
                        <li className="cat-yellow"><a href="/" className="white">Popular</a></li>
                      </ul>
                    </div>
                    <div className="post-date">
                      <p><a href="/">15th August 2019</a></p>
                    </div>
                    <h2 className="entry-title">
                      <a href="blog-details.html" className="white">I Thought My Glasses Made Me Unattractive</a>
                    </h2>
                    <div className="item-meta white">
                      <span>by</span>
                      <a className="author-name white" href="author.html">Admin Jackson</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 mar-bottom-30">
                {/** ads**/}
                <div className="ads-banner-img text-center">
                  <img src="/images/ads.jpg" alt="ads" />
                </div>
                {/** End ads**/}
              </div>
              <div className="col-md-8 col-sm-12 mar-bottom-30">
                <div className="blog-post_wrapper image-wrapper">
                  <div className="blog-post-image">
                    <img src="/images/blog-listing/blog_13.jpg" alt="zendvn" className="img-responsive center-block post_img" />
                  </div>
                  <div className="post-content">
                    <div className="post-category">
                      <ul>
                        <li className="cat-pink"><a href="/" className="white">Fashion</a></li>
                        <li className="cat-green"><a href="/" className="white">Health</a></li>
                      </ul>
                    </div>
                    <div className="post-date">
                      <p><a href="/">15th August 2019</a></p>
                    </div>
                    <h2 className="entry-title">
                      <a href="blog-details.html" className="white">I Moved Across the Country and Never Looked Back</a>
                    </h2>
                    <div className="item-meta white">
                      <span>by</span>
                      <a className="author-name white" href="author.html">Admin Jackson</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 mar-bottom-30">
                <div className="blog-post_wrapper image-wrapper blog-wrapper-list">
                  <div className="blog-post-image">
                    <img src="/images/blog-listing/blog_101.jpg" alt="zendvn" className="img-responsive center-block post_img" />
                    <div className="post-category">
                      <ul>
                        <li className="cat-green mar-0"><a href="/" className="white">Health</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="post-content">
                    <div className="post-date">
                      <p><a href="/">15th August 2019</a></p>
                    </div>
                    <h2 className="entry-title">
                      <a href="blog-details.html" >I Thought My Glasses Made Me Unattractive</a>
                    </h2>
                    <div className="item-meta">
                      <span>by</span>
                      <a className="author-name" href="author.html">Admin Jackson</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 mar-bottom-30">
                <div className="blog-post_wrapper front-wrapper bg-orange">
                  <div className="post-content">
                    <div className="post-category">
                      <ul>
                        <li className="cat-blue"><a href="/" className="white">Technology</a></li>
                        <li className="cat-yellow"><a href="/" className="white">Popular</a></li>
                      </ul>
                    </div>
                    <div className="post-date">
                      <p><a href="/">15th August 2019</a></p>
                    </div>
                    <h2 className="entry-title">
                      <a href="blog-details.html" className="white">I Should Have Said to Your Weight Loss</a>
                    </h2>
                    <div className="item-meta white">
                      <span>by</span>
                      <a className="author-name white" href="author.html">Admin Jackson</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-sm-12 mar-bottom-30">
                <div className="blog-post_wrapper image-wrapper">
                  <div className="blog-post-image">
                    <img src="/images/blog-listing/blog_18.jpg" alt="zendvn" className="img-responsive center-block post_img" />
                  </div>
                  <div className="post-content">
                    <div className="post-category">
                      <ul>
                        <li className="cat-yellow"><a href="/" className="white">Popular</a></li>
                        <li className="cat-blue"><a href="/" className="white">Technology</a></li>
                      </ul>
                    </div>
                    <div className="post-date">
                      <p><a href="/">15th August 2019</a></p>
                    </div>
                    <h2 className="entry-title">
                      <a href="blog-details.html" className="white">Is the Natural Hair Movement Coming to an End? </a>
                    </h2>
                    <div className="item-meta white">
                      <span>by</span>
                      <a className="author-name white" href="author.html">Admin Jackson</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 mar-bottom-30">
                <div className="blog-post_wrapper image-wrapper">
                  <div className="blog-post-image">
                    <img src="/images/blog-listing/blog_07.jpg" alt="zendvn" className="img-responsive center-block post_img" />
                  </div>
                  <div className="post-content">
                    <div className="post-category">
                      <ul>
                        <li className="cat-yellow"><a href="/" className="white">Popular</a></li>
                        <li className="cat-green"><a href="/" className="white">Health</a></li>
                      </ul>
                    </div>
                    <div className="post-date">
                      <p><a href="/">15th August 2019</a></p>
                    </div>
                    <h2 className="entry-title white">
                      <a href="blog-details.html" className="white">Look at life with the eyes of a child</a>
                    </h2>
                    <div className="item-meta white">
                      <span>by</span>
                      <a className="author-name white" href="author.html">Admin Jackson</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 mar-bottom-30">
                <div className="blog-post_wrapper image-wrapper blog-wrapper-list">
                  <div className="blog-post-image">
                    <img src="/images/blog-listing/blog_103.jpg" alt="zendvn" className="img-responsive center-block post_img" />
                    <div className="post-category">
                      <ul>
                        <li className="cat-blue mar-0"><a href="/" className="white">Technology</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="post-content">
                    <div className="post-date">
                      <p><a href="/">15th August 2019</a></p>
                    </div>
                    <h2 className="entry-title">
                      <a href="blog-details.html" >Slice of Tokyo: How Japan Became a Pizza Hotspot</a>
                    </h2>
                    <div className="item-meta">
                      <span>by</span>
                      <a className="author-name" href="author.html">Admin Jackson</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 mar-bottom-30">
                <div className="blog-post_wrapper image-wrapper">
                  <div className="blog-post-image">
                    <img src="/images/blog-listing/blog_08.jpg" alt="zendvn" className="img-responsive center-block post_img" />
                  </div>
                  <div className="post-content">
                    <div className="post-category">
                      <ul>
                        <li className="cat-blue"><a href="/" className="white">Sports</a></li>
                      </ul>
                    </div>
                    <div className="post-date">
                      <p><a href="/">15th August 2019</a></p>
                    </div>
                    <h2 className="entry-title">
                      <a href="blog-details.html" className="white">How to Find Hidden Cameras in Your Airbnb, and Anywhere Else</a>
                    </h2>
                    <div className="item-meta white">
                      <span>by</span>
                      <a className="author-name white" href="author.html">Admin Jackson</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 mar-bottom-30">
                <div className="blog-post_wrapper image-wrapper">
                  <div className="blog-post-image">
                    <img src="/images/blog-listing/blog_13.jpg" alt="zendvn" className="img-responsive center-block post_img" />
                  </div>
                  <div className="post-content">
                    <div className="post-category">
                      <ul>
                        <li className="cat-pink"><a href="/" className="white">Fashion</a></li>
                      </ul>
                    </div>
                    <div className="post-date">
                      <p><a href="/">15th August 2019</a></p>
                    </div>
                    <h2 className="entry-title white">
                      <a href="blog-details.html" className="white">Is the Natural Hair Movement Coming to an End?</a>
                    </h2>
                    <div className="item-meta white">
                      <span>by</span>
                      <a className="author-name white" href="author.html">Admin Jackson</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 mar-bottom-30">
                <div className="blog-post_wrapper image-wrapper">
                  <div className="blog-post-image">
                    <img src="/images/blog-listing/blog_15.jpg" alt="zendvn" className="img-responsive center-block post_img" />
                  </div>
                  <div className="post-content">
                    <div className="post-category">
                      <ul>
                        <li className="cat-yellow"><a href="/" className="white">Popular</a></li>
                      </ul>
                    </div>
                    <div className="post-date">
                      <p><a href="/">15th August 2019</a></p>
                    </div>
                    <h2 className="entry-title">
                      <a href="blog-details.html" className="white">Beauty is Gene Deep but give me those little imperfections Going</a>
                    </h2>
                    <div className="item-meta white">
                      <span>by</span>
                      <a className="author-name white" href="author.html">Admin Jackson</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12">
                <div className="blog-button text-center">
                  <button className="btn-blog">Load More <i className="fa fa-angle-double-right" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/** End Blog**/}
      <div className="mt_instagram">
        <div className="container">
          <div className="row">
            <div className="col-sm-2 col-xs-6"><a href="/"><img src="/images/insta/insta_01.jpg" alt="zendvn" /></a></div>
            <div className="col-sm-2 col-xs-6"><a href="/"><img src="/images/insta/insta_02.jpg" alt="zendvn" /></a></div>
            <div className="col-sm-2 col-xs-6"><a href="/"><img src="/images/insta/insta_03.jpg" alt="zendvn" /></a></div>
            <div className="col-sm-2 col-xs-6"><a href="/"><img src="/images/insta/insta_04.jpg" alt="zendvn" /></a></div>
            <div className="col-sm-2 col-xs-6"><a href="/"><img src="/images/insta/insta_05.jpg" alt="zendvn" /></a></div>
            <div className="col-sm-2 col-xs-6"><a href="/"><img src="/images/insta/insta_06.jpg" alt="zendvn" /></a></div>
            <div className="col-sm-2 col-xs-6"><a href="/"><img src="/images/insta/insta_07.jpg" alt="zendvn" /></a></div>
            <div className="col-sm-2 col-xs-6"><a href="/"><img src="/images/insta/insta_08.jpg" alt="zendvn" /></a></div>
            <div className="col-sm-2 col-xs-6"><a href="/"><img src="/images/insta/insta_09.jpg" alt="zendvn" /></a></div>
            <div className="col-sm-2 col-xs-6"><a href="/"><img src="/images/insta/insta_10.jpg" alt="zendvn" /></a></div>
            <div className="col-sm-2 col-xs-6"><a href="/"><img src="/images/insta/insta_11.jpg" alt="zendvn" /></a></div>
            <div className="col-sm-2 col-xs-6"><a href="/"><img src="/images/insta/insta_12.jpg" alt="zendvn" /></a></div>
          </div>
          <div className="sectio-title">
            <h3 className="mar-0"><a href="/">Follow @ Instagram</a></h3>
          </div>
        </div>
      </div>
      
      <Footer />

      <BackToTop />

      <SearchForm />
    </div>
  )
}