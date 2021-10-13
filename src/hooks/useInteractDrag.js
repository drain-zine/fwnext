import React from "react";
import interact from 'interactjs'

import { useEffect } from 'react';

const useInteractDrag = (targetClass = 'draggable') => {
    
    useEffect(() => {   
    // target elements with the "draggable" class
        interact(`.${targetClass}`)
        .draggable({
            // enable inertial throwing
            inertia: true,
            // keep the element within the area of it's parent
            modifiers: [
            interact.modifiers.restrict({
                restriction: 'parent',
                endOnly: true
            })
            ],
            // enable autoScroll
            autoScroll: true,

            listeners: {
            // call this function on every dragmove event
            move: dragMoveListener,

            }
        }).styleCursor(false);

        function dragMoveListener (event) {
            const target = event.target
            // keep the dragged position in the data-x/data-y attributes
            const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
            const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

            // translate the element
            target.style.webkitTransform =
                target.style.transform =
                'translate(' + x + 'px, ' + y + 'px)'

            // update the posiion attributes
            target.setAttribute('data-x', x)
            target.setAttribute('data-y', y)
        }

        // this function is used later in the resizing and gesture demos
        window.dragMoveListener = dragMoveListener
    },[]);
}

export default useInteractDrag;