import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  Collapse,
  ListItemIcon,
  Divider,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SchoolIcon from "@mui/icons-material/School";
import ArticleIcon from "@mui/icons-material/Article";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import CreateIcon from "@mui/icons-material/Create";
import MapIcon from "@mui/icons-material/Map";
import MoneyIcon from "@mui/icons-material/AttachMoney";
import CertificateIcon from "@mui/icons-material/Verified";
import FeedbackIcon from "@mui/icons-material/Feedback";
import HelpIcon from "@mui/icons-material/Help";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import MoneyOffIcon from "@mui/icons-material/MoneyOff"; // Replaces RefundIcon
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ForumIcon from "@mui/icons-material/Forum"; // Replaces DiscordIcon

const SideDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openBlogMenu, setOpenBlogMenu] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleBlogMenuClick = () => {
    setOpenBlogMenu(!openBlogMenu);
  };

  const drawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component="a" href="/courses">
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary="Courses" />
        </ListItem>
        <ListItem button component="a" href="/feed">
          <ListItemIcon>
            <ArticleIcon />
          </ListItemIcon>
          <ListItemText primary="Blog" />
        </ListItem>
        <ListItem button component="a" href="/gift-course">
          <ListItemIcon>
            <CardGiftcardIcon />
          </ListItemIcon>
          <ListItemText primary="Gift a Course" />
        </ListItem>
        <ListItem button onClick={handleBlogMenuClick}>
          <ListItemIcon>
            <CreateIcon />
          </ListItemIcon>
          <ListItemText primary="Write a Blog" />
          {openBlogMenu ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openBlogMenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              sx={{ pl: 4 }}
              component="a"
              href="/write-blog/tutorial"
            >
              <ListItemText primary="Tutorial" />
            </ListItem>
            <ListItem
              button
              sx={{ pl: 4 }}
              component="a"
              href="/write-blog/personal"
            >
              <ListItemText primary="Personal" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button component="a" href="/roadmaps">
          <ListItemIcon>
            <MapIcon />
          </ListItemIcon>
          <ListItemText primary="Roadmaps" />
        </ListItem>
        <ListItem button component="a" href="/affiliate">
          <ListItemIcon>
            <MoneyIcon />
          </ListItemIcon>
          <ListItemText primary="Become Affiliate" />
        </ListItem>
        <ListItem button component="a" href="/certificates">
          <ListItemIcon>
            <CertificateIcon />
          </ListItemIcon>
          <ListItemText primary="Certificates" />
        </ListItem>
        <ListItem button component="a" href="/billing">
          <ListItemIcon>
            <MoneyIcon />
          </ListItemIcon>
          <ListItemText primary="Billing" />
        </ListItem>
        <ListItem button component="a" href="/feedback">
          <ListItemIcon>
            <FeedbackIcon />
          </ListItemIcon>
          <ListItemText primary="Feedback" />
        </ListItem>
        <ListItem button component="a" href="/help">
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText primary="Need Help" />
        </ListItem>
      </List>

      <Divider />

      {/* Footer Links */}
      <Box sx={{ p: 2 }}>
        <Typography variant="body2">Privacy Policy</Typography>
        <Typography variant="body2">Terms of Service</Typography>
        <Typography variant="body2">Refund Policy</Typography>
        <Typography variant="body2">Contact Us</Typography>

        <Box sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}>
          <InstagramIcon />
          <LinkedInIcon />
          <YouTubeIcon />
          <ForumIcon /> {/* Replaces DiscordIcon */}
        </Box>

        <Typography
          variant="caption"
          display="block"
          align="center"
          sx={{ mt: 2 }}
        >
          Made with ❤️ in India
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
        edge="start"
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList()}
      </Drawer>
    </>
  );
};

export default SideDrawer;
