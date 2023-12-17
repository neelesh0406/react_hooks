import { render, screen, waitFor } from "@testing-library/react";
import ApiMock from "./ApiMock";
import { server } from "../../mocks/server";
import { rest } from "msw";

test("renders Apimock component", () => {
  render(<ApiMock />);
  expect(screen.getByText("Users")).toBeInTheDocument();
});

test("renders a list of users", async () => {
  render(<ApiMock />);
  const users = await screen.findAllByRole("listitem");
  expect(users).toHaveLength(3);
});

test("displays error when error returned from API", async () => {
  server.use(
    rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );
  render(<ApiMock />);

  await waitFor(() => {
    const errorText = screen.getByText("Error fetching users");
    expect(errorText).toBeInTheDocument();
  });
});
