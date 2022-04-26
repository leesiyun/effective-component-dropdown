import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";

export const SidebarDate = [
  {
    title: "Overview",
    path: "/overview",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Users",
        path: "/overview/users",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Revenue",
        path: "/overview/revenue",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <RiIcons.RiFileList2Fill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Report",
        path: "/reports/report1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Report 2",
        path: "/reports/report2",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Report 3",
        path: "/reports/report3",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Products",
    path: "/products",
    icon: <BsIcons.BsCartPlusFill />,
  },
  {
    title: "Team",
    path: "/team",
    icon: <RiIcons.RiTeamFill />,
  },
  {
    title: "Messages",
    path: "/message",
    icon: <IoIcons.IoMdMail />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Message",
        path: "/messages/message1",
        icon: <IoIcons.IoMdMail />,
      },
      {
        title: "Message2",
        path: "/messages/message2",
        icon: <IoIcons.IoMdMail />,
      },
    ],
  },
  {
    title: "Support",
    path: "/support",
    icon: <BsIcons.BsQuestionCircleFill />,
  },
];
