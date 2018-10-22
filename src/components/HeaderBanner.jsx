import React from "react";

class HeaderBanner extends React.Component {
  render() {
    return (
      <div className="header-banner">
        <p>
          Let's make a Kanban Board!{" "}
          <a
            rel="nofollow noopener noreferrer"
            target="_blank"
            href="https://en.wikipedia.org/wiki/Kanban"
          >
            Learn more
          </a>
        </p>
      </div>
    );
  }
}

export default HeaderBanner;
