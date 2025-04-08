import {
  Button,
  CloseButton,
  Drawer,
  Portal,
  Stack,
  Input,
  Fieldset,
  Field,
  useDisclosure,
} from "@chakra-ui/react";
import { createClient } from "@/service/clienteService";
import { useState } from "react";

export default function DrawerComp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [balance, setBalance] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSave = async () => {
    const newClient = {
      firstName,
      lastName,
      balance: parseFloat(balance),
    };

    try {
      const response = await createClient(newClient);
      console.log("Cliente creado:", response);
      setFirstName("");
      setLastName("");
      setBalance("");
      onClose();
    } catch (error) {
      console.error("Error al crear cliente:", error);
    }
  };

  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button
          variant="outline"
          style={{
            width: "25%",
            display: "flex",
            gap: "1rem",
            borderColor: "#198ae0",
            color: "#198ae0",
            fontWeight: "bold",
          }}
        >
          {" "}
          Add
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content padding={"1rem"}>
            <Drawer.Header>
              <Drawer.Title>User Creation</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Fieldset.Root size="lg" maxW="md">
                <Stack marginBottom={"2rem"}>
                  <Fieldset.Legend>Contact details</Fieldset.Legend>
                  <Fieldset.HelperText>
                    Please provide the correct information to create a new user.
                  </Fieldset.HelperText>
                </Stack>

                <Fieldset.Content>
                  <Field.Root>
                    <Field.Label>First Name</Field.Label>
                    <Input
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Last Name</Field.Label>
                    <Input
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Balance</Field.Label>
                    <Input
                      placeholder="Balance"
                      type="number"
                      value={balance}
                      onChange={(e) => setBalance(e.target.value)}
                    />  
                  </Field.Root>
                </Fieldset.Content>
              </Fieldset.Root>
            </Drawer.Body>
            <Drawer.Footer>
              <Button
                variant="outline"
                paddingInline={"2rem"}
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button paddingInline={"2rem"} onClick={handleSave}>
                Save
              </Button>
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
