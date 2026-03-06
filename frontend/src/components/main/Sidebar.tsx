// 'use client'

// import React , {useState}from 'react'
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Box,
//     IconButton,

//   Typography,
//   Avatar,
// } from '@mui/material'
// import {
//   Dashboard as DashboardIcon,
//   AccountBalanceWallet as WalletIcon,
//   Assignment as SurrenderIcon,
//   Settings as SettingsIcon,
// } from '@mui/icons-material'
// import Link from 'next/link'
// import {
//   Notifications as NotificationsIcon,
//   MoreVert as MoreVertIcon,
// } from '@mui/icons-material'

// interface SidebarProps {
//   selectedMenu: string
//   onMenuSelect: (menu: string) => void
// }

// const menuItems = [
//   { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
//   { text: 'Imprest', icon: <WalletIcon />, path: '/imprest' },
//   { text: 'Surrender', icon: <SurrenderIcon />, path: '/surrender' },
//   { text: 'Admin', icon: <SettingsIcon />, path: '/admin' },
// ]


// export default function Sidebar({ selectedMenu, onMenuSelect }: SidebarProps) {
//      const [notifAnchor, setNotifAnchor] = useState<null | HTMLElement>(null)
//       const [profileAnchor, setProfileAnchor] = useState<null | HTMLElement>(null)
    
//       const handleNotifClick = (event: React.MouseEvent<HTMLElement>) => {
//         setNotifAnchor(event.currentTarget)
//       }
    
//       const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
//         setProfileAnchor(event.currentTarget)
//       }
    
//       const handleClose = () => {
//         setNotifAnchor(null)
//         setProfileAnchor(null)
//       }
    
//   return (
//     <Drawer
//       variant="permanent"
//       sx={{
//         width: 260,
//         flexShrink: 0,
//         '& .MuiDrawer-paper': {
//           width: 260,
//           boxSizing: 'border-box',
//           borderRight: '1px solid #E5E7EB',
//         },
//       }}
//     >
//       {/* Logo Section */}
//       <Box sx={{ p: 3, borderBottom: '1px solid #E5E7EB' }}>
//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//           <Avatar
//             sx={{
//               width: 40,
//               height: 40,
//               bgcolor: '#FF6B35',
//               fontWeight: 'bold',
//             }}
//           >
//             K
//           </Avatar>
//           <Box>
//             <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
//               KNBS
//             </Typography>
//             <Typography variant="caption" color="text.secondary">
//               Super User
//             </Typography>
//           </Box>
//         </Box>
//       </Box>

//       {/* Menu Items */}
//       <List sx={{ px: 2, py: 2 }}>
//   {menuItems.map((item) => (
//     <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
//       <ListItemButton
//         component={Link}
//         href={item.path}
//         selected={selectedMenu === item.text}
//         onClick={() => onMenuSelect(item.text)}
//         sx={{
//           borderRadius: 2,
//           '&.Mui-selected': {
//             backgroundColor: '#FFF4F0',
//             color: '#FF6B35',
//             '& .MuiListItemIcon-root': {
//               color: '#FF6B35',
//             },
//             '&:hover': {
//               backgroundColor: '#FFE8DF',
//             },
//           },
//           '&:hover': {
//             backgroundColor: '#F5F7FA',
//           },
//         }}
//       >
//         <ListItemIcon
//           sx={{
//             minWidth: 40,
//             color: selectedMenu === item.text ? '#FF6B35' : '#6B7280',
//           }}
//         >
//           {item.icon}
//         </ListItemIcon>
//         <ListItemText
//           primary={item.text}
//           primaryTypographyProps={{
//             fontWeight: selectedMenu === item.text ? 600 : 500,
//           }}
//         />
//       </ListItemButton>
//     </ListItem>
//   ))}
// </List>

//    <Box
//             sx={{
//               display: 'flex',
//               alignItems: 'center',
//               gap: 2,
//               pl: 2,
//               borderLeft: '1px solid #E5E7EB',
//             }}
//           >
//             <Box sx={{ textAlign: 'right' }}>
//               <Typography variant="body2" sx={{ fontWeight: 600 }}>
//                 Michael Robinson
//               </Typography>
//               <Typography variant="caption" color="text.secondary">
//                 michael.robin@gmail.com
//               </Typography>
//             </Box>
//             <Avatar
//               src="/api/placeholder/40/40"
//               sx={{ width: 40, height: 40 }}
//             />
//             <IconButton
//               onClick={handleProfileClick}
//               size="small"
//               sx={{ color: '#6B7280' }}
//             >
//               <MoreVertIcon />
//             </IconButton>
//           </Box>

//     </Drawer>
//   )
// }

'use client'

import React from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Avatar,
  IconButton,
} from '@mui/material'
import {
  Dashboard as DashboardIcon,
  AccountBalanceWallet as WalletIcon,
  Assignment as SurrenderIcon,
  Settings as SettingsIcon,
  MoreVert as MoreVertIcon,
} from '@mui/icons-material'
import Link from 'next/link'
import PeopleIcon from '@mui/icons-material/People'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import PaymentIcon from '@mui/icons-material/Payment'
interface SidebarProps {
  selectedMenu: string
  onMenuSelect: (menu: string) => void
}

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
{ text: 'Imprest', icon: <AccountBalanceWalletIcon />, path: '/imprest' },
  { text: 'Payment Authorization', icon: <PaymentIcon />, path: '/payament/payment_authorization' },
  { text: 'Surrender', icon: <SurrenderIcon />, path: '/surrender' },
  { text: 'User Delegation', icon: <HowToRegIcon />, path: '/admin/userdelegation' },
  { text: 'User Management', icon: <PeopleIcon />, path: '/admin/usermanagement' },
  // { text: 'Admin', icon: <SettingsIcon />, path: '/admin' },
]

export default function Sidebar({ selectedMenu, onMenuSelect }: SidebarProps) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 260,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 260,
          boxSizing: 'border-box',
          borderRight: '1px solid #E5E7EB',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      {/* Top Logo */}
      <Box sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar sx={{ bgcolor: '#FF6B35', fontWeight: 700 }}>K</Avatar>
          <Box>
            <Typography fontWeight={600}>KNBS</Typography>
            <Typography variant="caption" color="text.secondary">
              Super User
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Menu */}
      <List sx={{ px: 2 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              component={Link}
              href={item.path}
              selected={selectedMenu === item.text}
              onClick={() => onMenuSelect(item.text)}
              sx={{
                borderRadius: 2,
                py: 1.2,
                '&.Mui-selected': {
                  backgroundColor: '#FFF4F0',
                  color: '#FF6B35',
                  '& .MuiListItemIcon-root': {
                    color: '#FF6B35',
                  },
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Spacer */}
      <Box sx={{ flexGrow: 1 }} />

      {/* Bottom User Profile */}
      <Box
        sx={{
          p: 2,
          borderTop: '1px solid #E5E7EB',
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
        }}
      >
        <Avatar src="https://i.pravatar.cc/40" />
        <Box sx={{ flexGrow: 1 }}>
          <Typography fontSize={14} fontWeight={600}>
            Michael Robinson
          </Typography>
          <Typography fontSize={12} color="text.secondary">
            michael.robin@gmail.com
          </Typography>
        </Box>
        <IconButton size="small">
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </Box>
    </Drawer>
  )
}
