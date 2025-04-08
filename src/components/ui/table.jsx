import {
  ActionBar,
  Button,
  Checkbox,
  Portal,
  Table,
  Pagination,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  RiDeleteBin2Line,
  RiEdit2Line,
  RiArrowDropLeftLine,
  RiArrowDropRightLine,
} from "react-icons/ri";

export default function TableComponent({ items, columns, rowKey = "id" }) {
  const [selection, setSelection] = useState(null);

  const rows = items.map((item, index) => (
    <Table.Row
      key={item[rowKey]}
      style={{
        backgroundColor:
          selection === item[rowKey]
            ? "#cce4ff"
            : index % 2 === 0
            ? "#ffffff"
            : "#f2f5f3",
        color: "black",
      }}
      data-selected={selection === item[rowKey] ? "" : undefined}
    >
      <Table.Cell paddingInline={"5px"} paddingRight={"20px"}>
        <Checkbox.Root
          size="sm"
          top="0.5"
          aria-label="Select row"
          checked={selection === item[rowKey]}
          onCheckedChange={(changes) => {
            setSelection(changes.checked ? item[rowKey] : null);
          }}
        >
          <Checkbox.HiddenInput />
          <Checkbox.Control
            style={{
              backgroundColor:
                selection === item[rowKey] ? "#198ae0" : "transparent",
            }}
          />
        </Checkbox.Root>
      </Table.Cell>
      {columns.map((col) => (
        <Table.Cell key={col.key} paddingBlock={"0.7rem"}>
          {col.render ? col.render(item[col.key], item) : item[col.key]}
        </Table.Cell>
      ))}
    </Table.Row>
  ));

  return (
    <>
      <Table.Root variant="outline">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader w="6" style={{ backgroundColor: "white", color: "black" }} />
            {columns.map((col) => (
              <Table.ColumnHeader
                key={col.key}
                style={{ backgroundColor: "white", color: "black" }}
                paddingBlock={"0.7rem"}
              >
                {col.label}
              </Table.ColumnHeader>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>{rows}</Table.Body>
      </Table.Root>

      <Pagination.Root count={items.length * 5} pageSize={5} page={1}>
        <ButtonGroup variant="ghost" size="sm" wrap="wrap">
          <Pagination.PrevTrigger asChild>
            <IconButton color="#198ae0">
              <RiArrowDropLeftLine />
            </IconButton>
          </Pagination.PrevTrigger>

          <Pagination.Items
            render={(page) => (
              <IconButton
                variant={{ base: "ghost", _selected: "outline", _hover: "outline" }}
                color="#198ae0"
              >
                {page.value}
              </IconButton>
            )}
          />

          <Pagination.NextTrigger asChild>
            <IconButton color="#198ae0">
              <RiArrowDropRightLine />
            </IconButton>
          </Pagination.NextTrigger>
        </ButtonGroup>
      </Pagination.Root>

      <ActionBar.Root open={!!selection}>
        <Portal>
          <ActionBar.Positioner>
            <ActionBar.Content>
              <Button variant="outline" size="sm" icon color="black">
                Edit
                <RiEdit2Line />
              </Button>
              <Button variant="outline" size="sm" icon color="black">
                Delete
                <RiDeleteBin2Line />
              </Button>
            </ActionBar.Content>
          </ActionBar.Positioner>
        </Portal>
      </ActionBar.Root>
    </>
  );
}
