import React, {
    forwardRef,
    ForwardRefRenderFunction,
    useCallback,
    useImperativeHandle,
    useState,
} from 'react';
import ClientOnlyPortal from './ClientOnlyPortal';
import {CSSTransition} from 'react-transition-group';

export interface IModalPortalHandler {
    handleToggle: () => void;
}

interface Props {
    children: any;
}

const ModalPortal: ForwardRefRenderFunction<IModalPortalHandler, Props> = (
    {children},
    ref,
) => {
    const [open, setOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        handleToggle,
    }));

    const handleToggle = useCallback(() => {
        setOpen((prev) => !prev);
    }, []);

    return (
        <ClientOnlyPortal selector="#modal">
            <CSSTransition
                in={open}
                timeout={200}
                classNames="portal"
                unmountOnExit
                onEnter={() => setOpen(true)}
                onExited={() => setOpen(false)}
            >
                <div className="backdrop">
                    <div className="modal">{children}</div>
                </div>
            </CSSTransition>
        </ClientOnlyPortal>
    );
};
export default forwardRef(ModalPortal);
