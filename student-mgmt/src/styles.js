// notice the destructuring arguments and right-hand
export const setLinkColor = ({ color = "lightblue" } = {}) => {
  return `
    text-decoration: none;
    color: ${color};
    transition: all 0.3s linear;
    `;
};
