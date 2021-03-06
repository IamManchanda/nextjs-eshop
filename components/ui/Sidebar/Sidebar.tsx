import cn from "classnames";
import { FC, useRef } from "react";
import s from "./Sidebar.module.css";
import { Transition } from "@headlessui/react";
import { useOverlay, useModal, OverlayContainer } from "@react-aria/overlays";
import { useDialog } from "@react-aria/dialog";
import { FocusScope } from "@react-aria/focus";

interface Props {
  className?: string;
  children?: any;
  open?: boolean;
  onClose: () => void;
}

const Sidebar: FC<Props> = ({ className, children, open = false, onClose }) => {
  const rootClassName = cn(s.root, className);
  const ref = useRef<HTMLDivElement>(null);
  const { modalProps } = useModal();
  const { overlayProps } = useOverlay(
    {
      isOpen: open,
      isDismissable: true,
      onClose: onClose,
    },
    ref,
  );
  const { dialogProps } = useDialog({}, ref);

  return (
    <Transition show={open}>
      <OverlayContainer>
        <FocusScope contain restoreFocus autoFocus>
          <div className={rootClassName}>
            <div className="absolute inset-0 overflow-hidden">
              <Transition.Child
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div
                  className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
                  // Close the sidebar when clicking on the backdrop
                  onClick={onClose}
                />
              </Transition.Child>
              <section
                className="absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16 outline-none"
                {...dialogProps}
                {...overlayProps}
                {...modalProps}
                ref={ref}
              >
                <Transition.Child
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <div className="h-full md:w-screen md:max-w-md">
                    <div className="h-full flex flex-col text-base bg-accents-1 shadow-xl overflow-y-auto">
                      {children}
                    </div>
                  </div>
                </Transition.Child>
              </section>
            </div>
          </div>
        </FocusScope>
      </OverlayContainer>
    </Transition>
  );
};

export default Sidebar;
