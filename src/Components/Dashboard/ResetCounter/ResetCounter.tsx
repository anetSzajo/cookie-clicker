import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button
} from "@chakra-ui/react"
import React from "react";

type ComponentProps = {
    resetCounter: Function;
    isDisabled: boolean
}

export default function ResetCounter({resetCounter, isDisabled}: ComponentProps) {
    const [isAlertOpen, setIsAlertOpen] = React.useState(false);
    const onAlertClose = () => setIsAlertOpen(false);
    const cancelRef = React.useRef();

    const handleResetButtonClick = () => {
        setIsAlertOpen(true)
    }

    const handleConfirmResetButtonClick = () => {
        resetCounter();
        setIsAlertOpen(false);
    }
    return (
        <>
            <Button colorScheme="orange" variant="outline" size="xs"
                    onClick={handleResetButtonClick}
                    isDisabled={isDisabled}>
                Reset
            </Button>
            <AlertDialog
                isOpen={isAlertOpen}
                leastDestructiveRef={cancelRef.current}
                onClose={onAlertClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Reset
                        </AlertDialogHeader>
                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button ref={cancelRef.current} onClick={onAlertClose}>
                                Cancel
                            </Button>
                            <Button colorScheme="orange" id="confirmResetButton" onClick={handleConfirmResetButtonClick} ml={3}>
                                Reset
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}