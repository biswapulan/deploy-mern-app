import React from "react";

function menuBar() {
  const list = document.querySelectorAll(".list");
  function activeLink() {
    list.forEach((item) => {
      item.classList.remove("active");
    });
    this.classList.add("active");
  }
  list.forEach((item) => {
    item.addEventListener("click", activeLink);
  });

  return (
    <div>
      <div className="navigation">
        <div className="app_logo">
          <a href="#">
            <img
              src="https://biswapulan.github.io/saundaryaconsumers/resources/download.png"
              alt=""
            />
          </a>
        </div>
        <ul>
          <li className="list active">
            <a href="#">
              <span className="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span className="text">Home</span>
            </a>
          </li>
          <li className="list">
            <a href="#">
              <span className="icon">
                <ion-icon name="bookmark-outline"></ion-icon>
              </span>
              <span className="text">Bookings</span>
            </a>
          </li>
          <li className="list">
            <a href="#">
              <span className="icon">
                <ion-icon name="chatbubble-outline"></ion-icon>
              </span>
              <span className="text">Message</span>
            </a>
          </li>
          <li className="list">
            <a href="#">
              <span className="icon">
                <ion-icon name="book-outline"></ion-icon>
              </span>
              <span className="text">Blogs</span>
            </a>
          </li>
          <li className="list">
            <a href="#">
              <span className="icon">
                <ion-icon name="person-outline"></ion-icon>
              </span>
              <span className="text">Profile</span>
            </a>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default menuBar;
