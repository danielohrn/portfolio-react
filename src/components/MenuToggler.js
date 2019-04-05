import React from "react";

const MenuToggler = ({ onClick, type, color }) => (
  <div style={styles} onClick={onClick}>
    {type === "open" ? (
      <svg fill={color} width="24" height="24" viewBox="0 0 24 24">
        <path d="M4 22h-4v-4h4v4zm0-12h-4v4h4v-4zm0-8h-4v4h4v-4zm3 0v4h17v-4h-17zm0 12h17v-4h-17v4zm0 8h17v-4h-17v4z" />
      </svg>
    ) : (
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
      </svg>
    )}
  </div>
);

const styles = {
  position: "fixed",
  right: "30px",
  top: "30px",
  cursor: "pointer"
};

export default MenuToggler;
