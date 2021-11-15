import React from "react";
import AppBarSearch from "../AppBarSearch";

import { render, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

const renderAppBarSearch = () => render(<AppBarSearch />);

afterEach(() => {
  cleanup();
});

test("initial UI is rendered as expected", () => {
  let { getByTestId } = renderAppBarSearch();
  expect(getByTestId("search-input").value).toBeFalsy();
});
