import reducer, { setTaskSlice } from "../../redux/slice/tasks";

test("should return the initial state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual([
    {
      id: "",
      title: "",
      message: "",
    },
  ]);
});
