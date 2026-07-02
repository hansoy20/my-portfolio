export const portfolioHtml = `
<style>
  /* 1. Wrap the entire column (text block + subheadings) and center it */
  .elementor-element-bfe2a59 > .elementor-widget-wrap {
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-start !important; /* Left align everything inside */
    width: max-content !important;
    max-width: 100% !important;
    margin: 0 auto !important; /* Center the column on the page */
  }

  /* 2. The main "Hi there / I am Hans" container */
  .elementor-element-19d2dcc {
    width: 100% !important;
    max-width: 100% !important;
  }
  .elementor-element-19d2dcc > .e-con-inner {
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-start !important; /* Left-align the lines to each other */
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
  }

  /* 3. Rows should flow horizontally and wrap/scale gracefully on mobile */
  .elementor-element-3d14e13, .elementor-element-dc90417 {
    display: flex !important;
    flex-direction: row !important;
    flex-wrap: nowrap !important;
    align-items: flex-end !important;
    max-width: 100% !important;
  }
  .elementor-element-dc90417 {
    position: relative !important;
  }
  
  /* Ensure the row containers don't overflow horizontally without causing vertical scrollbars */
  .elementor-element-19d2dcc, .elementor-element-3d14e13, .elementor-element-dc90417 {
    max-width: 100vw !important;
    overflow-x: clip !important;
    overflow-y: visible !important;
  }
  .hero-word-img {
    display: flex !important;
    flex: 0 1 auto !important;
    min-width: 0 !important; /* Let flex children shrink */
  }
  .hero-word-img .elementor-widget-container {
    display: flex !important;
    min-width: 0 !important;
    width: 100% !important;
  }
  .hero-word-img img {
    height: auto !important;
    max-width: 100% !important;
    object-fit: contain !important;


  /* 4. Subheadings left-alignment fixes */
  .elementor-element-90ca0bc,
  .elementor-element-434a3ce {
    align-self: flex-start !important;
    width: 100% !important;
  }
  .elementor-element-434a3ce > .e-con-inner {
    margin: 0 !important; /* Remove auto margin that centers it */
    justify-content: flex-start !important;
    align-items: flex-start !important;
  }
  .elementor-element-90ca0bc .elementor-heading-title,
  .elementor-element-5205627 .elementor-heading-title {
    text-align: left !important;
  }

  /* 5. The Cursor */
  /* Ensure cursor is visible everywhere */
  .elementor-element-ee28250.elementor-hidden-tablet,
  .elementor-element-ee28250.elementor-hidden-mobile {
    display: block !important;
  }
  /* Position the pink cursor absolutely relative to the "Hans" block */
  .elementor-element-ee28250 {
    position: absolute !important;
    top: -30px !important;
    right: -50px !important;
    z-index: 9999 !important;
    width: 80px !important; /* Force dimensions so it doesn't collapse */
    height: 80px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
</style>
 
 
 <div data-elementor-type=page data-elementor-id=5114 className="elementor elementor-5114">
  <div className="elementor-element elementor-element-5844526 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-parent e-lazyloaded" data-id=5844526 data-element_type=container data-e-type=container id=header-hansvz data-settings='{"background_background":"classic","position":"fixed"}' style="justify-content: flex-end !important; padding-right: 32px !important;">
 <div className="elementor-element elementor-element-92f2d9f e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=92f2d9f data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-f56ed3d wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=f56ed3d data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">Based in CDO, Philippines</p> </div>
 </div>
 <div className="elementor-element elementor-element-1eb34d8 time-weather wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=1eb34d8 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default" data-temperature=28>22:34 GMT+8 · 28ºC</p> </div>
 </div>
 </div>
 </div>
 </div>
 <div className=progress-wrap>
 
 </div>
 <div data-elementor-type=wp-page data-elementor-id=22791 className="elementor elementor-22791">
 <section className="wavo-column-gap-default wavo-particles elementor-section elementor-top-section elementor-element elementor-element-8bf15b0 elementor-section-stretched elementor-section-height-full elementor-section-content-bottom elementor-section-boxed elementor-section-height-default elementor-section-items-middle wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no" data-particles-settings='{"type":"nasa","color":"#fff","shape":"circle","number":40,"opacity":0.2,"size":1}' data-particles-id=8bf15b0 data-id=8bf15b0 data-element_type=section data-e-type=section data-settings='{"stretch_section":"section-stretched","background_background":"classic"}' style="width:100%;left:0px"><div id=particles-js_8bf15b0 className=wavo-particles-effect><canvas className=particles-js-canvas-el width=1901 height=912 style="width:100%;height:100%;background-blend-mode:normal!important;background-clip:content-box!important;background-position:center center!important;background-color:rgba(0,0,0,0)!important;background-image:url(/assets/asset_8ecc633a.png)!important;background-size:100% 100%!important;background-origin:content-box!important;background-repeat:no-repeat!important"></canvas></div><div id=particles-js_8bf15b0 className=wavo-particles-effect><canvas className=particles-js-canvas-el width=1901 height=912 style="width:100%;height:100%;background-blend-mode:normal!important;background-clip:content-box!important;background-position:center center!important;background-color:rgba(0,0,0,0)!important;background-image:url(/assets/asset_5631c687.png)!important;background-size:100% 100%!important;background-origin:content-box!important;background-repeat:no-repeat!important"></canvas></div>
 <div className="elementor-container elementor-column-gap-default">
 <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-64df1c4 hero-image" data-id=64df1c4 data-element_type=column data-e-type=column data-settings='{"background_background":"classic"}'>
 <div className="elementor-widget-wrap elementor-element-populated">
 <div className=elementor-background-overlay></div>
 <section className="wavo-column-gap-default elementor-section elementor-inner-section elementor-element elementor-element-bdcdaca elementor-section-boxed elementor-section-height-default wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no" data-id=bdcdaca data-element_type=section data-e-type=section>
 <div className="elementor-container elementor-column-gap-default">
 <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-bfe2a59" data-id=bfe2a59 data-element_type=column data-e-type=column data-settings='{"background_background":"classic"}'>
 <div className="elementor-widget-wrap elementor-element-populated">
 <div className="elementor-element elementor-element-19d2dcc e-flex e-con-boxed wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-parent e-lazyloaded" data-id=19d2dcc data-element_type=container data-e-type=container>
 <div className=e-con-inner>
 <div className="elementor-element elementor-element-3d14e13 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=3d14e13 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-2c357cc hero-word-img hero-word-img1 elementor-widget elementor-widget-image" data-id=2c357cc data-element_type=widget data-e-type=widget data-widget_type=image.default>
 <div className=elementor-widget-container>
 <img decoding=async width=211 height=156 src="/assets/asset_d3c056ec.svg" className="attachment-large size-large wp-image-23448" alt> </div>
 </div>
 <div className="elementor-element elementor-element-272b021 hero-word-img hero-word-img2 elementor-widget elementor-widget-image" data-id=272b021 data-element_type=widget data-e-type=widget data-widget_type=image.default>
 <div className=elementor-widget-container>
 <img fetchPriority=high decoding=async width=569 height=156 src=/assets/asset_27ae7ab1.svg className="attachment-large size-large wp-image-23449" alt> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-dc90417 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=dc90417 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-db6969b hero-word-img hero-word-img3 elementor-widget elementor-widget-image" data-id=db6969b data-element_type=widget data-e-type=widget data-widget_type=image.default>
 <div className=elementor-widget-container>
 <img loading=lazy decoding=async width=51 height=149 src="/assets/asset_31a6caa5.svg" className="attachment-large size-large wp-image-23450" alt> </div>
 </div>
 <div className="elementor-element elementor-element-8f237d1 hero-word-img hero-word-img4 elementor-widget elementor-widget-image" data-id=8f237d1 data-element_type=widget data-e-type=widget data-widget_type=image.default>
 <div className=elementor-widget-container>
 <img loading=lazy decoding=async width=260 height=149 src="/assets/asset_ebeac8df.svg" className="attachment-large size-large wp-image-23451" alt> </div>
 </div>
 <div className="elementor-element elementor-element-44ec052 hero-word-img hero-word-img5 elementor-widget elementor-widget-image" data-id=44ec052 data-element_type=widget data-e-type=widget data-widget_type=image.default>
 <div className=elementor-widget-container>
 <img loading=lazy decoding=async width=340 height=150 src="/assets/asset_ead91aab.svg" className="attachment-large size-large wp-image-23452" alt> </div>
 </div>
 <div className="hero-word-img" style="align-self: flex-end; margin-left: 8px; margin-bottom: clamp(10px, 2vw, 20px); flex-shrink: 0;">
   <div className="pink-dot" style="width: clamp(16px, 3vw, 24px); height: clamp(16px, 3vw, 24px); background-color: #E93C70;"></div>
 </div>
 <div className="elementor-element elementor-element-ee28250 elementor-absolute wpr-lottie-svg elementor-widget elementor-widget-wpr-lottie-animations animated slideInRight" data-id=ee28250 data-element_type=widget data-e-type=widget data-settings='{"json_file":{"url":"https:\/\/hansvz.com\/wp-content\/uploads\/2025\/12\/cursor-hansvz-2026-vectors.json","id":24553,"size":"","alt":"","source":"library"},"_position":"absolute","_animation_delay":2100,"_animation":"slideInRight","trigger":"none"}' data-widget_type=wpr-lottie-animations.default>
 <div className=elementor-widget-container>
 <div className=wpr-lottie-animations-wrapper><div className=wpr-lottie-animations data-settings='{"loop":"yes","autoplay":"yes","speed":0.7,"trigger":"none","reverse":"","scroll_start":"0","scroll_end":"100","lottie_renderer":"svg"}' data-json-url=https://hansvz.com/wp-content/uploads/2025/12/cursor-hansvz-2026-vectors.json></div></div> </div>
 </div>
 </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-eabacc4 elementor-widget elementor-widget-spacer" data-id=eabacc4 data-element_type=widget data-e-type=widget data-widget_type=spacer.default>
 <div className=elementor-widget-container>
 <div className=elementor-spacer>
 <div className=elementor-spacer-inner></div>
 </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-90ca0bc wavo-stroke wavo-has-stroke-yes wavo-has-stroke-type stroke-type-part hero-word wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=90ca0bc data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <h2 className="elementor-heading-title elementor-size-default">BS in <span className=hl-text>Computer Science</span></h2> </div>
 </div>
 <div className="elementor-element elementor-element-434a3ce e-flex e-con-boxed wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-parent e-lazyloaded" data-id=434a3ce data-element_type=container data-e-type=container>
 <div className=e-con-inner>
 <div className="elementor-element elementor-element-5205627 wavo-stroke wavo-has-stroke-yes wavo-has-stroke-type stroke-type-part hero-word wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=5205627 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <h2 className="elementor-heading-title elementor-size-default"><span className=hl-text>Aspiring Software Engineer</span>
</h2> </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 </div>
 </div>
 </div>
 </section>
 <div id="projects" className="elementor-element elementor-element-189d738 e-flex e-con-boxed wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-parent e-lazyloaded" data-id=189d738 data-element_type=container data-e-type=container data-settings='{"background_background":"classic"}'>
 <div className=e-con-inner>
 <div className="elementor-element elementor-element-3dc9bd8 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=3dc9bd8 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-7f08b25 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=7f08b25 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <h1 className="elementor-heading-title elementor-size-default">Projects<span style=color:#DE5E91>.</span></h1> </div>
 </div>
 <div className="elementor-element elementor-element-af4b712 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=af4b712 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-74273aa e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=74273aa data-element_type=container data-e-type=container>
 <div data-premium-element-link='{"type":"url","link":{"url":"https:\/\/hansvz.com\/projects\/mustache-ds\/","is_external":"","nofollow":"","custom_attributes":""},"href":"https:\/\/hansvz.com\/projects\/mustache-ds\/"}' style=cursor:pointer className="elementor-element elementor-element-6fda5f6 e-con-full arrow-card border-dvz premium-wrapper-link-yes e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=6fda5f6 data-element_type=container data-e-type=container data-settings='{"background_background":"classic"}'><a href="https://kaboooom.vercel.app/" target="_blank" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 10;"></a>
 <div className="elementor-element elementor-element-10a7389 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=10a7389 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-9ed209c elementor-widget elementor-widget-image" data-id=9ed209c data-element_type=widget data-e-type=widget data-widget_type=image.default>
 <div className=elementor-widget-container>
 <img loading="lazy" decoding="async" src="/assets/kabooom_logo.png" style="object-fit: contain; width: 100%; max-height: 400px; padding: 20px;" alt="Kabooom"> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-4c112d8 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=4c112d8 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-111b6f8 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=111b6f8 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-000204e e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=000204e data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-0a24185 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=0a24185 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <h4 className="elementor-heading-title elementor-size-default">Kabooom</h4> </div>
 </div>
 <div className="elementor-element elementor-element-aa87f2a wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=aa87f2a data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <h2 className="elementor-heading-title elementor-size-default">Engineered a scalable real-time multiplayer word game with modern full-stack technologies.</h2> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-d6af60f elementor-view-default elementor-widget elementor-widget-icon" data-id=d6af60f data-element_type=widget data-e-type=widget data-widget_type=icon.default>
 <div className=elementor-widget-container>
 <div className=elementor-icon-wrapper>
 <div className=elementor-icon>
  </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 <div data-premium-element-link='{"type":"url","link":{"url":"https:\/\/hansvz.com\/projects\/rappimix","is_external":"","nofollow":"","custom_attributes":""},"href":"https:\/\/hansvz.com\/projects\/rappimix"}' style=cursor:pointer className="elementor-element elementor-element-b3d0192 e-con-full arrow-card border-dvz premium-wrapper-link-yes e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=b3d0192 data-element_type=container data-e-type=container data-settings='{"background_background":"classic"}'><a href="https://barangay-complaint.vercel.app/login" target="_blank" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 10;"></a>
 <div className="elementor-element elementor-element-8f61ca4 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=8f61ca4 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-f9c9118 elementor-widget elementor-widget-image" data-id=f9c9118 data-element_type=widget data-e-type=widget data-widget_type=image.default>
 <div className=elementor-widget-container>
 <img loading="lazy" decoding="async" src="/assets/bcs_logo.png" style="object-fit: contain; width: 100%; max-height: 400px; padding: 20px;" alt="Barangay Complaint System"> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-a37453a e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=a37453a data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-e74b9f7 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=e74b9f7 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-9393a3a e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=9393a3a data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-30ac688 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=30ac688 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <h4 className="elementor-heading-title elementor-size-default">Barangay Complaint System</h4> </div>
 </div>
 <div className="elementor-element elementor-element-5d9319f wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=5d9319f data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <h2 className="elementor-heading-title elementor-size-default">File and track complaints in your community.</h2> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-0c5776c elementor-view-default elementor-widget elementor-widget-icon" data-id=0c5776c data-element_type=widget data-e-type=widget data-widget_type=icon.default>
 <div className=elementor-widget-container>
 <div className=elementor-icon-wrapper>
 <div className=elementor-icon>
  </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-dc5c9e1 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=dc5c9e1 data-element_type=container data-e-type=container>
 <div data-premium-element-link='{"type":"url","link":{"url":"https:\/\/hansvz.com\/projects\/rappi-new-add-to-cart","is_external":"","nofollow":"","custom_attributes":""},"href":"https:\/\/hansvz.com\/projects\/rappi-new-add-to-cart"}' style=cursor:pointer className="elementor-element elementor-element-4e03b6e e-con-full arrow-card border-dvz premium-wrapper-link-yes e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=4e03b6e data-element_type=container data-e-type=container data-settings='{"background_background":"classic"}'>
 <div className="elementor-element elementor-element-5fcd50e e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=5fcd50e data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-b98e23b elementor-widget elementor-widget-image" data-id=b98e23b data-element_type=widget data-e-type=widget data-widget_type=image.default>
 <div className=elementor-widget-container>
 <img loading=lazy decoding=async width=704 height=1412 src=/assets/asset_6cb67268.webp className="attachment-full size-full wp-image-22840" alt srcset sizes> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-5987617 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=5987617 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-e029820 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=e029820 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-bbfdba0 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=bbfdba0 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-ba81e7c wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=ba81e7c data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <h4 className="elementor-heading-title elementor-size-default">Future Project 1</h4> </div>
 </div>
 <div className="elementor-element elementor-element-cd31439 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=cd31439 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <h2 className="elementor-heading-title elementor-size-default">Coming soon... project details will be added here.</h2> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-d6ba374 elementor-view-default elementor-widget elementor-widget-icon" data-id=d6ba374 data-element_type=widget data-e-type=widget data-widget_type=icon.default>
 <div className=elementor-widget-container>
 <div className=elementor-icon-wrapper>
 <div className=elementor-icon>
  </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 <div data-premium-element-link='{"type":"url","link":{"url":"https:\/\/hansvz.com\/projects\/roostfy","is_external":"","nofollow":"","custom_attributes":""},"href":"https:\/\/hansvz.com\/projects\/roostfy"}' style=cursor:pointer className="elementor-element elementor-element-e349c97 e-con-full arrow-card border-dvz premium-wrapper-link-yes e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=e349c97 data-element_type=container data-e-type=container data-settings='{"background_background":"classic"}'>
 <div className="elementor-element elementor-element-6dea809 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=6dea809 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-361eaf7 elementor-widget elementor-widget-image" data-id=361eaf7 data-element_type=widget data-e-type=widget data-widget_type=image.default>
 <div className=elementor-widget-container>
 <img loading=lazy decoding=async width=705 height=1416 src="/assets/asset_c3ad10e1.webp" className="attachment-full size-full wp-image-22842" alt srcset sizes> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-1ec4e48 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=1ec4e48 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-3e17602 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=3e17602 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-e42ed18 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=e42ed18 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-c8ec9c2 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=c8ec9c2 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <h4 className="elementor-heading-title elementor-size-default">Future Project 2</h4> </div>
 </div>
 <div className="elementor-element elementor-element-0fd1724 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=0fd1724 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <h2 className="elementor-heading-title elementor-size-default">Coming soon... project details will be added here.</h2> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-4569750 elementor-view-default elementor-widget elementor-widget-icon" data-id=4569750 data-element_type=widget data-e-type=widget data-widget_type=icon.default>
 <div className=elementor-widget-container>
 <div className=elementor-icon-wrapper>
 <div className=elementor-icon>
  </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-d9a4d53 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=d9a4d53 data-element_type=container data-e-type=container>
 <div data-premium-element-link='{"type":"url","link":{"url":"https:\/\/hansvz.com\/projects\/clash-royale-reactions","is_external":"","nofollow":"","custom_attributes":""},"href":"https:\/\/hansvz.com\/projects\/clash-royale-reactions"}' style=cursor:pointer className="elementor-element elementor-element-8548906 e-con-full arrow-card border-dvz premium-wrapper-link-yes e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=8548906 data-element_type=container data-e-type=container data-settings='{"background_background":"classic"}'>
 <div className="elementor-element elementor-element-c6e5cf3 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=c6e5cf3 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-9c9c9db e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=9c9c9db data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-e94c4f6 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=e94c4f6 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <h2 className="elementor-heading-title elementor-size-default">Future Project 3</h2> </div>
 </div>
 <div className="elementor-element elementor-element-3dd9709 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=3dd9709 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <h2 className="elementor-heading-title elementor-size-default">Coming soon... project details will be added here.</h2> </div>
 </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-4623ff2 elementor-view-default elementor-widget elementor-widget-icon" data-id=4623ff2 data-element_type=widget data-e-type=widget data-widget_type=icon.default>
 <div className=elementor-widget-container>
 <div className=elementor-icon-wrapper>
 <div className=elementor-icon>
  </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-01dbacf e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=01dbacf data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-de82a8a wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=de82a8a data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <h1 className="elementor-heading-title elementor-size-default">Skills<span style=color:#DE5E91>.</span></h1> </div>
 </div>
 <div className="elementor-element elementor-element-d072fa1 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=d072fa1 data-element_type=container data-e-type=container>
 <div data-premium-element-link='{"type":"url","link":{"url":"https:\/\/medium.com\/user-experience-design-1\/raaee-the-ultimate-tracking-framework-for-your-product-features-fe2f291cad5d","is_external":"on","nofollow":"","custom_attributes":""},"href":"https:\/\/medium.com\/user-experience-design-1\/raaee-the-ultimate-tracking-framework-for-your-product-features-fe2f291cad5d"}' style=cursor:pointer className="elementor-element elementor-element-e94621c e-con-full arrow-card border-dvz tooltip-dvz premium-wrapper-link-yes e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=e94621c data-element_type=container data-e-type=container id=tooltip-medium data-settings='{"background_background":"classic"}'>
 <div className="elementor-element elementor-element-4e09bae title_blog-post wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=4e09bae data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">RAAEE: The ultimate tracking framework for your product features</p> </div>
 </div>
 <div className="elementor-element elementor-element-3a9ed33 desc_blog-post wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=3a9ed33 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">Most teams only look at “what users click”, but that’s just the tip of the iceberg. Every day, we make design decisions without seeing the whole picture. We go by assumptions, internal opinions, or superficial metrics. </p> </div>
 </div>
 <div className="elementor-element elementor-element-8d408bf e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=8d408bf data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-e79b90a elementor-widget elementor-widget-spacer" data-id=e79b90a data-element_type=widget data-e-type=widget data-widget_type=spacer.default>
 <div className=elementor-widget-container>
 <div className=elementor-spacer>
 <div className=elementor-spacer-inner></div>
 </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-6a00160 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=6a00160 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-cc19348 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=cc19348 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-43a35d0 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=43a35d0 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-cad86cd wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=cad86cd data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">Jun 29</p> </div>
 </div>
 <div className="elementor-element elementor-element-c05752b e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=c05752b data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-026fb8e elementor-widget elementor-widget-image" data-id=026fb8e data-element_type=widget data-e-type=widget data-widget_type=image.default>
 <div className=elementor-widget-container>
 <img loading=lazy decoding=async width=16 height=16 src="/assets/asset_14497666.svg" className="attachment-large size-large wp-image-24454" alt> </div>
 </div>
 <div className="elementor-element elementor-element-ecb6fad wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=ecb6fad data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">645</p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-e191dbf e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=e191dbf data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-2e68cbe elementor-widget elementor-widget-image" data-id=2e68cbe data-element_type=widget data-e-type=widget data-widget_type=image.default>
 <div className=elementor-widget-container>
 <img loading=lazy decoding=async width=16 height=16 src="/assets/asset_72e14e21.svg" className="attachment-large size-large wp-image-24455" alt> </div>
 </div>
 <div className="elementor-element elementor-element-3745eff wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=3745eff data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">7</p> </div>
 </div>
 </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-92b4556 elementor-view-default elementor-widget elementor-widget-icon" data-id=92b4556 data-element_type=widget data-e-type=widget data-widget_type=icon.default>
 <div className=elementor-widget-container>
 <div className=elementor-icon-wrapper>
 <div className=elementor-icon>
  </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 <div data-premium-element-link='{"type":"url","link":{"url":"https:\/\/medium.com\/user-experience-design-1\/dont-change-your-app-every-month-3f2bbc307470","is_external":"on","nofollow":"","custom_attributes":""},"href":"https:\/\/medium.com\/user-experience-design-1\/dont-change-your-app-every-month-3f2bbc307470"}' style=cursor:pointer className="elementor-element elementor-element-9415add e-con-full arrow-card border-dvz tooltip-dvz premium-wrapper-link-yes e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=9415add data-element_type=container data-e-type=container id=tooltip-medium data-settings='{"background_background":"classic"}'>
 <div className="elementor-element elementor-element-8e4c891 title_blog-post wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=8e4c891 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">Don’t change your app every month</p> </div>
 </div>
 <div className="elementor-element elementor-element-da1a8b8 desc_blog-post wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=da1a8b8 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">Redesigning constantly doesn’t make your product better. It makes it harder to use and easier to forget. In many startups, there’s an unsettling ritual: every month brings a redesign, a new feature set, or a completely reinvented flow.</p> </div>
 </div>
 <div className="elementor-element elementor-element-78930a5 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=78930a5 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-753c91a elementor-widget elementor-widget-spacer" data-id=753c91a data-element_type=widget data-e-type=widget data-widget_type=spacer.default>
 <div className=elementor-widget-container>
 <div className=elementor-spacer>
 <div className=elementor-spacer-inner></div>
 </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-f9b123e e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=f9b123e data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-a9a0604 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=a9a0604 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-6aef15c e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=6aef15c data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-19d5771 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=19d5771 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">May 14</p> </div>
 </div>
 <div className="elementor-element elementor-element-d2c8d14 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=d2c8d14 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-80c5b49 elementor-widget elementor-widget-image" data-id=80c5b49 data-element_type=widget data-e-type=widget data-widget_type=image.default>
 <div className=elementor-widget-container>
 <img loading=lazy decoding=async width=16 height=16 src="/assets/asset_14497666.svg" className="attachment-large size-large wp-image-24454" alt> </div>
 </div>
 <div className="elementor-element elementor-element-86fe3ba wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=86fe3ba data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">493</p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-ee980bd e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=ee980bd data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-a9eda98 elementor-widget elementor-widget-image" data-id=a9eda98 data-element_type=widget data-e-type=widget data-widget_type=image.default>
 <div className=elementor-widget-container>
 <img loading=lazy decoding=async width=16 height=16 src="/assets/asset_72e14e21.svg" className="attachment-large size-large wp-image-24455" alt> </div>
 </div>
 <div className="elementor-element elementor-element-7377ee6 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=7377ee6 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">1</p> </div>
 </div>
 </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-68921a2 elementor-view-default elementor-widget elementor-widget-icon" data-id=68921a2 data-element_type=widget data-e-type=widget data-widget_type=icon.default>
 <div className=elementor-widget-container>
 <div className=elementor-icon-wrapper>
 <div className=elementor-icon>
  </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 <div data-premium-element-link='{"type":"url","link":{"url":"https:\/\/hansvz.medium.com\/","is_external":"on","nofollow":"","custom_attributes":""},"href":"https:\/\/hansvz.medium.com\/"}' style=cursor:pointer className="elementor-element elementor-element-b2b6f61 e-con-full arrow-card border-dvz premium-wrapper-link-yes elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child sf-hidden" data-id=b2b6f61 data-element_type=container data-e-type=container data-settings='{"background_background":"classic"}'>
 
 
 </div>
 <div data-premium-element-link='{"type":"url","link":{"url":"https:\/\/hansvz.medium.com\/","is_external":"on","nofollow":"","custom_attributes":""},"href":"https:\/\/hansvz.medium.com\/"}' style=cursor:pointer className="elementor-element elementor-element-1ba444c e-con-full arrow-card border-dvz tooltip-dvz premium-wrapper-link-yes e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=1ba444c data-element_type=container data-e-type=container id=tooltip-medium-more data-settings='{"background_background":"classic"}'>
 <div className="elementor-element elementor-element-1565c33 title_blog-post wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=1565c33 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">More articles</p> </div>
 </div>
 <div className="elementor-element elementor-element-2b756e4 elementor-widget elementor-widget-html" data-id=2b756e4 data-element_type=widget data-e-type=widget data-widget_type=html.default>
 <div className=elementor-widget-container>
 <div className=dvz-all-articles>
 
 <div className="dvz-grad grad-left base"></div>
 <div className="dvz-grad grad-right base"></div>
 
 <div className="dvz-grad grad-left hover"></div>
 <div className="dvz-grad grad-right hover"></div>
 
 
 <div className="dvz-track track-1">
 <div className=dvz-inner>
 
 <div className=dvz-row>
 
 <div className=dvz-item><div className=dvz-title></div><div className=dvz-line1></div><div className=dvz-line2></div></div>
 <div className=dvz-item><div className=dvz-title></div><div className=dvz-line1></div><div className=dvz-line2></div></div>
 <div className=dvz-item><div className=dvz-title></div><div className=dvz-line1></div><div className=dvz-line2></div></div>
 <div className=dvz-item><div className=dvz-title></div><div className=dvz-line1></div><div className=dvz-line2></div></div>
 <div className=dvz-item><div className=dvz-title></div><div className=dvz-line1></div><div className=dvz-line2></div></div>
 <div className=dvz-item><div className=dvz-title></div><div className=dvz-line1></div><div className=dvz-line2></div></div>
 <div className=dvz-item><div className=dvz-title></div><div className=dvz-line1></div><div className=dvz-line2></div></div>
 </div>
 
 <div className=dvz-row>
 
 <div className=dvz-item><div className=dvz-title></div><div className=dvz-line1></div><div className=dvz-line2></div></div>
 <div className=dvz-item><div className=dvz-title></div><div className=dvz-line1></div><div className=dvz-line2></div></div>
 <div className=dvz-item><div className=dvz-title></div><div className=dvz-line1></div><div className=dvz-line2></div></div>
 <div className=dvz-item><div className=dvz-title></div><div className=dvz-line1></div><div className=dvz-line2></div></div>
 <div className=dvz-item><div className=dvz-title></div><div className=dvz-line1></div><div className=dvz-line2></div></div>
 <div className=dvz-item><div className=dvz-title></div><div className=dvz-line1></div><div className=dvz-line2></div></div>
 <div className=dvz-item><div className=dvz-title></div><div className=dvz-line1></div><div className=dvz-line2></div></div>
 </div>
 </div>
 </div>
 
 <div className="dvz-track track-2">
 <div className=dvz-inner>
 
 <div className=dvz-row>
 
 <div className=dvz-item><div className=dvz-title></div><div className=dvz-line1></div><div className=dvz-line2></div></div>
 <div className=dvz-item><div className=dvz-title></div><div className=dvz-line1></div><div className=dvz-line2></div></div>
 <div className=dvz-item><div className=dvz-title></div><div className=dvz-line1></div><div className=dvz-line2></div></div>
 <div className=dvz-item><div className=dvz-title></div><div className=dvz-line1></div><div className=dvz-line2></div></div>
 <div className=dvz-item><div className=dvz-title></div><div className=dvz-line1></div><div className=dvz-line2></div></div>
 <div className=dvz-item><div className=dvz-title></div><div className=dvz-line1></div><div className=dvz-line2></div></div>
 <div className=dvz-item><div className=dvz-title></div><div className=dvz-line1></div><div className=dvz-line2></div></div>
 </div>
 
 <div className=dvz-row>
 
 <div className=dvz-item><div className=dvz-title></div><div className=dvz-line1></div><div className=dvz-line2></div></div>
 <div className=dvz-item><div className=dvz-title></div><div className=dvz-line1></div><div className=dvz-line2></div></div>
 <div className=dvz-item><div className=dvz-title></div><div className=dvz-line1></div><div className=dvz-line2></div></div>
 <div className=dvz-item><div className=dvz-title></div><div className=dvz-line1></div><div className=dvz-line2></div></div>
 <div className=dvz-item><div className=dvz-title></div><div className=dvz-line1></div><div className=dvz-line2></div></div>
 <div className=dvz-item><div className=dvz-title></div><div className=dvz-line1></div><div className=dvz-line2></div></div>
 <div className=dvz-item><div className=dvz-title></div><div className=dvz-line1></div><div className=dvz-line2></div></div>
 </div>
 </div>
 </div>
 
</div>
 </div>
 </div>
 <div className="elementor-element elementor-element-60e4eeb e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=60e4eeb data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-f02fc37 elementor-view-default elementor-widget elementor-widget-icon" data-id=f02fc37 data-element_type=widget data-e-type=widget data-widget_type=icon.default>
 <div className=elementor-widget-container>
 <div className=elementor-icon-wrapper>
 <div className=elementor-icon>
  </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-74d565c e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=74d565c data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-f88612b wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=f88612b data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <h1 className="elementor-heading-title elementor-size-default">About Me<span style=color:#DE5E91>.</span></h1> </div>
 </div>
 <div className="elementor-element elementor-element-73a8422 elementor-widget elementor-widget-html" data-id=73a8422 data-element_type=widget data-e-type=widget data-widget_type=html.default>
 <div className=elementor-widget-container>
 <div className=bento-wrapper>
 <div className=my-story-bento>
 
 
 
 
 
 <div className="bento-slot bento-slot-1" data-slot=1>
 <div className=slot1-content>
 
 <div className=slot1-carousel>
 <div className=slot1-timeline-line></div>
 <div className=slot1-carousel-track style=transform:translateY(-105.6px)>
 
 
 <div className=slot1-item>
 <div className=slot1-dot></div>
 <div className=slot1-card>
 <h4 className=slot1-card-title>$1 billion raised</h4>
 <p className=slot1-card-description>From Sequoia Capital.</p>
 </div>
 </div>
 <div className=slot1-item>
 <div className=slot1-dot></div>
 <div className=slot1-card>
 <h4 className=slot1-card-title>Rappi reaches 100M+ downloads</h4>
 <p className=slot1-card-description>Mass adoption across LATAM.</p>
 </div>
 </div>
 <div className=slot1-item>
 <div className=slot1-dot></div>
 <div className=slot1-card>
 <h4 className=slot1-card-title>Turbo delivery launch</h4>
 <p className=slot1-card-description>10–15 min deliveries.</p>
 </div>
 </div>
 <div className=slot1-item>
 <div className=slot1-dot></div>
 <div className=slot1-card>
 <h4 className=slot1-card-title>30M+ monthly active users</h4>
 <p className=slot1-card-description>One of the most used apps in LATAM.</p>
 </div>
 </div>
 <div className=slot1-item>
 <div className=slot1-dot></div>
 <div className=slot1-card>
 <h4 className=slot1-card-title>Building design orgs</h4>
 <p className=slot1-card-description>From ICs to solid leaders.</p>
 </div>
 </div>
 <div className=slot1-item>
 <div className=slot1-dot></div>
 <div className=slot1-card>
 <h4 className=slot1-card-title>Global Design System rollout</h4>
 <p className=slot1-card-description>Multi-product and multi-device.</p>
 </div>
 </div>
 
 <div className=slot1-item>
 <div className=slot1-dot></div>
 <div className=slot1-card>
 <h4 className=slot1-card-title>$1 billion raised</h4>
 <p className=slot1-card-description>From Sequoia Capital.</p>
 </div>
 </div>
 <div className=slot1-item>
 <div className=slot1-dot></div>
 <div className=slot1-card>
 <h4 className=slot1-card-title>Rappi reaches 100M+ downloads</h4>
 <p className=slot1-card-description>Mass adoption across LATAM.</p>
 </div>
 </div>
 <div className=slot1-item>
 <div className=slot1-dot></div>
 <div className=slot1-card>
 <h4 className=slot1-card-title>Turbo delivery launch</h4>
 <p className=slot1-card-description>10–15 min deliveries.</p>
 </div>
 </div>
 <div className=slot1-item>
 <div className=slot1-dot></div>
 <div className=slot1-card>
 <h4 className=slot1-card-title>30M+ monthly active users</h4>
 <p className=slot1-card-description>One of the most used apps in LATAM.</p>
 </div>
 </div>
 <div className=slot1-item>
 <div className=slot1-dot></div>
 <div className=slot1-card>
 <h4 className=slot1-card-title>Building design orgs</h4>
 <p className=slot1-card-description>From ICs to solid leaders.</p>
 </div>
 </div>
 <div className=slot1-item>
 <div className=slot1-dot></div>
 <div className=slot1-card>
 <h4 className=slot1-card-title>Global Design System rollout</h4>
 <p className=slot1-card-description>Multi-product and multi-device.</p>
 </div>
 </div>
 </div>
 </div>
 <div className=slot1-text-block>
 <h3 className=slot1-title>5 years leading design at Rappi</h3>
 <p className=slot1-description>Leading high-performance, remote design teams across multiple countries.</p>
 </div>
</div>
 </div>
 
 
 
 
 
 <div className="bento-slot bento-slot-2" data-slot=2>
 <div className=slot2-content>
 <div className=slot2-pattern>
 <canvas id=slot2-canvas width=488 height=216 style="background-blend-mode:normal!important;background-clip:content-box!important;background-position:center center!important;background-color:rgba(0,0,0,0)!important;background-image:url(/assets/asset_dad14ad9.png)!important;background-size:100% 100%!important;background-origin:content-box!important;background-repeat:no-repeat!important"></canvas>
 <div className="slot2-clear-btn flex items-center justify-center cursor-pointer" style="pointer-events:auto">Clear</div>
 <div className="slot2-brush-cursor sf-hidden"></div>
 
 </div>
 <div className=slot2-text-block>
 <h3 className=slot2-title>I started as illustrator</h3>
 <p className=slot2-description>But I’ve drawn enough already, now it’s your turn!</p>
 
 </div>
 </div>
 </div>
 
 
 
 
 
 <div className="bento-slot bento-slot-3" data-slot=3>
 <div className=slot3-content>
 
 <div className=slot3-terminal>
 
 <div className=terminal-header>
 <span className="terminal-dot red"></span>
 <span className="terminal-dot yellow"></span>
 <span className="terminal-dot green"></span>
 </div>
 
 <div className=terminal-spacing-4></div>
 
 <div className=terminal-body>
 
 <div className=terminal-command>&gt; pnpm hansvz@skills init</div>
 
 <div className=terminal-spacing-12></div>
 
 <div className=terminal-check-line>
 <img decoding=async src="/assets/asset_aa01b50a.svg" alt className=terminal-check-icon>
 <span>Loaded childhood.exe.</span>
 </div>
 <div className=terminal-check-line>
 <img decoding=async src="/assets/asset_aa01b50a.svg" alt className=terminal-check-icon>
 <span>Cached 4 fullstack years.</span>
 </div>
 <div className=terminal-check-line>
 <img decoding=async src="/assets/asset_aa01b50a.svg" alt className=terminal-check-icon>
 <span>Rendering design career.</span>
 </div>
 <div className=terminal-check-line>
 <img decoding=async src="/assets/asset_aa01b50a.svg" alt className=terminal-check-icon>
 <span>Removing imposter module.</span>
 </div>
 
 <div className=terminal-spacing-12></div>
 
 <div className=terminal-success>
 Success! Skills deployed.<span className=terminal-cursor>▌</span>
 </div>
 </div>
 </div>
 
 <div className=slot3-text-block>
 <h3 className=slot3-title>I used to code</h3>
 <p className=slot3-description>During 4 years as fullstack.</p>
 </div>
</div>
</div>
 
 
 <div className="bento-slot bento-slot-4" data-slot=4>
 <div id=slot-middle-words>
 <div className="word thinker">
 
 </div>
 <div className="word designer">
 
 </div>
 <div className="word builder">
 
 </div>
</div>
 </div>
 
 
 
 <div className="bento-slot bento-slot-5" data-slot=5>
 <div className=slot5-container>
 
 <div className="slot5-gif-wrapper tooltip-dvz" id=tooltip-song>
 <img decoding=async src="/assets/asset_8eca41bf.webp" alt=cover className=slot5-gif>
 </div>
 
 <div className=slot5-player>
 
 <div className=slot5-left>
 
 <div className=slot5-header>
 <span className=slot5-title>
 Lost Verdania · Christopher Larkin
 </span>
 </div>
 
 <div className=slot5-progress-block>
 <input type=range className=slot5-progress value=0 min=0 max=202 style=--slot5-progress-fill:0%>
 <span className="slot5-time slot5-current-time">0:00</span>
 </div>
 </div>
 
 <button className=slot5-play-btn>
 <img decoding=async src="/assets/asset_4eafe034.svg" className=slot5-play-icon>
 <img decoding=async src=data:, className="slot5-pause-icon sf-hidden">
 </button>
 
 <audio id=slot5-audio className=sf-hidden>
 </audio>
 </div>
</div>
 
 </div>
 
 
 
 
 <div className="bento-slot bento-slot-6" data-slot=6>
 <div className=slot6-content>
 <div className=slot6-image-wrapper>
 <img decoding=async src=/assets/asset_9a8a8861.webp alt="World map" className=slot6-image>
 </div>
 <div className=slot6-text-block>
 <h3 className=slot6-title>I shipped two apps to 80+ countries</h3>
 <p className=slot6-description>Getting 5M+ downloads with a 4+ star rating.</p>
 </div>
 </div>
</div>
 
 
 
 
 <div className="bento-slot bento-slot-7" data-slot=7>
 <div className=slot7-content>
 <div className=slot7-pattern>
 
 <div className=slot7-toolbar>
 <button data-shape=square>
 <img decoding=async src="/assets/asset_f7d0d58e.svg" alt>
 </button>
 <button data-shape=circle>
 <img decoding=async src="/assets/asset_223da484.svg" alt>
 </button>
 <button data-shape=triangle>
 <img decoding=async src="/assets/asset_f4c5aba6.svg" alt>
 </button>
 <button data-shape=star>
 <img decoding=async src=/assets/asset_88852799.svg alt>
 </button>
 </div>
 
 <div className=slot7-shape-layer></div>
 
 <div className=slot7-dzg-wrapper>
 <img decoding=async className=slot7-dzg-inner src="/assets/asset_9805ffda.webp">
 </div>
 <div className=slot7-cursor-wrapper style=transform:translate(0px,0px)><div className="slot7-cursor-inner sf-hidden"></div></div></div>
 <div className=slot7-text-block>
 <h3 className=slot7-title>Hands-on design leader</h3>
 <p className=slot7-description>I lead by example, staying close to my team, the craft and the product.</p>
 </div>
</div>
 </div>
 </div>
</div>
 </div>
 </div>
 <div className="elementor-element elementor-element-a5514d5 elementor-widget elementor-widget-html" data-id=a5514d5 data-element_type=widget data-e-type=widget data-widget_type=html.default>
 <div className=elementor-widget-container>
 <div id=floating-player className="floating-player hidden">
 <button className=floating-close-btn suppressHydrationWarning="true">
 <img loading=lazy decoding=async src=/assets/asset_2a4d6f73.svg alt=close width=24 height=24>
 </button>
 <div className=floating-center>
 <span className="slot5-title floating-title">Lost Verdania · Christopher Larkin</span>
 <div className="slot5-progress-block floating-progress-block">
 <input type=range className="slot5-progress floating-progress" value=0 min=0 max=202.527347 style=--slot5-progress-fill:0%>
 <span className="slot5-current-time floating-current-time">0:00</span>
 </div>
 </div>
 <button className="slot5-play-btn floating-play-btn" suppressHydrationWarning="true">
 <img decoding=async src="/assets/asset_4eafe034.svg" className=slot5-play-icon>
 <img decoding=async src=data:, className="slot5-pause-icon sf-hidden">
 </button>
</div>
 </div>
 </div>
 <div className="elementor-element elementor-element-b6148a3 e-con-full elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child sf-hidden" data-id=b6148a3 data-element_type=container data-e-type=container>
 
 
 </div>
 </div>
 <div className="elementor-element elementor-element-024b67c e-con-full underline-dvz e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=024b67c data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-d510204 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=d510204 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <h1 className="elementor-heading-title elementor-size-default">Education<span style=color:#DE5E91>.</span></h1> </div>
 </div>
 <div className="elementor-element elementor-element-7ffe1f5 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=7ffe1f5 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-489a633 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=489a633 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-0bd4263 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=0bd4263 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-4020de2 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=4020de2 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-8857cb8 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=8857cb8 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">Master in Business Adminstration (MBA)</p> </div>
 </div>
 <div className="elementor-element elementor-element-bfc9485 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=bfc9485 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-9533f23 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=9533f23 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">ThePowerMBA</p> </div>
 </div>
 <div className="elementor-element elementor-element-ae576f0 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=ae576f0 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">·</p> </div>
 </div>
 <div className="elementor-element elementor-element-a6f7693 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=a6f7693 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default"><a href=https://verified.sertifier.com/es/verify/37562274638607 target=_blank>Credentials</a></p> </div>
 </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-c8af234 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=c8af234 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default"><span className=num>2020</span></p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-dc461ef elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id=dc461ef data-element_type=widget data-e-type=widget data-widget_type=divider.default>
 <div className=elementor-widget-container>
 <div className=elementor-divider>
 <span className=elementor-divider-separator>
 </span>
 </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-4c3eccd e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=4c3eccd data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-ad1fc83 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=ad1fc83 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-0fe785d wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=0fe785d data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">UX Research: Methods and best practices</p> </div>
 </div>
 <div className="elementor-element elementor-element-de7d32f wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=de7d32f data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">Interaction Design Foundation</p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-2ec0d1f wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=2ec0d1f data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default"><span className=num>2020</span></p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-462ba2a elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id=462ba2a data-element_type=widget data-e-type=widget data-widget_type=divider.default>
 <div className=elementor-widget-container>
 <div className=elementor-divider>
 <span className=elementor-divider-separator>
 </span>
 </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-d3fb982 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=d3fb982 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-4c35103 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=4c35103 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-5386659 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=5386659 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">Gestalt psychology and web design</p> </div>
 </div>
 <div className="elementor-element elementor-element-109e361 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=109e361 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">Interaction Design Foundation</p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-f8b1597 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=f8b1597 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default"><span className=num>2020</span></p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-a630b62 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id=a630b62 data-element_type=widget data-e-type=widget data-widget_type=divider.default>
 <div className=elementor-widget-container>
 <div className=elementor-divider>
 <span className=elementor-divider-separator>
 </span>
 </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-5fea5e4 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=5fea5e4 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-9e51840 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=9e51840 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-943bd2a wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=943bd2a data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">Human-Computer Interaction</p> </div>
 </div>
 <div className="elementor-element elementor-element-33ea767 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=33ea767 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">Interaction Design Foundation</p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-34357b2 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=34357b2 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default"><span className=num>2020</span></p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-164b0bd elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id=164b0bd data-element_type=widget data-e-type=widget data-widget_type=divider.default>
 <div className=elementor-widget-container>
 <div className=elementor-divider>
 <span className=elementor-divider-separator>
 </span>
 </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-02c83ff e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=02c83ff data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-e05d6e1 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=e05d6e1 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-45e8c54 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=45e8c54 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">UX Management: Strategy and tactics</p> </div>
 </div>
 <div className="elementor-element elementor-element-aa861a1 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=aa861a1 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">Interaction Design Foundation</p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-a869de8 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=a869de8 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default"><span className=num>2020</span></p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-1d30cd0 elementor-hidden-desktop elementor-widget-divider--view-line elementor-widget elementor-widget-divider sf-hidden" data-id=1d30cd0 data-element_type=widget data-e-type=widget data-widget_type=divider.default>
 
 </div>
 </div>
 <div className="elementor-element elementor-element-c7f29c2 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=c7f29c2 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-eef6e56 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=eef6e56 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-e1c3f2a e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=e1c3f2a data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-0c1bee0 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=0c1bee0 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">
Web design for usability</p> </div>
 </div>
 <div className="elementor-element elementor-element-bb45b8a wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=bb45b8a data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">Interaction Design Foundation</p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-bbf21c1 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=bbf21c1 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default"><span className=num>2020</span></p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-20ddd77 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id=20ddd77 data-element_type=widget data-e-type=widget data-widget_type=divider.default>
 <div className=elementor-widget-container>
 <div className=elementor-divider>
 <span className=elementor-divider-separator>
 </span>
 </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-ee52ce1 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=ee52ce1 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-b2c5cd3 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=b2c5cd3 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-cd30792 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=cd30792 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">Mobile UX design</p> </div>
 </div>
 <div className="elementor-element elementor-element-cb081d6 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=cb081d6 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">Interaction Design Foundation</p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-86ffff0 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=86ffff0 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default"><span className=num>2020</span></p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-c78a511 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id=c78a511 data-element_type=widget data-e-type=widget data-widget_type=divider.default>
 <div className=elementor-widget-container>
 <div className=elementor-divider>
 <span className=elementor-divider-separator>
 </span>
 </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-69630f2 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=69630f2 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-52a25c0 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=52a25c0 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-604ee8b wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=604ee8b data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">Web apps development</p> </div>
 </div>
 <div className="elementor-element elementor-element-49f2d6f wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=49f2d6f data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">Cañaveral Institute</p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-0bf34e4 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=0bf34e4 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default"><span className=num>2014—2016</span></p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-4aa96db elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id=4aa96db data-element_type=widget data-e-type=widget data-widget_type=divider.default>
 <div className=elementor-widget-container>
 <div className=elementor-divider>
 <span className=elementor-divider-separator>
 </span>
 </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-74dec83 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=74dec83 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-e195a16 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=e195a16 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-ec95b6f wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=ec95b6f data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">Mobile apps development</p> </div>
 </div>
 <div className="elementor-element elementor-element-4b99e88 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=4b99e88 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">CF TIC</p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-d81566f wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=d81566f data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default"><span className=num>2015</span></p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-e2cd1c6 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id=e2cd1c6 data-element_type=widget data-e-type=widget data-widget_type=divider.default>
 <div className=elementor-widget-container>
 <div className=elementor-divider>
 <span className=elementor-divider-separator>
 </span>
 </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-beae779 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=beae779 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-788ddca e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=788ddca data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-02eb138 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=02eb138 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">Graphic design</p> </div>
 </div>
 <div className="elementor-element elementor-element-0ed4b2e wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=0ed4b2e data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">IES Europa</p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-aaebb54 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=aaebb54 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default"><span className=num>2012—2014</span></p> </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-090fbce e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=090fbce data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-1fed637 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=1fed637 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <h1 className="elementor-heading-title elementor-size-default">Work Experience<span style=color:#DE5E91>.</span></h1> </div>
 </div>
 <div className="elementor-element elementor-element-193daf3 underline-dvz ul-experience wpr-list-style-none elementor-widget elementor-widget-wpr-posts-timeline" data-id=193daf3 data-element_type=widget data-e-type=widget data-settings='{"animation_offset":150,"aos_animation_duration":600}' data-widget_type=wpr-posts-timeline.default>
 <div className=elementor-widget-container>
 
 <div className="wpr-wrapper wpr-vertical wpr-centered">
 <div className="wpr-timeline-centered wpr-line wpr-both-sided-timeline"><div className=wpr-middle-line style=top:116.775px;height:2256.31px></div><div className=wpr-timeline-fill data-layout=centered style=top:116.775px;height:0px></div><article className="wpr-timeline-entry wpr-left-aligned elementor-repeater-item-545f13a" data-item-id=elementor-repeater-item-545f13a><time className="wpr-extra-label aos-init aos-animate" data-aos=fade-up data-aos-left data-aos-right data-animation-offset=150 data-animation-duration=600><span className=wpr-label>Rappi</span><span className=wpr-sub-label><span className=num>2021—Currently</span></span></time><div className=wpr-timeline-entry-inner><div className="wpr-main-line-icon wpr-icon"></div><div className="wpr-story-info-vertical wpr-data-wrap aos-init aos-animate" data-aos=fade-up data-aos-left data-aos-right data-animation-offset=150 data-animation-duration=600><div className=wpr-timeline-content-wrapper><div className=wpr-content-wrapper><div className=wpr-title-wrap><span className=wpr-title>VP of Design</span></div><div className=wpr-description><ul>
 <li>Executive leadership of Rappi’s entire design organization, driving the vision, strategy, and execution across all products.</li>
 <li>Ownership of the Design System, ensuring consistency, scalability, and efficiency across all user touchpoints.</li>
 <li>Building a high-performance design culture, fostering innovation, excellence, and collaboration across multidisciplinary teams.</li>
 <li>Direct collaboration with founders and C-level to build a strategic vision aligned with the startup's growth stages.</li>
</ul>
<a style=color:#ffffff8c;display:inline-block;margin-top:8px href=https://apps.apple.com/co/app/rappi-s%C3%BAper-y-comida-online/id984044296 target=_blank rel=noopener>
Apple store
</a></div></div></div></div>
 </div>
 </article><article className="wpr-timeline-entry wpr-right-aligned elementor-repeater-item-2a37755" data-item-id=elementor-repeater-item-2a37755><time className="wpr-extra-label aos-init aos-animate" data-aos=fade-up data-aos-left data-aos-right data-animation-offset=150 data-animation-duration=600><span className=wpr-label>Roostfy</span><span className=wpr-sub-label><span className=num>2015—2020</span></span></time><div className=wpr-timeline-entry-inner><div className="wpr-main-line-icon wpr-icon"></div><div className="wpr-story-info-vertical wpr-data-wrap aos-init aos-animate" data-aos=fade-up data-aos-left data-aos-right data-animation-offset=150 data-animation-duration=600><div className=wpr-timeline-content-wrapper><div className=wpr-content-wrapper><div className=wpr-title-wrap><span className=wpr-title>CEO &amp; Designer</span></div><div className=wpr-description><ul>
 <li>Development of the idea and value proposition.</li>
 <li>Design and coding of the MVP to go to market.</li>
 <li>Strategic decision making to gain market share in Spain and LATAM.</li>
 <li>Monetization of the platform once a good number of active users have been reached.</li>
</ul>
<a style=color:#ffffff8c;display:inline-block;margin-top:8px href=https://hansvz.com/projects/roostfy target=_blank rel=noopener>
Case study
</a></div></div></div></div>
 </div>
 </article><article className="wpr-timeline-entry wpr-left-aligned elementor-repeater-item-218e3a3" data-item-id=elementor-repeater-item-218e3a3><time className="wpr-extra-label aos-init aos-animate" data-aos=fade-up data-aos-left data-aos-right data-animation-offset=150 data-animation-duration=600><span className=wpr-label>Easy Food</span><span className=wpr-sub-label><span className=num>2018—2020</span></span></time><div className=wpr-timeline-entry-inner><div className="wpr-main-line-icon wpr-icon"></div><div className="wpr-story-info-vertical wpr-data-wrap aos-init aos-animate" data-aos=fade-up data-aos-left data-aos-right data-animation-offset=150 data-animation-duration=600><div className=wpr-timeline-content-wrapper><div className=wpr-content-wrapper><div className=wpr-title-wrap><span className=wpr-title>Co-Founder &amp; Designer</span></div><div className=wpr-description><ul>
 <li>Development of the idea and value proposition.</li>
 <li>Design and coding of Alpha version for testing with first customers.</li>
 <li>Testing and iteration to build a truly useful MVP for customers.</li>
 <li>Business model study for organic growth.</li>
</ul>
<p className=num style=font-size:10pt!important;line-height:1.8!important;color:#ffffff66!important;margin-top:24px!important;margin-bottom:8px!important>*This was an entrepreneurship that failed due to a lack of business and operational knowledge.</p></div></div></div></div>
 </div>
 </article><article className="wpr-timeline-entry wpr-right-aligned elementor-repeater-item-dc77abf" data-item-id=elementor-repeater-item-dc77abf><time className="wpr-extra-label aos-init aos-animate" data-aos=fade-up data-aos-left data-aos-right data-animation-offset=150 data-animation-duration=600><span className=wpr-label>SISnet 360</span><span className=wpr-sub-label><span className=num>2016—2018</span></span></time><div className=wpr-timeline-entry-inner><div className="wpr-main-line-icon wpr-icon"></div><div className="wpr-story-info-vertical wpr-data-wrap aos-init aos-animate" data-aos=fade-up data-aos-left data-aos-right data-animation-offset=150 data-animation-duration=600><div className=wpr-timeline-content-wrapper><div className=wpr-content-wrapper><div className=wpr-title-wrap><span className=wpr-title>Full Stack Developer</span></div><div className=wpr-description><ul>
 <li>Framework integrations in the company product.</li>
 <li>Building and coding APIs.</li>
 <li>Development of new modules in the web application.</li>
 <li>Project manager at one of the company's customers.</li>
</ul>
<a style=color:#ffffff8c;display:inline-block;margin-top:8px href=https://www.sisnet360.com/ target=_blank rel=noopener>
www.sisnet360.com
</a></div></div></div></div>
 </div>
 </article><article className="wpr-timeline-entry wpr-left-aligned elementor-repeater-item-439bfba" data-item-id=elementor-repeater-item-439bfba><time className="wpr-extra-label aos-init aos-animate" data-aos=fade-up data-aos-left data-aos-right data-animation-offset=150 data-animation-duration=600><span className=wpr-label>Copysell</span><span className=wpr-sub-label><span className=num>2014—2015</span></span></time><div className=wpr-timeline-entry-inner><div className="wpr-main-line-icon wpr-icon"></div><div className="wpr-story-info-vertical wpr-data-wrap aos-init aos-animate" data-aos=fade-up data-aos-left data-aos-right data-animation-offset=150 data-animation-duration=600><div className=wpr-timeline-content-wrapper><div className=wpr-content-wrapper><div className=wpr-title-wrap><span className=wpr-title>Graphic Designer </span></div><div className=wpr-description><ul>
 <li>Web graphics with Adobe Photoshop.</li>
 <li>Vector illustrations with Adoble Illustrator.</li>
 <li>Preparation of final artwork for print products with Adobe inDesign.</li>
</ul>
<a style=color:#ffffff8c;display:inline-block;margin-top:8px href=https://www.onlineprinters.es/ target=_blank rel=noopener>
www.copysell.com
</a></div></div></div></div>
 </div>
 </article><article className="wpr-timeline-entry wpr-right-aligned elementor-repeater-item-528a050" data-item-id=elementor-repeater-item-528a050><time className="wpr-extra-label aos-init aos-animate" data-aos=fade-up data-aos-left data-aos-right data-animation-offset=150 data-animation-duration=600><span className=wpr-label>Freelance</span><span className=wpr-sub-label><span className=num>2011—2014</span></span></time><div className=wpr-timeline-entry-inner><div className="wpr-main-line-icon wpr-icon"></div><div className="wpr-story-info-vertical wpr-data-wrap aos-init aos-animate" data-aos=fade-up data-aos-left data-aos-right data-animation-offset=150 data-animation-duration=600><div className=wpr-timeline-content-wrapper><div className=wpr-content-wrapper><div className=wpr-title-wrap><span className=wpr-title>Designer &amp; Illustrator</span></div><div className=wpr-description><ul><li>Graphics and illustration design for web and mobile applications.<li>Motion graphics for web and mobile applications.<li>Branding design.</ul></div></div></div></div>
 </div>
 </article></div> 
 </div> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-12b8bab e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=12b8bab data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-024b67c e-con-full underline-dvz e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=024b67c data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-d510204 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=d510204 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <h1 className="elementor-heading-title elementor-size-default">Certificates<span style=color:#DE5E91>.</span></h1> </div>
 </div>
 <div className="elementor-element elementor-element-7ffe1f5 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=7ffe1f5 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-489a633 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=489a633 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-0bd4263 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=0bd4263 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-4020de2 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=4020de2 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-8857cb8 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=8857cb8 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">Master in Business Adminstration (MBA)</p> </div>
 </div>
 <div className="elementor-element elementor-element-bfc9485 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=bfc9485 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-9533f23 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=9533f23 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">ThePowerMBA</p> </div>
 </div>
 <div className="elementor-element elementor-element-ae576f0 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=ae576f0 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">·</p> </div>
 </div>
 <div className="elementor-element elementor-element-a6f7693 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=a6f7693 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default"><a href=https://verified.sertifier.com/es/verify/37562274638607 target=_blank>Credentials</a></p> </div>
 </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-c8af234 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=c8af234 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default"><span className=num>2020</span></p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-dc461ef elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id=dc461ef data-element_type=widget data-e-type=widget data-widget_type=divider.default>
 <div className=elementor-widget-container>
 <div className=elementor-divider>
 <span className=elementor-divider-separator>
 </span>
 </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-4c3eccd e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=4c3eccd data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-ad1fc83 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=ad1fc83 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-0fe785d wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=0fe785d data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">UX Research: Methods and best practices</p> </div>
 </div>
 <div className="elementor-element elementor-element-de7d32f wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=de7d32f data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">Interaction Design Foundation</p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-2ec0d1f wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=2ec0d1f data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default"><span className=num>2020</span></p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-462ba2a elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id=462ba2a data-element_type=widget data-e-type=widget data-widget_type=divider.default>
 <div className=elementor-widget-container>
 <div className=elementor-divider>
 <span className=elementor-divider-separator>
 </span>
 </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-d3fb982 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=d3fb982 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-4c35103 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=4c35103 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-5386659 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=5386659 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">Gestalt psychology and web design</p> </div>
 </div>
 <div className="elementor-element elementor-element-109e361 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=109e361 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">Interaction Design Foundation</p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-f8b1597 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=f8b1597 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default"><span className=num>2020</span></p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-a630b62 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id=a630b62 data-element_type=widget data-e-type=widget data-widget_type=divider.default>
 <div className=elementor-widget-container>
 <div className=elementor-divider>
 <span className=elementor-divider-separator>
 </span>
 </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-5fea5e4 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=5fea5e4 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-9e51840 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=9e51840 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-943bd2a wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=943bd2a data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">Human-Computer Interaction</p> </div>
 </div>
 <div className="elementor-element elementor-element-33ea767 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=33ea767 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">Interaction Design Foundation</p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-34357b2 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=34357b2 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default"><span className=num>2020</span></p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-164b0bd elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id=164b0bd data-element_type=widget data-e-type=widget data-widget_type=divider.default>
 <div className=elementor-widget-container>
 <div className=elementor-divider>
 <span className=elementor-divider-separator>
 </span>
 </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-02c83ff e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=02c83ff data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-e05d6e1 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=e05d6e1 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-45e8c54 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=45e8c54 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">UX Management: Strategy and tactics</p> </div>
 </div>
 <div className="elementor-element elementor-element-aa861a1 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=aa861a1 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">Interaction Design Foundation</p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-a869de8 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=a869de8 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default"><span className=num>2020</span></p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-1d30cd0 elementor-hidden-desktop elementor-widget-divider--view-line elementor-widget elementor-widget-divider sf-hidden" data-id=1d30cd0 data-element_type=widget data-e-type=widget data-widget_type=divider.default>
 
 </div>
 </div>
 <div className="elementor-element elementor-element-c7f29c2 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=c7f29c2 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-eef6e56 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=eef6e56 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-e1c3f2a e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=e1c3f2a data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-0c1bee0 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=0c1bee0 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">
Web design for usability</p> </div>
 </div>
 <div className="elementor-element elementor-element-bb45b8a wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=bb45b8a data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">Interaction Design Foundation</p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-bbf21c1 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=bbf21c1 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default"><span className=num>2020</span></p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-20ddd77 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id=20ddd77 data-element_type=widget data-e-type=widget data-widget_type=divider.default>
 <div className=elementor-widget-container>
 <div className=elementor-divider>
 <span className=elementor-divider-separator>
 </span>
 </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-ee52ce1 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=ee52ce1 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-b2c5cd3 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=b2c5cd3 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-cd30792 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=cd30792 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">Mobile UX design</p> </div>
 </div>
 <div className="elementor-element elementor-element-cb081d6 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=cb081d6 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">Interaction Design Foundation</p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-86ffff0 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=86ffff0 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default"><span className=num>2020</span></p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-c78a511 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id=c78a511 data-element_type=widget data-e-type=widget data-widget_type=divider.default>
 <div className=elementor-widget-container>
 <div className=elementor-divider>
 <span className=elementor-divider-separator>
 </span>
 </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-69630f2 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=69630f2 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-52a25c0 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=52a25c0 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-604ee8b wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=604ee8b data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">Web apps development</p> </div>
 </div>
 <div className="elementor-element elementor-element-49f2d6f wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=49f2d6f data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">Cañaveral Institute</p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-0bf34e4 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=0bf34e4 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default"><span className=num>2014—2016</span></p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-4aa96db elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id=4aa96db data-element_type=widget data-e-type=widget data-widget_type=divider.default>
 <div className=elementor-widget-container>
 <div className=elementor-divider>
 <span className=elementor-divider-separator>
 </span>
 </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-74dec83 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=74dec83 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-e195a16 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=e195a16 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-ec95b6f wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=ec95b6f data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">Mobile apps development</p> </div>
 </div>
 <div className="elementor-element elementor-element-4b99e88 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=4b99e88 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">CF TIC</p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-d81566f wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=d81566f data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default"><span className=num>2015</span></p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-e2cd1c6 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id=e2cd1c6 data-element_type=widget data-e-type=widget data-widget_type=divider.default>
 <div className=elementor-widget-container>
 <div className=elementor-divider>
 <span className=elementor-divider-separator>
 </span>
 </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-beae779 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=beae779 data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-788ddca e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id=788ddca data-element_type=container data-e-type=container>
 <div className="elementor-element elementor-element-02eb138 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=02eb138 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">Graphic design</p> </div>
 </div>
 <div className="elementor-element elementor-element-0ed4b2e wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=0ed4b2e data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default">IES Europa</p> </div>
 </div>
 </div>
 <div className="elementor-element elementor-element-aaebb54 wavo-transform transform-type-translate elementor-widget elementor-widget-heading" data-id=aaebb54 data-element_type=widget data-e-type=widget data-widget_type=heading.default>
 <div className=elementor-widget-container>
 <p className="elementor-heading-title elementor-size-default"><span className=num>2012—2014</span></p> </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 
 </div></div></div>
`;
