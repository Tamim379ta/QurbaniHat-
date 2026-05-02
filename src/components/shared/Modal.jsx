"use client";

import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { FaEdit, FaUser } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";


const UpdateModal = () => {
  const handleSubmit = async(e) => {
    e.preventDefault()

    const name = e.target.name.value 
    const image = e.target.image.value 

    await authClient.updateUser({
    image,
    name
})
  }
  return (
    <div>
      <Modal>
        <Button variant="secondary"><FaEdit /> Edit Profile</Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <FaUser />
                </Modal.Icon>
                <Modal.Heading>Undate Profile</Modal.Heading>

              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <TextField className="w-full" name="name" type="text">
                      <Label>Name</Label>
                      <Input placeholder="Enter your name" />
                    </TextField>
                    <TextField className="w-full" name="image" type="url">
                      <Label>Image Url</Label>
                      <Input placeholder="image url" />
                    </TextField>
                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>
                      <Button type="submit" slot="close">Update <MdUpdate /></Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>

            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>

    </div>
  );
};


export default UpdateModal;