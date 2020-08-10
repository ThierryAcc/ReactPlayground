import React, { Component } from "react";
import "./Flexbox.css";

export default class Flexbox extends Component {
  render() {
    return (
      <div className="container">
        <header>Header</header>
        <main>
          <nav>Navigation</nav>
          <article>Article content</article>
          <aside>Aside Sidebar</aside>
        </main>
        <footer>Footer</footer>
      </div>
    );
  }
}
