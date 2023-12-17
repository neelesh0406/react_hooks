import { act, render, screen } from "@testing-library/react";
import Counter from "./Counter";
import CounterDisplay1 from "./CounterDisplay1";

jest.mock('./CounterDisplay1');

test('Counter component', () => {
    render(<Counter />)
    expect(screen.getByText('Counter Display')).toBeInTheDocument();
})

test('renders CounterDisplay1 component', () => {
    render(<Counter />)
    expect(CounterDisplay1).toHaveBeenCalled();
    expect(CounterDisplay1).toHaveBeenCalledWith({ count: 0 }, {});
})

test('renders CounterDisplay1 component', () => {
    render(<Counter />)
    expect(CounterDisplay1).toHaveBeenCalled();
    expect(CounterDisplay1).toHaveBeenCalledWith({ count: 0 }, {});

    act(() => {
        /* fire events that update state */
        screen.getByText('Increment').click();
    });
    expect(CounterDisplay1).toHaveBeenCalled();
    expect(CounterDisplay1).toHaveBeenCalledWith({ count: 1 }, {});
})