export const setLinkColor = ({
  attr,
  color = "lightgrey",
  hoverColor = "lightpink",
}) => {
  return `
    ${attr} {
    text-decoration: none;
    color: ${color};
    transition: all 0.3s linear;
  }

  .toggle-color:hover {
    color: ${hoverColor};
  }
    `;
};
