import {
  useDeleteContactsMutation,
  useGetContactsQuery,
} from "redux/auth/Contact-operation";
import { useFilterParams } from "./useFilterParams";

export const useContactsParams = () => {
  const { filter } = useFilterParams();
  const [
    deleteContact,
    { isLoading: isDeleting },
  ] = useDeleteContactsMutation();
  const { data: contacts, isFetching } = useGetContactsQuery();

  const getFiltredContacts = () => {
    if (contacts) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };
  const contactsList = getFiltredContacts();

  return { deleteContact, isFetching, contacts, contactsList, isDeleting };
};
