import { render, screen } from "@testing-library/react";
import Todos from "./Todos";

const mockTodos = [
    'Todo 1',
    'Todo 2',
]

const mockAddTodo = jest.fn();

test('renders todo list correctly', () => {
    render(<Todos todos={mockTodos} addTodo={() => { }} />);

    expect(screen.getByText('My Todos')).toBeInTheDocument();

    expect(screen.getByText('Todo 10')).toBeInTheDocument();
    expect(screen.getByText('Todo 21')).toBeInTheDocument();

    expect(screen.getByRole('button', { name: 'Add Todo' })).toBeInTheDocument();
})

test('should not render the remove button', () => {
    render(<Todos todos={mockTodos} addTodo={() => { }} />);

    expect(screen.queryByRole('button', { name: 'Remove' })).not.toBeInTheDocument();
})

test('calls addTodo when clicked on add todo button', () => {
    render(<Todos todos={mockTodos} addTodo={mockAddTodo} />);

    // simulate a click
    screen.getByRole('button', { name: 'Add Todo' }).click();

    expect(mockAddTodo).toHaveBeenCalled();
    expect(mockAddTodo).toHaveBeenCalledTimes(1);
})
