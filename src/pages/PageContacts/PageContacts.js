import InputPhoneBook from "components/ContactsPage/inputPhoneBook/inputPhoneBook";
import FindContact from "components/ContactsPage/FindContact/FindContact";
import ContactsList from "components/ContactsPage/contactsList/contactsList";
import { Toaster } from "react-hot-toast";
import { Div, DivContainer } from "./PageContacts.styled";

const PageContacts = () => {
  return (
    <DivContainer>
      <Div>
        <h1>Phonebook</h1>
        <InputPhoneBook />
        <h1>Contacts</h1>
        <FindContact />
        <ContactsList />
        <Toaster />
      </Div>
    </DivContainer>
  );
};

export default PageContacts;
