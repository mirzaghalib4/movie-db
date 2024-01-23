import React, { FC } from "react";

export const Dropdown = ({ head, links }) => {
  return (
    <span className="dropdown">
      {head}
      <ul
        className="dropdown-menu"
        style={{
          width: "180px",
          flexDirection: "column",
          paddingTop: "10px",
          marginTop:"7px",
          paddingBottom:"10px",
          zIndex:'5',
        }}
      >
        {links.map((link) => (
          <li style={{ margin: "0px", width: "180px" }}>
            <a
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "16px",
                fontWeight: "200",
                marginLeft: "25px",
              }}
              href={link.url}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </span>
  );
};
