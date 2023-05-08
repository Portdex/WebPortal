import React, { Component } from "react";
import Clock from "../components/Clock";
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.sticky.white {
    background: #403f83;
    border-bottom: solid 1px #403f83;
  }
  header#myHeader.navbar .search #quick_search{
    color: #fff;
    background: rgba(255, 255, 255, .1);
  }
  header#myHeader.navbar.white .btn, .navbar.white a, .navbar.sticky.white a{
    color: #fff;
  }
  header#myHeader .dropdown-toggle::after{
    color: rgba(255, 255, 255, .5);
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: block !important;
  }
  .mainside{
    .connect-wal{
      display: none;
    }
    .logout{
      display: flex;
      align-items: center;
    }
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #403f83;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #fff;
    }
    .item-dropdown .dropdown a{
      color: #fff !important;
    }
  }
`;

export default class Createpage extends Component {

constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.state = {
      files: [],
    };
  }

  onChange(e) {
    var files = e.target.files;
    console.log(files);
    var filesArr = Array.prototype.slice.call(files);
    console.log(filesArr);
    document.getElementById("file_name").style.display = "none";
    this.setState({ files: [...this.state.files, ...filesArr] });
  }

render() {
    return (
      <div>
      <GlobalStyles/>

        <section className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${'./img/background/subheader.jpg'})`}}>
          <div className='mainbreadcumb'>
            <div className='container'>
              <div className='row m-10-hor'>
                <div className='col-12'>
                  <h1 className='text-center'>Post Your Project</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='container pt-3 pb-0'>

        <div className="row">
        
          <div className="col-lg-12 w-75 mb-5 mx-auto">
          <h3>
          Tell us what you need done
          </h3>
          <p>
          Contact skilled freelancers within minutes. View profiles, ratings, portfolios and chat with them. Pay the freelancer only when you are 100% satisfied with their work.
          </p>
              <form id="form-create-item" className="form-border" action="#">
                  <div className="field-set">
                      

                      <div className="spacer-single"></div>

                      <h5>Choose a Name for your Project</h5>
                      <input type="text" name="item_title" id="item_title" className="form-control" placeholder="e.g. 'Crypto Funk" />

                      <div className="spacer-10"></div>

                      <h5>Tell Us more about Your Project</h5>
                      <textarea data-autoresize name="item_desc" id="item_desc" className="form-control" placeholder="e.g. 'This is very limited item'"></textarea>

                      <div className="spacer-10"></div>

                      <h5>Upload file</h5>

<div className="d-create-file">
    <p id="file_name">PNG, JPG, GIF, WEBP or MP4. Max 200mb.</p>
    {this.state.files.map(x => 
    <p key="{index}">PNG, JPG, GIF, WEBP or MP4. Max 200mb.{x.name}</p>
    )}
    <div className='browse'>
      <input type="button" id="get_file" className="btn-main" value="Browse"/>
      <input id='upload_file' type="file" multiple onChange={this.onChange} />
    </div>
    
</div>
                      <div className="spacer-10"></div>

                      <input type="button" id="submit" className="btn-main" value="Next"/>
                  </div>
              </form>
          </div>
                                        
      </div>

      </section>

        <Footer />
      </div>
   );
  }
}