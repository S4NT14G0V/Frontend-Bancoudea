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
                    <Input name="firstName" paddingInline={"1rem"}  />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Last Name</Field.Label>
                    <Input name="lastName" paddingInline={"1rem"} />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Balance</Field.Label>
                    <Input name="balance" type="number" paddingInline={"1rem"}  />
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
