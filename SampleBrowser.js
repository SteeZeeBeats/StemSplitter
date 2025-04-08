import React, { useEffect, useState } from 'react';
import SampleCategory from './SampleCategory';
import Header from './Header';
import useSamples from '../hooks/useSamples';

const SampleBrowser = () => {
    const { samples, loadSamples } = useSamples();
    const [selectedFolders, setSelectedFolders] = useState([]);

    const handleFolderSelect = (event) => {
        const files = event.target.files;
        const folders = Array.from(files).map(file => file.path).filter(Boolean);
        setSelectedFolders(folders);
        loadSamples(folders);
    };

    return (
        <div>
            <Header onFolderSelect={handleFolderSelect} />
            <div>
                {Object.entries(samples).map(([category, sampleList]) => (
                    <SampleCategory key={category} category={category} samples={sampleList} />
                ))}
            </div>
        </div>
    );
};

export default SampleBrowser;
