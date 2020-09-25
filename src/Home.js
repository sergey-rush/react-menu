import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div className="container">
            <section className="hero is-info">
  <div className="hero-body">
    <div className="container">
      <h1 className="title">
      Software development
      </h1>
      <h2 className="subtitle">
      From Wikipedia, the free encyclopedia
      </h2>
      <p>Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. Software development is a process of writing and maintaining the source code, but in a broader sense, it includes all that is involved between the conception of the desired software through to the final manifestation of the software, sometimes in a planned and structured process.[1] Therefore, software development may include research, new development, prototyping, modification, reuse, re-engineering, maintenance, or any other activities that result in software products.[2]</p>
    </div>
  </div>
</section>
<hr className="hr" style={{marginTop: 5 + 'em'},{marginBottom: 2 + 'em'}}></hr>
<section>
<div className="tile is-ancestor">
  <div className="tile is-vertical is-8">
    <div className="tile">
      <div className="tile is-parent is-vertical">
        <article className="tile is-child notification is-primary">
          <p className="title">Vertical...</p>
          <p className="subtitle">Top tile</p>
        </article>
        <article className="tile is-child notification is-warning">
          <p className="title">...tiles</p>
          <p className="subtitle">Bottom tile</p>
        </article>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child notification is-info">
          <p className="title">Middle tile</p>
          <p className="subtitle">With an image</p>
          <figure className="image is-4by3">
            <img src="https://bulma.io/images/placeholders/640x480.png"/>
          </figure>
        </article>
      </div>
    </div>
    <div className="tile is-parent">
      <article className="tile is-child notification is-danger">
        <p className="title">Wide tile</p>
        <p className="subtitle">Aligned with the right tile</p>
        <div className="content">
           Content
        </div>
      </article>
    </div>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notification is-success">
      <div className="content">
        <p className="title">Tall tile</p>
        <p className="subtitle">With even more content</p>
        <div className="content">
           Content 
        </div>
      </div>
    </article>
  </div>
</div>
</section>
</div>


        );
    }
}