import {
  Button,
  CloseButton,
  Drawer,
  Portal,
  Stack,
  Input,
  Fieldset,
  Field,
} from "@chakra-ui/react";

export default function DrawerComp() {
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
              <Drawer.Title>Transfer Details</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Fieldset.Root size="lg" maxW="md">
                <Stack marginBlock={"1.5rem"}>
                  <Fieldset.HelperText>
                    Please provide the correct information to transfer money between clients.
                  </Fieldset.HelperText>
                </Stack>

                <Fieldset.Content>
                  <Field.Root>
                    <Field.Label>Sender Account Number</Field.Label>
                    <Input name="senderAccountNumber" paddingInline={"1rem"}  />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Receiver Account Number</Field.Label>
                    <Input name="senderAccountNumber" paddingInline={"1rem"} />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Amount</Field.Label>
                    <Input name="amount" type="number" paddingInline={"1rem"}  />
                  </Field.Root>
                </Fieldset.Content>
              </Fieldset.Root>
            </Drawer.Body>
            <Drawer.Footer>
              <Button variant="outline" paddingInline={"2rem"}>
                Cancel
              </Button>
              <Button paddingInline={"2rem"}>Save</Button>
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
