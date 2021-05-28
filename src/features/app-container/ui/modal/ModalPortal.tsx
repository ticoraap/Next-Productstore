import React from 'react';
import ReactDOM from 'react-dom';

export interface IClientOnlyPortalProps {
    children: any
}

export function ModalPortal({children}: IClientOnlyPortalProps) {
    if (typeof window === 'undefined'){
        return null
    }

    return ReactDOM.createPortal(
        children,
        document.getElementById('modal-root')
    )

}