import * as React from 'react';

import { render, screen } from '../../testUtils';

import { Modal } from '.';

const onClick = jest.fn();

describe('If modal is open', () => {
  test('Testing modal', () => {
    render(
      <Modal open setOpen={onClick} title="Modal title">
        Modal is open
      </Modal>,
    );
    expect(screen.getByText('Modal is open')).toBeInTheDocument();
  });
});
