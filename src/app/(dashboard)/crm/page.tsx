"use client"
import { useState } from "react";
import EmptyData from "@/component/icons/EmptyData";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import ContactIllustrator from "../../../../public/img/contacts.png"
import MessageIllustrator from "../../../../public/img/messages.png"
import GropsIllustrator from "../../../../public/img/groups.png"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";

const CrmPage = () => {
    const [selected, setSelected] = useState<any>("photos");
    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    return (
        <div className="relative top-9 flex flex-col w-fullpx-5 h-screen">
            <Tabs
                aria-label="Options"
                selectedKey={selected}
                onSelectionChange={setSelected}
                className="fixed w-full z-50 bg-white py-1 border-b "
            >
                <Tab key="photos" title="Contacts">
                    <Card className="relative top-10 rounded-none shadow-none border-none p-3">
                        <CardBody>
                            <div className="mx-auto max-h-svh">
                                <EmptyData title="Contacts Management" image={ContactIllustrator} description="You have no contacts saved. Add contacts of your customers, clients, suppliers, students, members, etc." />
                            </div>
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="music" title="Groups">
                    <Card className="relative top-10 rounded-none shadow-none border-none p-3">
                        <CardBody className="space-y-9">
                            <div className="mx-auto max-h-svh">
                                <EmptyData title="Manage Groups" image={GropsIllustrator} description="You have no contacts saved. Add contacts of your customers, clients, suppliers, students, members, etc." />
                            </div>
                            <div className="w-max mx-auto">
                                <Button className="rounded-md capitalize" onClick={onOpen} color="primary">Add a new group</Button>
                                <Modal
                                    isOpen={isOpen}
                                    onOpenChange={onOpenChange}
                                    placement="top-center"
                                >
                                    <ModalContent>
                                        {(onClose) => (
                                            <>
                                                <ModalHeader className="flex flex-col gap-1 text-gray-800">Create a new group</ModalHeader>
                                                <ModalBody>
                                                    <Input
                                                        autoFocus
                                                        label="Name"
                                                        placeholder="Enter group name"
                                                        variant="bordered"
                                                    />
                                                    <Input
                                                        label="Description"
                                                        placeholder="Enter any description about this group"
                                                        variant="bordered"
                                                    />
                                                </ModalBody>
                                                <ModalFooter>
                                                    <Button color="danger" variant="flat" onPress={onClose}>
                                                        Cancel
                                                    </Button>
                                                    <Button color="primary" onPress={onClose}>
                                                        Save Group
                                                    </Button>
                                                </ModalFooter>
                                            </>
                                        )}
                                    </ModalContent>
                                </Modal>
                            </div>
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="videos" title="Messages">
                    <Card className="relative top-10 rounded-none shadow-none border-none p-3">
                        <CardBody>
                            <div className="mx-auto max-h-svh">
                                <EmptyData title="Messages" image={MessageIllustrator} description="You have not yet sent any message. All messages sent to your contacts should appear here." />
                            </div>
                        </CardBody>
                    </Card>
                </Tab>
            </Tabs>
        </div>
    )
}

export default CrmPage