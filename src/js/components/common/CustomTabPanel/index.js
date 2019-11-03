const CustomTabPanel = ({ children, value, index }) => (value !== index ? null : children);

export default CustomTabPanel;
