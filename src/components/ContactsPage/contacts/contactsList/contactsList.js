import React from "react";
import { useContactsParams } from "components/ContactsPage/ContactsHooks/useContactsParams";
import { Button, Li, Ul } from "./contactList.styled";

const ContactsList = () => {
  const {
    deleteContact,
    isFetching,
    contacts,
    contactsList,
    isDeleting,
  } = useContactsParams();

  return (
    <Ul>
      {isFetching && <h2>Loading...</h2>}
      {contacts &&
        contactsList.map(({ id, name, number }) => (
          <Li key={id} id={id}>
            {name}: {number}
            <Button
              type="submit"
              onClick={() => {
                deleteContact(id);
              }}
              disabled={isDeleting}
            ></Button>
          </Li>
        ))}
    </Ul>
  );
};

export default ContactsList;
