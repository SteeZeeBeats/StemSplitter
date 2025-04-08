import React from 'react';

const Header = ({ onFolderSelect }) => {
    return (
        <div className="header">
            <h1>DAW Sample Browser</h1>
            <input type="file" multiple webkitdirectory onChange={onFolderSelect} />
        </div>
    );
};

export default Header;
