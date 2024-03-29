import { List, Item, Text, Btn } from './ContactList.styled';
export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Text>
            {name}: {number}
          </Text>
          <Btn onClick={() => onDelete(id)} aria-label="Delete">
            Delete
          </Btn>
        </Item>
      ))}
    </List>
  );
};
