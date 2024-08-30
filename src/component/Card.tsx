import {
  Avatar,
  AvatarGroup,
  Card,
  Checkbox,
  Menu,
  MenuItem,
} from "@mui/material";
import { UserData } from "./config";
import { useState } from "react";

export default function AvatarImage() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const displayData = open ? UserData.slice(3) : UserData;

  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const handleCheckboxChange = (id: number) => {
    setCheckedItems((prev: number[]) => {
      const selectedId = prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id];

      const select = UserData.filter((data) => selectedId.includes(data.id));

      const selectedName = select.map((i) => i.name);

      console.log(selectedName);

      return selectedId;
    });
  };

  return (
    <Card sx={{ width: "25ch", height: "20ch", ml: "1ch", mt: "1ch" }}>
      <AvatarGroup
        max={4}
        sx={{ mr: '4.3ch', mt: '7ch' }}
        slotProps={{
          additionalAvatar: {
            onClick: handleOpen,
          },
        }}
      >
        {UserData.map((data, index) => (
          <Avatar
            key={index}
            src={data.avatar}
            onClick={() => handleCheckboxChange(data.id)}
          ></Avatar>
        ))}
      </AvatarGroup>
      <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
        {displayData.map((data) => (
          <MenuItem
            key={data.id}
            onChange={() => handleCheckboxChange(data.id)}
          >
            <Checkbox checked={checkedItems.includes(data.id)} />
            <Avatar src={data.avatar} sx={{ mr: "2ch" }} />
            {data.name}
          </MenuItem>
        ))}
      </Menu>
    </Card>
  );
}
