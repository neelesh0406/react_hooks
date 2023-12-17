import { render, screen } from "@testing-library/react";
import App from "./App";

test('App component', () => {
    render(<App />);
    const text = screen.getByText(/Hello world/i);
    const title = screen.getByTitle('women with UMBRELLA'); // pass
    // const title2 = screen.getByTitle('women with UMBRELL'); // fail

    expect(text).toBeInTheDocument();
    expect(title).toBeInTheDocument(); // pass
    // expect(title2).toBeInTheDocument(); // fail
})