import React,{useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,FormGroup,Label,Input } from 'reactstrap'; 

export default function UserForm({user,isOpen}) {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

   
    return (
        <div>
        <Modal isOpen={isOpen} toggle={toggle}>
          <div className="modal-dialog" role="document">
            <div className="modal-content  w-100">
              <ModalHeader>User Form</ModalHeader>
              <ModalBody>
                <FormGroup>
                  <Label for="Username">Username</Label>
                  <Input
                    type="text"
                    id="username"
                    name="username"
                    value={user.username}
                  />
                  {/* <small id="helpId" className="text-muted">Help text</small> */}
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
                <Button color="primary" onClick={toggle}>Submit</Button>
              </ModalFooter>
            </div>
          </div>
        </Modal>
      </div>
    )
}
