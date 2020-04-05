import React from "react";
import Input from "./Input";
import { render } from "@testing-library/react";

describe("Input", () => {
  it("should tie he label to the input via htmlFor", () => {
    //arrange

    //act
    const { getByLabelText } = render(
      <Input id="test" label="test" onChange={() => {}} value="" />
    );

    // assert
    getByLabelText("test");
  });
});
