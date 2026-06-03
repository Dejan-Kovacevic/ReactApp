import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from '../TodoList';

// Ensure new todo item appears in list when form is submitted

test('adds a new todo item when the form is submitted', async () => {
  render(<TodoList />);

  const input = screen.getByPlaceholderText(/add a todo/i);
  const button = screen.getByRole('button', { name: /add todo/i });

  await userEvent.type(input, 'learn testing');
  await userEvent.click(button);

  expect(screen.getByText('learn testing')).toBeInTheDocument();
});
