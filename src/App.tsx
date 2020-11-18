import React, {FunctionComponent, useRef} from 'react';
import ModalPortal, {IModalPortalHandler} from "./components/Portal/ModalPortal";

interface OwnProps {
}

type Props = OwnProps;

const App: FunctionComponent<Props> = () => {
    const modalPortalRef = useRef<IModalPortalHandler>(null)

    return (
        <div>
            <button onClick={() => modalPortalRef?.current?.handleToggle()}>onCLick</button>
            <ModalPortal ref={modalPortalRef}>
                modal
                <button onClick={() => modalPortalRef?.current?.handleToggle()}>onCLick</button>
            </ModalPortal>
        </div>
    );
};

export default App;
