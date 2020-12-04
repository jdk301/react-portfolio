import React from "react";
import portfolioData from "../portfolioData";

const PortfolioItemPage = (props) => (
  <div id="project" className="modal">
    <h1 className="title">{props.match.params.id}</h1>
    <p>This page is for the item with the id of {props.match.params.id}</p>

    {/* <ul class="list-inline">
      <li data-toggle="modal" data-target="#myModal">
        <a href="#myGallery" data-slide-to="0">
          <img class="img-thumbnail" src="" />
          <br />
          Caption
        </a>
      </li>
      <li data-toggle="modal" data-target="#myModal">
        <a href="#myGallery" data-slide-to="1">
          <img class="img-thumbnail" src="" />
          <br />
          Caption
        </a>
      </li>
      <li data-toggle="modal" data-target="#myModal">
        <a href="#myGallery" data-slide-to="2">
          <img class="img-thumbnail" src="" />
          <br />
          Caption
        </a>
      </li>
      <li data-toggle="modal" data-target="#myModal">
        <a href="#myGallery" data-slide-to="3">
          <img class="img-thumbnail" src="" />
          <br />
          Caption
        </a>
      </li>
    </ul>

    <div class="modal fade" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="pull-left">My Gallery Title</div>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            title="Close"
          >
            {" "}
            <span class="glyphicon glyphicon-remove"></span>
          </button>
        </div>
        <div class="modal-body">
          <div id="myGallery" class="carousel slide" data-interval="false">
            <div class="carousel-inner">
              <div class="item active">
                <img src="" alt="item0" />
                <div class="carousel-caption">
                  <h3>Heading 3</h3>
                  <p>Slide 0 description.</p>
                </div>
              </div>
              <div class="item">
                <img src="" alt="item1" />
                <div class="carousel-caption">
                  <h3>Heading 3</h3>
                  <p>Slide 1 description</p>
                </div>
              </div>
              <div class="item">
                <img src="" alt="item2" />
                <div class="carousel-caption">
                  <h3>Heading 3</h3>
                  <p>Slide 2 description</p>
                </div>
              </div>
            </div>
            <a
              class="left carousel-control"
              href="#myGallery"
              role="button"
              data-slide="prev"
            >
              {" "}
              <span class="glyphicon glyphicon-chevron-left"></span>
            </a>{" "}
            <a
              class="right carousel-control"
              href="#myGallery"
              role="button"
              data-slide="next"
            >
              {" "}
              <span class="glyphicon glyphicon-chevron-right"></span>
            </a>
          </div>
        </div>
        <div class="modal-footer">
          <div class="pull-left">
            <small>Insert Project Name</small>
          </div>
          <button class="btn-sm close" type="button" data-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div> */}
  </div>
);

export default PortfolioItemPage;
