import { Box, Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
export function ReturnFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  return (
    <>
      <button
        className={
          "text-3xl border-4 hover:scale-110 duration-150 p-2 rounded-xl border-[#E7D5C7] font-bold ml-24 mr-10 text-[#BBADA1]"
        }
        onClick={onOpen}
      >
        Open Modal
      </button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent height={"3xl"} w >
          <h1 className="text-5xl mx-auto font-bold text-[#BBADA1]">
            Edit Post
          </h1>
          <ModalCloseButton />
          <div className="h-60">
            <input
              className="placeholder:text-2xl placeholder:text-[#BBADA1]"
              placeholder="Title"
              type="text"
            />
          </div>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
