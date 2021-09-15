import { Badge, IconButton } from '@material-ui/core';
import React from 'react';
import MailIcon from '@material-ui/icons/Mail';

export default function IconbuttonComponent() {
  return (
    <div>
      <IconButton aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="secondary">
          <MailIcon />
        </Badge>
      </IconButton>
    </div>
  );
}
