import React, { useState } from 'react';
import SampleItem from './SampleItem';

const SampleCategory = ({ category, samples }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className="sample-category">
            <h3 onClick={toggleOpen} style={{ cursor: 'pointer' }}>{category}</h3>
            {isOpen && (
                <div>
                    {samples.map(sample => (
                        <SampleItem key={sample.name} sample={sample} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SampleCategory;
