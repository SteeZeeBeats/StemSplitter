import React from 'react';
import { useDrag } from 'react-dnd';

const SampleItem = ({ sample }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'SAMPLE',
        item: { name: sample.name, url: sample.url },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div ref={drag} className="sample-item" style={{ opacity: isDragging ? 0.5 : 1 }}>
            <p>{sample.name} - {sample.duration} - {sample.format}</p>
        </div>
    );
};

export default SampleItem;
