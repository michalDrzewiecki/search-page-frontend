import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { PortalPropsInterface } from './portal-props.interface';

const createWrapperAndAppendToBody = (wrapperId: string) => {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

const Portal = ({children, wrapperId}: PortalPropsInterface) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const existingElement = document.getElementById(wrapperId);
    const element = existingElement ? existingElement : createWrapperAndAppendToBody(wrapperId);
    setWrapperElement(element);

    return () => {
      if (!existingElement && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    }
  }, [wrapperId]);

  return wrapperElement ? createPortal(children, wrapperElement) : null;

}
export default Portal;
