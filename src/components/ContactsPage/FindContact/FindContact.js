import { useFilterParams } from "hooks/ContactsHooks/useFilterParams";
import React from "react";
import { Input } from "./FindContact.styled";

const FindContact = () => {
  const { filter, onChange } = useFilterParams();

  return (
    <div>
      <h4>Find contacts by name</h4>
      <Input type="text" name="name" value={filter} onChange={onChange}></Input>
    </div>
  );
};

export default FindContact;
