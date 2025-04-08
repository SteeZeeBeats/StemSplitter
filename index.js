import React from 'react';
import ReactDOM from 'react-dom';
import SampleBrowser from './components/SampleBrowser';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

ReactDOM.render(
    <DndProvider backend={HTML5Backend}>
        <SampleBrowser />
    </DndProvider>,
    document.getElementById('root')
);
