import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box } from "@mui/material";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex", height: "90vh", alignItems: "flex-end" }}>
      <BottomNavigation
        sx={{
          width: "100%",
          backgroundColor: "black",
        }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Recents"
          value="recents"
          icon={<RestoreIcon sx={{ color: "white" }} />}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon sx={{ color: "white" }} />}
        />
        <BottomNavigationAction
          label="Nearby"
          value="nearby"
          icon={<LocationOnIcon sx={{ color: "white" }} />}
        />
        <BottomNavigationAction
          label="Folder"
          value="folder"
          icon={<FolderIcon sx={{ color: "white" }} />}
        />
      </BottomNavigation>
    </Box>
  );
}
