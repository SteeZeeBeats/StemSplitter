import { useState } from 'react';

const useSamples = () => {
    const [samples, setSamples] = useState({});

    const loadSamples = (folders) => {
        const newSamples = {};

        folders.forEach(folder => {
            const files = // Assume this reads files from the directory
            files.forEach(file => {
                const category = categorizeSample(file);
                if (!newSamples[category]) {
                    newSamples[category] = [];
                }
                newSamples[category].push({
                    name: file.name,
                    url: file.url,
                    duration: file.duration, // Assume this is calculated
                    format: file.type,
                });
            });
        });

        setSamples(newSamples);
    };

    const categorizeSample = (file) => {
        // Placeholder categorization logic
        if (file.type.includes('audio')) {
            return 'Audio';
        }
        return 'Others';
    };

    return { samples, loadSamples };
};

export default useSamples;
