import {StyledPagination} from "./styles"
import * as React from "react";

export default function ListPagination({
  pagination,
  loading,
  handlePagination,
}) {

  return (
    <StyledPagination
      count={Math.ceil((pagination - 1)/ 10)}
      onChange={handlePagination}
      disabled={loading === "loading"}
      color="primary"
    />
  );
}
